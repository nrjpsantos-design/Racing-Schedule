'use client'

import { useState, useId } from 'react'
import { ChevronDown, ChevronUp, MapPin, Youtube } from 'lucide-react'
import { format, isValid, differenceInDays, parseISO } from 'date-fns'
import clsx from 'clsx'
import type { EnrichedEvent } from '@/types'
import { ChampionshipBadge } from './ChampionshipBadge'
import { SessionItem } from './SessionItem'
import { BroadcastInfo } from './BroadcastInfo'
import { CountdownTimer } from './CountdownTimer'
import { getEventBroadcasts, hasYoutubeBroadcast, getYoutubeUrl } from '@/lib/events'
import { getFlagEmoji } from '@/lib/flag-emoji'

interface Props {
  event: EnrichedEvent
  region: string
  defaultOpen?: boolean
  compact?: boolean
}

function safeFormat(date: Date | undefined | null, fmt: string, fallback = ''): string {
  if (!date || !isValid(date)) return fallback
  return format(date, fmt)
}

export function EventWeekend({ event, region, defaultOpen = false, compact = false }: Props) {
  const [open, setOpen] = useState(defaultOpen)
  const contentId = useId()
  const broadcasts = getEventBroadcasts(event, region)
  const hasYT = hasYoutubeBroadcast(event, region)
  const ytUrl = getYoutubeUrl(event, region)

  const firstSession = event.enrichedSessions[0]
  const lastSession = event.enrichedSessions[event.enrichedSessions.length - 1]
  const startDate = safeFormat(firstSession?.localStart, 'MMM d')
  const endDate = safeFormat(lastSession?.localStart, 'MMM d')
  const dateRange = startDate === endDate ? startDate : `${startDate} – ${endDate}`

  const nextS = event.nextSession
  const daysAway = nextS ? differenceInDays(parseISO(nextS.start), new Date()) : 999
  const isFarFuture = event.status === 'upcoming' && daysAway > 30

  return (
    <article
      className={clsx(
        'relative rounded-lg border transition-all overflow-hidden',
        event.status === 'live'
          ? 'border-red-700 bg-red-950/20'
          : event.status === 'completed'
          ? 'border-gray-800/50 bg-gray-900/15'
          : 'border-gray-800 bg-gray-900/50 hover:border-gray-700',
        compact && 'text-sm',
        isFarFuture && 'opacity-60',
      )}
    >
      {/* Championship color left accent */}
      <div
        className="absolute top-0 left-0 bottom-0 w-0.5"
        style={{ backgroundColor: event.championship.color, opacity: event.status === 'completed' ? 0.3 : 0.6 }}
      />

      {/* Header — always visible */}
      <button
        className="w-full text-left px-4 py-3 flex items-start gap-3 min-h-[44px]"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        aria-controls={contentId}
      >
        {/* Status indicator */}
        <div className="mt-0.5 shrink-0 w-10">
          {event.status === 'live' ? (
            <span className="flex items-center gap-1.5 text-red-400 text-[11px] font-bold">
              <span className="w-2 h-2 rounded-full bg-red-500 motion-safe:animate-pulse" /> LIVE
            </span>
          ) : event.status === 'completed' ? (
            <span className="text-gray-500 text-[11px] font-medium">DONE</span>
          ) : (
            <span className="text-gray-500 text-xs font-mono">R{event.round}</span>
          )}
        </div>

        {/* Main info */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <ChampionshipBadge championship={event.championship} size="sm" />
            {dateRange && <span className="text-xs text-gray-500">{dateRange}</span>}
            {event.status === 'upcoming' && nextS && (
              <span className="text-xs text-gray-500 hidden sm:flex items-center gap-1">
                Next session in:
                <CountdownTimer targetUtc={nextS.start} compact />
              </span>
            )}
            {hasYT && (
              <span className="inline-flex items-center gap-0.5 text-red-500 text-[10px] font-semibold">
                <Youtube className="w-3 h-3" /> Free
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-white text-sm leading-tight truncate">{event.name}</h3>
            <span className="text-lg shrink-0" role="img" aria-label={event.circuit.country}>
              {getFlagEmoji(event.circuit.countryCode)}
            </span>
          </div>
          <div className="flex items-center gap-1 mt-0.5">
            <MapPin className="w-3 h-3 text-gray-600 shrink-0" />
            <span className="text-xs text-gray-500 truncate">
              {event.circuit.name} · {event.circuit.city}
            </span>
          </div>
        </div>

        {/* Expand icon */}
        <div className={clsx('shrink-0 mt-0.5', open ? 'text-gray-400' : 'text-gray-600')}>
          {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </div>
      </button>

      {/* Expanded content */}
      {open && (
        <div id={contentId} className="border-t border-gray-800 px-4 pb-3 pt-2 space-y-3">
          {/* Sessions */}
          {event.enrichedSessions.length > 0 && (
            <div>
              <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest mb-1.5">
                Session times
              </p>
              <div className="space-y-px">
                {event.enrichedSessions.map((s, i) => (
                  <SessionItem key={i} session={s} isNext={s === nextS} />
                ))}
              </div>
            </div>
          )}

          {/* Broadcasts */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest">Where to watch</p>
              {ytUrl && (
                <a
                  href={ytUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-red-400 hover:text-red-300 font-medium transition-colors"
                >
                  <Youtube className="w-3.5 h-3.5" />
                  Watch on YouTube
                </a>
              )}
            </div>
            <BroadcastInfo broadcasts={broadcasts} />
          </div>
        </div>
      )}
    </article>
  )
}
