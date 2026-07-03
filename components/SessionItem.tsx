import type { EnrichedSession } from '@/types'
import { format } from 'date-fns'
import clsx from 'clsx'

interface Props {
  session: EnrichedSession
  isNext?: boolean
}

const SESSION_LABELS: Record<string, string> = {
  fp1: 'FP1', fp2: 'FP2', fp3: 'FP3',
  sprint_quali: 'SQ', sprint: 'SPR',
  quali: 'Q', race: 'RACE', warmup: 'WUP',
}

const SESSION_DESCRIPTIONS: Record<string, string> = {
  fp1: 'Free Practice 1',
  fp2: 'Free Practice 2',
  fp3: 'Free Practice 3',
  sprint_quali: 'Sprint Qualifying',
  sprint: 'Sprint Race',
  quali: 'Qualifying',
  race: 'Race',
  warmup: 'Warm-up',
}

const TYPE_COLORS: Record<string, string> = {
  race: 'text-orange-400 font-bold',
  sprint: 'text-amber-400 font-bold',
  quali: 'text-blue-400 font-semibold',
  sprint_quali: 'text-blue-300',
  fp1: 'text-gray-500', fp2: 'text-gray-500', fp3: 'text-gray-500',
  warmup: 'text-gray-500',
}

export function SessionItem({ session, isNext }: Props) {
  const abbr = SESSION_LABELS[session.type] ?? session.type.toUpperCase()
  const description = SESSION_DESCRIPTIONS[session.type] ?? session.type
  const colorClass = TYPE_COLORS[session.type] ?? 'text-gray-500'

  const timeStr = format(session.localStart, 'HH:mm')
  const dateStr = format(session.localStart, 'EEE d MMM')

  return (
    <div
      className={clsx(
        'flex items-center gap-3 py-2 px-2 rounded text-sm transition-colors',
        session.status === 'live' && 'bg-red-950/30 ring-1 ring-red-800',
        session.status === 'completed' && 'text-gray-500',
        isNext && session.status === 'upcoming' && 'bg-gray-800/40',
      )}
    >
      {/* Status dot */}
      <span className="w-5 flex justify-center shrink-0">
        {session.status === 'live' ? (
          <span className="w-2 h-2 rounded-full bg-red-500" role="status" aria-label="Live now" />
        ) : session.status === 'completed' ? (
          <span className="w-1.5 h-1.5 rounded-full bg-gray-600" role="status" aria-label="Completed" />
        ) : (
          <span className="w-1.5 h-1.5 rounded-full bg-gray-500" role="status" aria-label="Upcoming" />
        )}
      </span>

      {/* Session type abbr — timing-screen monospace */}
      <span
        className={clsx('w-12 text-xs font-mono shrink-0 tracking-wider', colorClass)}
        title={description}
      >
        {abbr}
      </span>

      {/* Session name */}
      <span className={clsx(
        'text-xs flex-1 min-w-0 truncate',
        session.status === 'completed' ? 'text-gray-500' : 'text-gray-300'
      )}>
        {session.label}
      </span>

      {/* Date + Time — timing readout */}
      <span className="text-xs shrink-0 text-gray-500">
        <span className="hidden sm:inline">{dateStr} · </span>
        <span className="sm:hidden">{format(session.localStart, 'EEE')} </span>
      </span>
      <span className={clsx(
        'font-mono text-xs shrink-0 tabular-nums tracking-wider',
        session.status === 'completed' ? 'text-gray-500' : 'text-gray-200'
      )}>
        {timeStr}
      </span>

      {session.status === 'live' && (
        <span className="text-red-400 text-[10px] font-bold shrink-0 tracking-wider">LIVE</span>
      )}
    </div>
  )
}
