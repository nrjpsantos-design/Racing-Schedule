'use client'

import { MapPin } from 'lucide-react'

const REGIONS = [
  { label: 'Brasil', value: 'BR' },
  { label: 'USA', value: 'US' },
  { label: 'UK', value: 'UK' },
  { label: 'Deutschland', value: 'DE' },
  { label: 'Italia', value: 'IT' },
  { label: 'Nederland', value: 'NL' },
  { label: 'Global', value: 'GLOBAL' },
]

interface Props {
  value: string
  onChange: (region: string) => void
}

export function RegionSelector({ value, onChange }: Props) {
  return (
    <div className="flex items-center gap-1.5">
      <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0" aria-hidden="true" />
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        className="bg-transparent text-xs text-gray-300 border-0 cursor-pointer hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:rounded-sm outline-none"
        aria-label="Select region for broadcast information"
      >
        {REGIONS.map(r => (
          <option key={r.value} value={r.value} className="bg-gray-900 text-white">
            {r.label}
          </option>
        ))}
      </select>
    </div>
  )
}
