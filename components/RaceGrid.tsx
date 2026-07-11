'use client'

import { useState, useEffect, useMemo, useCallback, useRef } from 'react'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import type { Championship, Filters, VehicleCategory } from '@/types'
import { getBrowserTimezone, getBrowserRegion, getTimezoneLabel } from '@/lib/timezone'
import { getAllEnrichedEvents, getNextEvent, applyFilters } from '@/lib/events'
import { useClock } from '@/lib/use-clock'
import { FilterBar } from './FilterBar'
import { NextEventBanner } from './NextEventBanner'
import { EventWeekend } from './EventWeekend'
import { CountdownTimer } from './CountdownTimer'
import { TimezoneSelector } from './TimezoneSelector'
import { RegionSelector } from './RegionSelector'
import { RefreshCw, ChevronDown, ChevronRight, List, Star, Keyboard } from 'lucide-react'
import clsx from 'clsx'

interface Props {
  championships: Championship[]
}

const DEFAULT_FILTERS: Filters = {
  category: 'all',
  championships: [],
  period: 'upcoming',
  region: 'GLOBAL',
}

const STORAGE_KEY_FAVORITES = 'racegrid_favorite_champs'

function filtersToParams(f: Filters): Record<string, string> {
  const p: Record<string, string> = {}
  if (f.category !== 'all') p.cat = f.category
  if (f.championships.length) p.champ = f.championships.join(',')
  if (f.period !== 'upcoming') p.period = f.period
  if (f.region !== 'GLOBAL') p.region = f.region
  return p
}

function paramsToFilters(params: URLSearchParams, region: string, championships: Championship[]): Filters {
  const champIds = params.get('champ')?.split(',').filter(Boolean) ?? []
  let category = (params.get('cat') as 'all' | VehicleCategory) ?? 'all'
  if (champIds.length > 0 && category === 'all') {
    const found = championships.find(c => c.id === champIds[0])
    if (found) category = found.category
  }
  return {
    category,
    championships: champIds,
    period: (params.get('period') as Filters['period']) ?? 'upcoming',
    region: params.get('region') ?? region,
  }
}

function loadFavorites(): Set<string> {
  if (typeof window === 'undefined') return new Set()
  try {
    const raw = localStorage.getItem(STORAGE_KEY_FAVORITES)
    if (!raw) return new Set()
    return new Set(JSON.parse(raw) as string[])
  } catch {
    return new Set()
  }
}

function saveFavorites(favorites: Set<string>) {
  try {
    localStorage.setItem(STORAGE_KEY_FAVORITES, JSON.stringify(Array.from(favorites)))
  } catch { /* storage full or unavailable */ }
}

interface ChampionshipGroup {
  championship: Championship
  events: import('@/types').EnrichedEvent[]
}

const SHORTCUTS = [
  { key: 'E', desc: 'Expand all' },
  { key: 'Esc', desc: 'Collapse all' },
  { key: '1–9', desc: 'Jump to championship' },
  { key: 'F', desc: 'Focus filters' },
]

export function RaceGrid({ championships }: Props) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const now = useClock()
  const [timezone, setTimezone] = useState('UTC')
  const [region, setRegion] = useState('GLOBAL')
  const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS)
  const [hydrated, setHydrated] = useState(false)
  const [expandedChamps, setExpandedChamps] = useState<Set<string>>(new Set())
  const [favorites, setFavorites] = useState<Set<string>>(new Set())
  const [showShortcuts, setShowShortcuts] = useState(false)
  const filterBarRef = useRef<HTMLDivElement>(null)
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map())
  const initialExpandDone = useRef(false)
  const expandedChampsRef = useRef(expandedChamps)
  const groupedEventsRef = useRef<ChampionshipGroup[]>([])

  // Keep refs in sync (runs after render, so useMemo values are available)
  useEffect(() => { expandedChampsRef.current = expandedChamps })
  useEffect(() => { groupedEventsRef.current = groupedEvents })

  // Load favorites on mount
  useEffect(() => {
    setFavorites(loadFavorites())
  }, [])

  // Persist favorites
  useEffect(() => {
    if (hydrated) saveFavorites(favorites)
  }, [favorites, hydrated])

  // Hydrate timezone and region from browser on mount
  useEffect(() => {
    const tz = getBrowserTimezone()
    const reg = getBrowserRegion()
    setTimezone(tz)
    setRegion(reg)
    const parsed = paramsToFilters(searchParams, reg, championships)
    setFilters(parsed)
    setHydrated(true)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // Sync filters to URL
  const handleFiltersChange = useCallback((next: Filters) => {
    setFilters(next)
    const params = new URLSearchParams(filtersToParams(next))
    router.replace(`${pathname}?${params.toString()}`, { scroll: false })
  }, [router, pathname])

  const handleTimezoneChange = useCallback((tz: string) => {
    setTimezone(tz)
  }, [])

  const handleRegionChange = useCallback((reg: string) => {
    setRegion(reg)
    handleFiltersChange({ ...filters, region: reg })
  }, [filters, handleFiltersChange])

  const allEvents = useMemo(
    () => hydrated ? getAllEnrichedEvents(championships, now, timezone) : [],
    [championships, now, timezone, hydrated]
  )

  const nextEvent = useMemo(() => getNextEvent(allEvents), [allEvents])

  const filteredEvents = useMemo(
    () => applyFilters(allEvents, filters, now, timezone),
    [allEvents, filters, now, timezone]
  )

  // Group filtered events by championship
  const groupedEvents: ChampionshipGroup[] = useMemo(() => {
    const map = new Map<string, ChampionshipGroup>()
    for (const event of filteredEvents) {
      const id = event.championship.id
      if (!map.has(id)) {
        map.set(id, { championship: event.championship, events: [] })
      }
      map.get(id)!.events.push(event)
    }
    const categoryOrder: Record<string, number> = { formula: 1, endurance: 2, touring: 3, moto: 4, rally: 5 }
    const groups = Array.from(map.values())

    return groups.sort((a, b) => {
      const aFav = favorites.has(a.championship.id) ? 0 : 1
      const bFav = favorites.has(b.championship.id) ? 0 : 1
      if (aFav !== bFav) return aFav - bFav
      const catDiff = (categoryOrder[a.championship.category] ?? 99) - (categoryOrder[b.championship.category] ?? 99)
      if (catDiff !== 0) return catDiff
      return a.championship.name.localeCompare(b.championship.name)
    })
  }, [filteredEvents, favorites])

  // Auto-expand championships that have live events
  useEffect(() => {
    const liveChamps = new Set<string>()
    for (const event of filteredEvents) {
      if (event.status === 'live') {
        liveChamps.add(event.championship.id)
      }
    }
    if (liveChamps.size > 0) {
      setExpandedChamps(prev => {
        const next = new Set(prev)
        for (const id of liveChamps) next.add(id)
        return next
      })
    }
  }, [filteredEvents])

  const toggleChamp = useCallback((id: string) => {
    setExpandedChamps(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }, [])

  const toggleFavorite = useCallback((id: string) => {
    setFavorites(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }, [])

  // Auto-expand first championship once on hydration — never again after user interacts
  useEffect(() => {
    if (hydrated && groupedEvents.length > 0 && !initialExpandDone.current) {
      initialExpandDone.current = true
      const firstNonFav = groupedEvents.find(g => !favorites.has(g.championship.id))
      const target = firstNonFav ?? groupedEvents[0]
      setExpandedChamps(new Set([target.championship.id]))
    }
  }, [hydrated, groupedEvents, favorites]) // eslint-disable-line react-hooks/exhaustive-deps

  // Keyboard shortcuts — stable listener, reads refs to avoid re-registering every 1s
  useEffect(() => {
    if (!hydrated) return

    const handleKeyDown = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName
      if (tag === 'INPUT' || tag === 'SELECT' || tag === 'TEXTAREA') return

      const currentExpanded = expandedChampsRef.current
      const currentGroups = groupedEventsRef.current

      if (e.key === 'e' || e.key === 'E') {
        e.preventDefault()
        if (currentExpanded.size === currentGroups.length) {
          setExpandedChamps(new Set())
        } else {
          setExpandedChamps(new Set(currentGroups.map(g => g.championship.id)))
        }
        return
      }

      if (e.key === 'Escape') {
        e.preventDefault()
        setExpandedChamps(new Set())
        return
      }

      if (e.key === 'f' || e.key === 'F') {
        e.preventDefault()
        const firstChip = filterBarRef.current?.querySelector('button')
        firstChip?.focus()
        return
      }

      const num = parseInt(e.key)
      if (num >= 1 && num <= 9 && num <= currentGroups.length) {
        e.preventDefault()
        const target = currentGroups[num - 1]
        const el = sectionRefs.current.get(target.championship.id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          el.focus({ preventScroll: true })
        }
        return
      }

      if (e.key === '?') {
        e.preventDefault()
        setShowShortcuts(v => !v)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [hydrated])

  if (!hydrated) {
    return (
      <div className="flex items-center justify-center py-20 text-gray-400">
        <RefreshCw className="w-5 h-5 animate-spin mr-2" />
        Loading schedule…
      </div>
    )
  }

  const totalFilteredEvents = filteredEvents.length
  const isActiveFilter = filters.category !== 'all' || filters.championships.length > 0 || filters.period !== 'upcoming'

  return (
    <div className="space-y-5">
      {/* Header — timing screen style */}
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-fade-in border-b border-gray-800 pb-4">
        <div className="flex items-center gap-3">
          {/* Timing screen logo area */}
          <div className="w-8 h-8 rounded bg-amber-400/10 border border-amber-400/20 flex items-center justify-center">
            <span className="text-amber-400 font-bold font-heading text-sm">R</span>
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-bold text-white tracking-tight font-heading leading-none">
              RaceGrid
            </h1>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-0.5 font-medium">
              Global Racing Schedule
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-sm">
          {/* Keyboard shortcuts toggle */}
          <button
            onClick={() => setShowShortcuts(v => !v)}
            className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-300 transition-colors min-h-[44px]"
            aria-label="Show keyboard shortcuts"
            title="Keyboard shortcuts (? to toggle)"
          >
            <Keyboard className="w-3.5 h-3.5" />
            <span className="hidden sm:inline text-[10px] uppercase tracking-wider font-medium">Shortcuts</span>
          </button>

          <span className="text-gray-800" aria-hidden="true">|</span>
          <RegionSelector value={region} onChange={handleRegionChange} />
          <span className="text-gray-800" aria-hidden="true">|</span>
          <TimezoneSelector value={timezone} onChange={handleTimezoneChange} />
        </div>
      </header>

      {/* Keyboard shortcuts panel (collapsible) */}
      {showShortcuts && (
        <div className="text-xs text-gray-500 bg-gray-900/80 rounded-lg px-4 py-3 border border-gray-800 animate-slide-in">
          <div className="flex flex-wrap gap-x-6 gap-y-1.5">
            {SHORTCUTS.map(s => (
              <span key={s.key} className="flex items-center gap-2">
                <kbd className="px-1.5 py-0.5 rounded bg-gray-800 font-mono text-gray-300 text-[11px]">{s.key}</kbd>
                <span>{s.desc}</span>
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Next event banner */}
      {nextEvent && (
        <div className="animate-fade-in" style={{ animationDelay: '50ms' }}>
          <NextEventBanner event={nextEvent} region={region} />
        </div>
      )}

      {/* Filters */}
      <div ref={filterBarRef} className="animate-fade-in" style={{ animationDelay: '100ms' }}>
        <FilterBar
          filters={filters}
          championships={championships}
          onChange={handleFiltersChange}
        />
      </div>

      {/* Event count + actions */}
      <div className="flex items-center justify-between animate-fade-in" style={{ animationDelay: '150ms' }}>
        <p className="text-xs text-gray-500">
          {totalFilteredEvents === 0
            ? 'No events match these filters'
            : `${totalFilteredEvents} event${totalFilteredEvents === 1 ? '' : 's'}`}
          {isActiveFilter && (
            <span className="text-gray-700"> · filtered</span>
          )}
        </p>
        <div className="flex items-center gap-3">
          {groupedEvents.length > 1 && (
            <button
              onClick={() => {
                if (expandedChamps.size === groupedEvents.length) {
                  setExpandedChamps(new Set())
                } else {
                  setExpandedChamps(new Set(groupedEvents.map(g => g.championship.id)))
                }
              }}
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
              aria-label={expandedChamps.size === groupedEvents.length ? 'Collapse all championships' : 'Expand all championships'}
            >
              <List className="w-3.5 h-3.5 inline-block mr-1" />
              {expandedChamps.size === groupedEvents.length ? 'Collapse all' : 'Expand all'}
            </button>
          )}
          {isActiveFilter && (
            <button
              onClick={() => handleFiltersChange(DEFAULT_FILTERS)}
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors underline underline-offset-2"
            >
              Clear filters
            </button>
          )}
        </div>
      </div>

      {/* Grouped event list */}
      {totalFilteredEvents === 0 ? (
        <div className="rounded-lg border border-gray-800 p-8 text-center animate-fade-in" style={{ animationDelay: '200ms' }}>
          {(() => {
            let message: string
            let suggestion: string
            if (filters.period === 'live') {
              message = 'Nothing is live right now.'
              suggestion = nextEvent
                ? `The next race starts in ${nextEvent.name}. Try switching to "Upcoming".`
                : 'Check "Upcoming" to see what is next on the calendar.'
            } else if (isActiveFilter) {
              message = 'No events match the current filters.'
              suggestion = 'Try a different category or remove the championship filter.'
            } else {
              message = 'No upcoming events found.'
              suggestion = 'Try switching to "All dates" to see the full calendar.'
            }
            return (
              <>
                <p className="text-gray-400">{message}</p>
                <p className="text-xs text-gray-500 mt-1.5">{suggestion}</p>
                <button
                  onClick={() => handleFiltersChange(DEFAULT_FILTERS)}
                  className="mt-4 text-sm text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  Reset to default filters
                </button>
              </>
            )
          })()}
        </div>
      ) : (
        <div className="space-y-4">
          {groupedEvents.map((group, i) => {
            const isExpanded = expandedChamps.has(group.championship.id)
            const hasLive = group.events.some(e => e.status === 'live')
            const isFavorite = favorites.has(group.championship.id)

            const prevGroup = i > 0 ? groupedEvents[i - 1] : null
            const showCategoryHeader = filters.category === 'all'
              && group.championship.category !== prevGroup?.championship.category
            const showFavoriteDivider = i > 0
              && !favorites.has(group.championship.id)
              && prevGroup && favorites.has(prevGroup.championship.id)

            const CATEGORY_LABELS: Record<string, string> = {
              formula: 'Formula', endurance: 'Endurance', touring: 'Touring', moto: 'Moto', rally: 'Rally',
            }

            return (
              <div key={group.championship.id}>
                {showFavoriteDivider && (
                  <div className="flex items-center gap-3 py-2">
                    <div className="flex-1 h-px bg-gray-800" />
                    <span className="text-[10px] text-gray-600 uppercase tracking-widest font-medium">All championships</span>
                    <div className="flex-1 h-px bg-gray-800" />
                  </div>
                )}
                {showCategoryHeader && !showFavoriteDivider && (
                  <div className="flex items-center gap-3 pt-3 pb-1 first:pt-0">
                    <span className="text-[10px] text-gray-600 uppercase tracking-widest font-medium">
                      {CATEGORY_LABELS[group.championship.category] ?? group.championship.category}
                    </span>
                    <div className="flex-1 h-px bg-gray-800/60" />
                  </div>
                )}
                <section
                  ref={el => {
                    const id = group.championship.id
                    if (el) sectionRefs.current.set(id, el)
                    else sectionRefs.current.delete(id)
                  }}
                  tabIndex={-1}
                  className={clsx(
                    'relative rounded-lg border overflow-hidden transition-all animate-fade-in',
                    hasLive
                      ? 'border-red-700 live-glow-strong'
                      : isFavorite
                      ? 'border-gray-700'
                      : 'border-gray-800',
                  )}
                  style={{ animationDelay: `${200 + i * 50}ms` }}
                >
                  {/* Top accent stripe */}
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5"
                    style={{ backgroundColor: group.championship.color }}
                  />

                  {/* Championship header */}
                  <div
                    className={clsx(
                      'flex items-center gap-3 px-4 pt-3.5 pb-3 transition-colors',
                      hasLive ? 'bg-red-950/15' : 'bg-gray-900/30'
                    )}
                  >
                    <button
                      onClick={() => toggleChamp(group.championship.id)}
                      className={clsx(
                        'flex-1 flex items-center gap-3 text-left min-w-0 min-h-[44px] focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:rounded',
                        hasLive ? 'hover:bg-red-950/30' : 'hover:bg-gray-800/30'
                      )}
                      aria-expanded={isExpanded}
                      aria-label={`${group.championship.name} — ${group.events.length} events`}
                    >
                      <span
                        className="w-3 h-3 rounded-full shrink-0 ring-1 ring-white/10"
                        style={{ backgroundColor: group.championship.color }}
                      />
                      <h2 className="text-sm font-bold text-white flex-1 truncate font-heading">
                        {group.championship.name}
                      </h2>
                      <span className="text-[11px] text-gray-500 font-medium tabular-nums">
                        {group.events.length} {group.events.length === 1 ? 'event' : 'events'}
                      </span>

                      {/* Next race countdown per championship */}
                      {(() => {
                        const nextRace = group.events.find(e => e.status === 'upcoming' || e.status === 'live')
                        const nextStart = nextRace?.nextSession?.start
                        if (!nextStart) return null
                        if (nextRace.status === 'live') return null
                        return (
                          <span className="text-gray-600 flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-amber-400/50" />
                            <CountdownTimer targetUtc={nextStart} compact />
                          </span>
                        )
                      })()}

                      {/* LIVE indicator */}
                      {hasLive && (
                        <span className="flex items-center gap-1.5 text-red-400 text-[11px] font-bold tracking-wider">
                          <span className="w-2 h-2 rounded-full bg-red-500 motion-safe:animate-pulse" />
                          LIVE
                        </span>
                      )}

                      <span className={clsx('shrink-0', isExpanded ? 'text-gray-400' : 'text-gray-600')}>
                        {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                      </span>
                    </button>

                    {/* Favorite toggle — outside the expand button to avoid nesting */}
                    <button
                      onClick={() => toggleFavorite(group.championship.id)}
                      className={clsx(
                        'transition-all shrink-0 p-1.5 rounded-full hover:bg-white/10 min-h-[44px] min-w-[44px] flex items-center justify-center',
                        isFavorite ? 'text-amber-400' : 'text-gray-600 hover:text-gray-400'
                      )}
                      aria-label={isFavorite ? `Remove ${group.championship.name} from favorites` : `Add ${group.championship.name} to favorites`}
                      title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                    >
                      <Star className={clsx('w-3.5 h-3.5', isFavorite && 'fill-amber-400')} />
                    </button>
                  </div>

                  {/* Events within championship */}
                  {isExpanded && (
                    <div className="space-y-1.5 p-3 pt-2">
                      {group.events.map(event => (
                        <EventWeekend
                          key={event.id}
                          event={event}
                          region={region}
                          defaultOpen={event.status === 'live' || event === nextEvent}
                          compact={group.events.length > 4}
                        />
                      ))}
                    </div>
                  )}
                </section>
              </div>
            )
          })}
        </div>
      )}

      {/* Footer */}
      <footer className="pt-4 border-t border-gray-900 text-center text-xs text-gray-600">
        All times shown in <span className="text-gray-400 font-medium">{getTimezoneLabel(timezone)}</span>.
        Data updated for the 2026 season.
      </footer>
    </div>
  )
}
