import {
  parseISO, isValid, addMinutes, isAfter, isBefore,
  startOfDay, endOfDay, addDays, addMonths,
  endOfWeek,
} from 'date-fns'
import { toZonedTime } from 'date-fns-tz'
import type {
  Championship, RaceEvent, Session,
  EnrichedEvent, EnrichedSession,
  Filters, SessionStatus,
} from '@/types'

export function getSessionStatus(session: Session, now: Date): SessionStatus {
  const start = parseISO(session.start)
  if (!isValid(start)) return 'upcoming'
  const end = addMinutes(start, session.durationMinutes)
  if (!isValid(end)) return 'upcoming'
  if (isAfter(now, end)) return 'completed'
  if (isBefore(now, start)) return 'upcoming'
  return 'live'
}

export function getEventStatus(sessions: Session[], now: Date): SessionStatus {
  const statuses = sessions.map(s => getSessionStatus(s, now))
  if (statuses.some(s => s === 'live')) return 'live'
  if (statuses.every(s => s === 'completed')) return 'completed'
  return 'upcoming'
}

export function enrichSessions(sessions: Session[], now: Date, timezone: string): EnrichedSession[] {
  return sessions.map(s => {
    const start = parseISO(s.start)
    const end = isValid(start) ? addMinutes(start, s.durationMinutes) : start
    return {
      ...s,
      status: getSessionStatus(s, now),
      localStart: isValid(start) ? toZonedTime(start, timezone) : start,
      localEnd: isValid(end) ? toZonedTime(end, timezone) : end,
    }
  })
}

export function enrichEvent(event: RaceEvent, championship: Championship, now: Date, timezone: string): EnrichedEvent {
  const enriched = enrichSessions(event.sessions, now, timezone)
  const status = getEventStatus(event.sessions, now)
  const nextSession = enriched.find(s => s.status === 'live') ?? enriched.find(s => s.status === 'upcoming') ?? null
  return { ...event, championship, status, nextSession, enrichedSessions: enriched }
}

export function getAllEnrichedEvents(championships: Championship[], now: Date, timezone: string): EnrichedEvent[] {
  const events: EnrichedEvent[] = []
  for (const champ of championships) {
    try {
      for (const event of champ.events) {
        try {
          events.push(enrichEvent(event, champ, now, timezone))
        } catch (err) {
          if (process.env.NODE_ENV === 'development') {
            console.warn(`[events] Skipping event "${event.name ?? 'unknown'}" in "${champ.name}":`, err)
          }
        }
      }
    } catch (err) {
      if (process.env.NODE_ENV === 'development') {
        console.warn(`[events] Skipping championship "${champ.name}":`, err)
      }
    }
  }
  return events.sort((a, b) => {
    const aFirst = a.sessions[0]?.start ?? ''
    const bFirst = b.sessions[0]?.start ?? ''
    return aFirst.localeCompare(bFirst)
  })
}

export function getNextEvent(events: EnrichedEvent[]): EnrichedEvent | null {
  return (
    events.find(e => e.status === 'live') ??
    events.find(e => e.status === 'upcoming') ??
    null
  )
}

export function applyFilters(events: EnrichedEvent[], filters: Filters, now: Date, timezone: string): EnrichedEvent[] {
  return events.filter(event => {
    // Category filter
    if (filters.category !== 'all' && event.championship.category !== filters.category) return false

    // Championship filter
    if (filters.championships.length > 0 && !filters.championships.includes(event.championship.id)) return false

    // Status filter
    if (filters.period === 'live' && event.status !== 'live') return false
    if (filters.period === 'upcoming' && event.status === 'completed') return false
    if (filters.period === 'completed' && event.status !== 'completed') return false

    // Period filter (time-based)
    if (filters.period === 'today' || filters.period === 'week' || filters.period === 'month') {
      const localNow = toZonedTime(now, timezone)
      const raceStart = parseISO(event.sessions[0]?.start ?? '')
      const raceStartLocal = toZonedTime(raceStart, timezone)

      if (filters.period === 'today') {
        const dayStart = startOfDay(localNow)
        const dayEnd = endOfDay(localNow)
        if (isBefore(raceStartLocal, dayStart) || isAfter(raceStartLocal, dayEnd)) return false
      }
      if (filters.period === 'week') {
        const weekEnd = endOfWeek(addDays(localNow, 6))
        if (isBefore(raceStartLocal, startOfDay(localNow)) || isAfter(raceStartLocal, weekEnd)) return false
      }
      if (filters.period === 'month') {
        const monthEnd = endOfDay(addMonths(localNow, 1))
        if (isBefore(raceStartLocal, startOfDay(localNow)) || isAfter(raceStartLocal, monthEnd)) return false
      }
    }

    return true
  })
}

export function groupEventsByWeekend(events: EnrichedEvent[]): EnrichedEvent[][] {
  const groups: EnrichedEvent[][] = []
  for (const event of events) {
    const lastGroup = groups[groups.length - 1]
    if (!lastGroup) {
      groups.push([event])
      continue
    }
    const lastEvent = lastGroup[lastGroup.length - 1]
    const lastRaceStart = parseISO(lastEvent.sessions[lastEvent.sessions.length - 1]?.start ?? '')
    const thisFirstStart = parseISO(event.sessions[0]?.start ?? '')
    const daysDiff = Math.abs((thisFirstStart.getTime() - lastRaceStart.getTime()) / (1000 * 60 * 60 * 24))
    // Group events happening within 4 days of each other (same race weekend)
    if (daysDiff <= 4 && lastEvent.championship.id === event.championship.id) {
      lastGroup.push(event)
    } else {
      groups.push([event])
    }
  }
  return groups
}

export function getEventBroadcasts(event: EnrichedEvent, region: string) {
  const champ = event.championship
  if (event.broadcastOverrides?.[region]) return event.broadcastOverrides[region]
  if (champ.broadcasts[region]) return champ.broadcasts[region]
  if (champ.broadcasts['GLOBAL']) return champ.broadcasts['GLOBAL']
  return []
}

export function hasYoutubeBroadcast(event: EnrichedEvent, region: string): boolean {
  const entries = getEventBroadcasts(event, region)
  return entries.some(e => e.isYoutube && (e.type === 'free-streaming'))
}

export function getYoutubeUrl(event: EnrichedEvent, region: string): string | undefined {
  const entries = getEventBroadcasts(event, region)
  return entries.find(e => e.isYoutube)?.url
}
