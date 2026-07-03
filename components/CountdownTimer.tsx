'use client'

import { useMemo } from 'react'
import { parseISO, differenceInSeconds } from 'date-fns'
import { useClock } from '@/lib/use-clock'

interface Props {
  targetUtc: string
  label?: string
  compact?: boolean
}

function pad(n: number) {
  return String(n).padStart(2, '0')
}

function flipSegment(value: string, label: string) {
  return (
    <div className="flex flex-col items-center gap-0.5">
      <span className="font-mono font-bold leading-none tracking-wider text-[clamp(1.5rem,5vw,3rem)] text-amber-400 tabular-nums">
        {value}
      </span>
      <span className="text-[10px] text-gray-500 font-medium uppercase tracking-widest">
        {label}
      </span>
    </div>
  )
}

export function CountdownTimer({ targetUtc, label, compact = false }: Props) {
  const now = useClock()
  const secondsLeft = useMemo(() => {
    const target = parseISO(targetUtc)
    return Math.max(0, differenceInSeconds(target, now))
  }, [targetUtc, now])

  if (secondsLeft <= 0) {
    return (
      <span className="text-red-400 font-mono font-bold text-sm">
        {label ?? 'NOW'}
      </span>
    )
  }

  const d = Math.floor(secondsLeft / 86400)
  const h = Math.floor((secondsLeft % 86400) / 3600)
  const m = Math.floor((secondsLeft % 3600) / 60)
  const s = secondsLeft % 60

  // Compact mode — inline, small, suitable for headers
  if (compact) {
    if (d > 0) {
      return (
        <span className="font-mono text-[11px] text-amber-400 tabular-nums font-semibold">
          {d}d {pad(h)}h
        </span>
      )
    }
    if (h > 0) {
      return (
        <span className="font-mono text-[11px] text-amber-400 tabular-nums font-semibold">
          {pad(h)}h {pad(m)}m
        </span>
      )
    }
    return (
      <span className="font-mono text-[11px] text-amber-400 tabular-nums font-semibold">
        {pad(m)}m {pad(s)}s
      </span>
    )
  }

  // Hero mode — ≥ 7 days
  if (d >= 7) {
    return (
      <div className="flex items-baseline gap-1">
        <span className="font-mono font-bold text-2xl text-amber-400 tabular-nums">{d}</span>
        <span className="text-xs text-gray-500 uppercase tracking-wider font-medium">days</span>
      </div>
    )
  }

  // Hero mode — < 7 days: full pit-board flip-clock display
  return (
    <div className="flex items-center gap-3">
      {d > 0 && flipSegment(String(d), d === 1 ? 'day' : 'days')}
      {d > 0 && (
        <span className="text-amber-400/40 text-3xl font-light mb-4">:</span>
      )}
      {flipSegment(pad(h), 'hr')}
      <span className="text-amber-400/40 text-3xl font-light mb-4 animate-count-pulse">:</span>
      {flipSegment(pad(m), 'min')}
      {d === 0 && (
        <>
          <span className="text-amber-400/40 text-3xl font-light mb-4 animate-count-pulse">:</span>
          {flipSegment(pad(s), 'sec')}
        </>
      )}
    </div>
  )
}
