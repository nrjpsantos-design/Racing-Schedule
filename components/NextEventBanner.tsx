'use client'

import { Flag, MapPin, Youtube } from 'lucide-react'
import { format } from 'date-fns'
import type { EnrichedEvent } from '@/types'
import { ChampionshipBadge } from './ChampionshipBadge'
import { CountdownTimer } from './CountdownTimer'
import { BroadcastInfo } from './BroadcastInfo'
import { getEventBroadcasts, getYoutubeUrl } from '@/lib/events'
import { getFlagEmoji } from '@/lib/flag-emoji'

interface Props {
  event: EnrichedEvent
  region: string
}

export function NextEventBanner({ event, region }: Props) {
  const broadcasts = getEventBroadcasts(event, region)
  const ytUrl = getYoutubeUrl(event, region)
  const nextSession = event.nextSession
  const raceSession = event.enrichedSessions.find(s => s.type === 'race')
  const targetSession = event.status === 'live' ? nextSession : (nextSession ?? raceSession)

  return (
    <div className="relative overflow-hidden rounded-xl border-2 border-gray-700 bg-gray-900 p-4 sm:p-6">
      {/* Decorative top stripe — championship color */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5"
        style={{ backgroundColor: event.championship.color }}
      />

      {/* Decorative corner markers — timing screen aesthetic */}
      <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-gray-600 rounded-tl" />
      <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-gray-600 rounded-tr" />
      <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-gray-600 rounded-bl" />
      <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-gray-600 rounded-br" />

      <div className="flex items-center gap-2 mb-3 text-[10px] font-semibold text-gray-400 uppercase tracking-widest">
        {event.status === 'live' ? (
          <span className="flex items-center gap-1.5 text-red-400">
            <span className="w-2 h-2 rounded-full bg-red-500 motion-safe:animate-pulse" />
            <span className="font-bold">Live Now</span>
          </span>
        ) : (
          <span className="flex items-center gap-1.5">
            <Flag className="w-3 h-3 text-amber-400" />
            <span className="text-amber-400 font-bold">Next Race</span>
          </span>
        )}

        {/* Round indicator */}
        <span className="text-gray-600 mx-1">/</span>
        <span className="text-gray-500">Round {event.round}</span>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-start gap-5">
        {/* Left: event info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5">
            <ChampionshipBadge championship={event.championship} />
            <span className="text-xl" role="img" aria-label={event.circuit.country}>
              {getFlagEmoji(event.circuit.countryCode)}
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight font-heading">
            {event.name}
          </h2>
          <div className="flex items-center gap-1 mt-1 text-sm text-gray-400">
            <MapPin className="w-3.5 h-3.5 shrink-0 text-gray-500" />
            <span>{event.circuit.name} · {event.circuit.city}, {event.circuit.country}</span>
          </div>

          {/* Next session info */}
          {targetSession && (
            <div className="mt-2.5 flex items-center gap-2 text-sm">
              <span className="text-gray-500">
                {event.status === 'live'
                  ? 'Next:'
                  : targetSession.type === 'race'
                  ? 'Race:'
                  : `${targetSession.label}:`}{' '}
                <span className="text-gray-300 font-medium">
                  {format(targetSession.localStart, 'EEE, MMM d · HH:mm')}
                </span>
              </span>
            </div>
          )}
        </div>

        {/* Right: hero countdown */}
        {targetSession && event.status !== 'live' && (
          <div className="shrink-0 text-right bg-gray-950/60 rounded-lg px-4 py-3 border border-gray-800">
            <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1.5">
              {event.nextSession?.type === 'race' ? 'Race starts in' : 'Next session in'}
            </p>
            <CountdownTimer targetUtc={targetSession.start} />
          </div>
        )}
      </div>

      {/* Broadcasts footer */}
      <div className="mt-5 pt-3.5 border-t border-gray-800 flex flex-col sm:flex-row sm:items-center gap-2">
        <span className="text-[10px] text-gray-500 uppercase tracking-widest shrink-0">Where to watch:</span>
        <div className="flex-1">
          <BroadcastInfo broadcasts={broadcasts} compact />
        </div>
        {ytUrl && (
          <a
            href={ytUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-red-700 hover:bg-red-600 text-white text-xs font-bold rounded-lg transition-all hover:scale-105 active:scale-95 min-h-[44px] timing-glow"
          >
            <Youtube className="w-4 h-4" />
            Watch Free on YouTube
          </a>
        )}
      </div>
    </div>
  )
}
