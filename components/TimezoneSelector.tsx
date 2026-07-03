'use client'

import { Globe } from 'lucide-react'
import { COMMON_TIMEZONES, getTimezoneAbbr } from '@/lib/timezone'

interface Props {
  value: string
  onChange: (tz: string) => void
}

export function TimezoneSelector({ value, onChange }: Props) {
  const abbr = getTimezoneAbbr(value)

  return (
    <div className="flex items-center gap-1.5">
      <Globe className="w-3.5 h-3.5 text-gray-400 shrink-0" aria-hidden="true" />
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        className="bg-transparent text-xs text-gray-300 border-0 cursor-pointer hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:rounded-sm outline-none"
        aria-label="Select timezone"
      >
        {COMMON_TIMEZONES.map(tz => (
          <option key={tz.value} value={tz.value} className="bg-gray-900 text-white">
            {tz.label}
          </option>
        ))}
      </select>
      <span className="text-xs text-gray-500 hidden sm:inline">({abbr})</span>
    </div>
  )
}
