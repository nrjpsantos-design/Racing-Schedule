'use client'

import { useMemo, useState } from 'react'
import {
  addDays, addMonths, addWeeks,
  eachDayOfInterval, endOfMonth, endOfWeek,
  format, isSameDay, isSameMonth,
  startOfMonth, startOfWeek,
} from 'date-fns'
import { toZonedTime } from 'date-fns-tz'
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react'
import clsx from 'clsx'
import type { EnrichedEvent, EnrichedSession } from '@/types'

export type CalendarMode = 'month' | 'week' | 'day'

interface DaySession {
  event: EnrichedEvent
  session: EnrichedSession
}

interface Props {
  events: EnrichedEvent[]
  timezone: string
  now: Date
}

const WEEK_OPTS = { weekStartsOn: 1 as const }
const MODE_OPTS: { value: CalendarMode; label: string }[] = [
  { value: 'month', label: 'Month' },
  { value: 'week',  label: 'Week' },
  { value: 'day',   label: 'Day' },
]

function dayKey(d: Date): string {
  return format(d, 'yyyy-MM-dd')
}

export function CalendarView({ events, timezone, now }: Props) {
  const today = toZonedTime(now, timezone)
  const [mode, setMode] = useState<CalendarMode>('month')
  const [cursor, setCursor] = useState<Date>(() => toZonedTime(new Date(), timezone))

  // All sessions indexed by local calendar day
  const sessionsByDay = useMemo(() => {
    const map = new Map<string, DaySession[]>()
    for (const event of events) {
      for (const session of event.enrichedSessions) {
        const key = dayKey(session.localStart)
        if (!map.has(key)) map.set(key, [])
        map.get(key)!.push({ event, session })
      }
    }
    for (const list of map.values()) {
      list.sort((a, b) => a.session.localStart.getTime() - b.session.localStart.getTime())
    }
    return map
  }, [events])

  const navigate = (dir: -1 | 1) => {
    setCursor(c =>
      mode === 'month' ? addMonths(c, dir)
      : mode === 'week' ? addWeeks(c, dir)
      : addDays(c, dir)
    )
  }

  const goToDay = (day: Date) => {
    setCursor(day)
    setMode('day')
  }

  const headerLabel =
    mode === 'month' ? format(cursor, 'MMMM yyyy')
    : mode === 'week' ? `${format(startOfWeek(cursor, WEEK_OPTS), 'MMM d')} – ${format(endOfWeek(cursor, WEEK_OPTS), 'MMM d, yyyy')}`
    : format(cursor, 'EEEE, MMM d, yyyy')

  return (
    <div className="space-y-3">
      {/* Calendar toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-1">
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded text-gray-500 hover:text-gray-200 hover:bg-gray-800/60 transition-colors min-h-[36px] min-w-[36px] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-blue-400"
            aria-label={`Previous ${mode}`}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => navigate(1)}
            className="p-2 rounded text-gray-500 hover:text-gray-200 hover:bg-gray-800/60 transition-colors min-h-[36px] min-w-[36px] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-blue-400"
            aria-label={`Next ${mode}`}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => setCursor(toZonedTime(new Date(), timezone))}
            className="ml-1 px-3 py-1.5 rounded text-[11px] font-medium text-gray-400 border border-gray-700 hover:text-gray-200 hover:border-gray-500 transition-colors focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            Today
          </button>
          <h2 className="ml-3 text-sm font-bold text-white font-heading" aria-live="polite">
            {headerLabel}
          </h2>
        </div>

        {/* Mode switcher */}
        <div className="flex rounded-md border border-gray-800 overflow-hidden" role="group" aria-label="Calendar view mode">
          {MODE_OPTS.map(opt => (
            <button
              key={opt.value}
              onClick={() => setMode(opt.value)}
              aria-pressed={mode === opt.value}
              className={clsx(
                'px-3 py-1.5 text-[11px] font-medium transition-colors focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-inset',
                mode === opt.value
                  ? 'bg-gray-800 text-white'
                  : 'text-gray-500 hover:text-gray-300',
              )}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {mode === 'month' && (
        <MonthGrid cursor={cursor} today={today} sessionsByDay={sessionsByDay} onSelectDay={goToDay} />
      )}
      {mode === 'week' && (
        <WeekView cursor={cursor} today={today} sessionsByDay={sessionsByDay} onSelectDay={goToDay} />
      )}
      {mode === 'day' && (
        <DayView cursor={cursor} today={today} sessionsByDay={sessionsByDay} />
      )}
    </div>
  )
}

/* ---------- Month ---------- */

function MonthGrid({ cursor, today, sessionsByDay, onSelectDay }: {
  cursor: Date
  today: Date
  sessionsByDay: Map<string, DaySession[]>
  onSelectDay: (d: Date) => void
}) {
  const days = eachDayOfInterval({
    start: startOfWeek(startOfMonth(cursor), WEEK_OPTS),
    end: endOfWeek(endOfMonth(cursor), WEEK_OPTS),
  })

  return (
    <div className="rounded-lg border border-gray-800 overflow-hidden">
      {/* Weekday header */}
      <div className="grid grid-cols-7 border-b border-gray-800 bg-gray-900/40">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(d => (
          <div key={d} className="px-1.5 py-1.5 text-center text-[10px] font-semibold uppercase tracking-wider text-gray-500">
            {d}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7">
        {days.map(day => {
          const key = dayKey(day)
          const daySessions = sessionsByDay.get(key) ?? []
          // Unique events on this day, keeping first-session order
          const dayEvents: EnrichedEvent[] = []
          for (const { event } of daySessions) {
            if (!dayEvents.includes(event)) dayEvents.push(event)
          }
          const inMonth = isSameMonth(day, cursor)
          const isToday = isSameDay(day, today)
          const hasLive = daySessions.some(s => s.session.status === 'live')
          const visible = dayEvents.slice(0, 3)
          const overflow = dayEvents.length - visible.length

          return (
            <button
              key={key}
              onClick={() => onSelectDay(day)}
              className={clsx(
                'relative flex flex-col items-stretch gap-1 min-h-[72px] sm:min-h-[96px] p-1 sm:p-1.5 border-b border-r border-gray-800/60 text-left transition-colors',
                'hover:bg-gray-800/30 focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-inset',
                !inMonth && 'bg-gray-950/60',
              )}
              aria-label={`${format(day, 'EEEE, MMM d')} — ${dayEvents.length} ${dayEvents.length === 1 ? 'event' : 'events'}`}
            >
              <span className={clsx(
                'self-end text-[11px] tabular-nums leading-none rounded-full w-5 h-5 flex items-center justify-center',
                isToday ? 'bg-amber-400 text-gray-950 font-bold'
                : inMonth ? 'text-gray-400'
                : 'text-gray-700',
              )}>
                {format(day, 'd')}
              </span>

              {visible.map(ev => (
                <span
                  key={ev.id}
                  className={clsx(
                    'flex items-center gap-1 rounded px-1 py-0.5 text-[9px] sm:text-[10px] leading-tight truncate',
                    ev.status === 'live' ? 'bg-red-950/60 text-red-300' : 'bg-gray-800/70 text-gray-300',
                    !inMonth && 'opacity-50',
                  )}
                >
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: ev.championship.color }} />
                  <span className="truncate hidden sm:inline">{ev.championship.shortName}</span>
                </span>
              ))}
              {overflow > 0 && (
                <span className="text-[9px] text-gray-500 px-1">+{overflow} more</span>
              )}

              {hasLive && (
                <span className="absolute top-1 left-1 w-1.5 h-1.5 rounded-full bg-red-500 motion-safe:animate-pulse" aria-hidden="true" />
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}

/* ---------- Week ---------- */

function WeekView({ cursor, today, sessionsByDay, onSelectDay }: {
  cursor: Date
  today: Date
  sessionsByDay: Map<string, DaySession[]>
  onSelectDay: (d: Date) => void
}) {
  const days = eachDayOfInterval({
    start: startOfWeek(cursor, WEEK_OPTS),
    end: endOfWeek(cursor, WEEK_OPTS),
  })

  return (
    <div className="grid grid-cols-1 sm:grid-cols-7 gap-2 sm:gap-0 sm:rounded-lg sm:border sm:border-gray-800 sm:overflow-hidden">
      {days.map(day => {
        const key = dayKey(day)
        const daySessions = sessionsByDay.get(key) ?? []
        const isToday = isSameDay(day, today)

        return (
          <div
            key={key}
            className={clsx(
              'rounded-lg border border-gray-800 sm:rounded-none sm:border-0 sm:border-r sm:border-gray-800/60 sm:last:border-r-0 min-h-[64px] sm:min-h-[240px]',
              isToday && 'bg-amber-400/[0.03]',
            )}
          >
            <button
              onClick={() => onSelectDay(day)}
              className={clsx(
                'w-full flex sm:flex-col items-center sm:items-stretch gap-2 sm:gap-0 px-2 py-1.5 text-left sm:text-center border-b border-gray-800/60 transition-colors',
                'hover:bg-gray-800/30 focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-inset',
              )}
              aria-label={`Open ${format(day, 'EEEE, MMM d')}`}
            >
              <span className="text-[10px] uppercase tracking-wider font-semibold text-gray-500">
                {format(day, 'EEE')}
              </span>
              <span className={clsx(
                'text-sm font-bold tabular-nums sm:mt-0.5',
                isToday ? 'text-amber-400' : 'text-gray-300',
              )}>
                {format(day, 'd')}
              </span>
            </button>

            <div className="p-1.5 space-y-1">
              {daySessions.length === 0 && (
                <p className="text-[10px] text-gray-700 text-center py-2 hidden sm:block">—</p>
              )}
              {daySessions.map(({ event, session }, i) => (
                <div
                  key={`${event.id}-${i}`}
                  className={clsx(
                    'rounded px-1.5 py-1 text-[10px] leading-tight',
                    session.status === 'live' ? 'bg-red-950/60'
                    : session.status === 'completed' ? 'bg-gray-900/40 opacity-60'
                    : 'bg-gray-800/60',
                  )}
                >
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: event.championship.color }} />
                    <span className="font-mono text-gray-400 tabular-nums">{format(session.localStart, 'HH:mm')}</span>
                    <span className="font-semibold text-gray-200 truncate">{event.championship.shortName}</span>
                    {session.status === 'live' && (
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 motion-safe:animate-pulse shrink-0 ml-auto" aria-label="Live" />
                    )}
                  </div>
                  <p className="text-gray-500 truncate mt-0.5">{session.label}</p>
                </div>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

/* ---------- Day ---------- */

function DayView({ cursor, today, sessionsByDay }: {
  cursor: Date
  today: Date
  sessionsByDay: Map<string, DaySession[]>
}) {
  const daySessions = sessionsByDay.get(dayKey(cursor)) ?? []
  const isToday = isSameDay(cursor, today)

  if (daySessions.length === 0) {
    return (
      <div className="rounded-lg border border-gray-800 p-8 text-center">
        <p className="text-gray-400">No sessions on this day.</p>
        <p className="text-xs text-gray-500 mt-1.5">
          {isToday ? 'Check the month view for the next race weekend.' : 'Try another day or switch to month view.'}
        </p>
      </div>
    )
  }

  return (
    <div className="rounded-lg border border-gray-800 overflow-hidden">
      <div className="divide-y divide-gray-800/60">
        {daySessions.map(({ event, session }, i) => (
          <div
            key={`${event.id}-${i}`}
            className={clsx(
              'flex items-center gap-3 px-3 sm:px-4 py-2.5',
              session.status === 'live' ? 'bg-red-950/25'
              : session.status === 'completed' ? 'opacity-50'
              : undefined,
            )}
          >
            {/* Time block */}
            <div className="w-14 shrink-0 text-right">
              <p className="font-mono text-sm text-gray-200 tabular-nums leading-none">
                {format(session.localStart, 'HH:mm')}
              </p>
              <p className="font-mono text-[10px] text-gray-600 tabular-nums mt-0.5">
                {format(session.localEnd, 'HH:mm')}
              </p>
            </div>

            <span className="w-0.5 self-stretch rounded-full shrink-0" style={{ backgroundColor: event.championship.color, opacity: 0.7 }} />

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-bold text-white">{event.championship.shortName}</span>
                <span className="text-xs text-gray-400">{session.label}</span>
                {session.status === 'live' && (
                  <span className="flex items-center gap-1 text-red-400 text-[10px] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 motion-safe:animate-pulse" /> LIVE
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1 mt-0.5 text-[11px] text-gray-500 truncate">
                <span className="truncate">{event.name}</span>
                <span className="text-gray-700">·</span>
                <MapPin className="w-3 h-3 shrink-0 text-gray-600" />
                <span className="truncate">{event.circuit.city}</span>
              </div>
            </div>

            <span className="text-[10px] text-gray-600 tabular-nums shrink-0 hidden sm:block">
              {session.durationMinutes} min
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
