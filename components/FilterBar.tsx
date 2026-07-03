'use client'

import { useState } from 'react'
import clsx from 'clsx'
import type { Championship, Filters, PeriodFilter, VehicleCategory } from '@/types'
import { ChevronDown, ChevronRight } from 'lucide-react'

interface Props {
  filters: Filters
  championships: Championship[]
  onChange: (filters: Filters) => void
}

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'px-4 py-2 rounded-full text-xs font-medium transition-all whitespace-nowrap min-h-[44px] focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950',
        active
          ? 'bg-white text-gray-950 shadow-sm'
          : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-200',
      )}
    >
      {children}
    </button>
  )
}

const CATEGORY_OPTS: { id: 'all' | VehicleCategory; label: string }[] = [
  { id: 'all',       label: 'All' },
  { id: 'formula',   label: 'Formula' },
  { id: 'endurance', label: 'Endurance' },
  { id: 'touring',   label: 'Touring' },
  { id: 'moto',      label: 'Moto' },
  { id: 'rally',     label: 'Rally' },
]

const PERIOD_OPTS: { label: string; value: PeriodFilter }[] = [
  { label: 'Upcoming',    value: 'upcoming' },
  { label: 'Today',       value: 'today' },
  { label: 'This week',   value: 'week' },
  { label: 'Live',        value: 'live' },
  { label: 'Past',        value: 'completed' },
  { label: 'All dates',   value: 'all' },
]

export function FilterBar({ filters, championships, onChange }: Props) {
  const [showChampFilters, setShowChampFilters] = useState(false)

  const selectCategory = (cat: 'all' | VehicleCategory) => {
    setShowChampFilters(false)
    onChange({ ...filters, category: cat, championships: [] })
  }

  const toggleChampionship = (id: string) => {
    const current = filters.championships
    const next = current.includes(id) ? current.filter(c => c !== id) : [...current, id]
    onChange({ ...filters, championships: next })
  }

  const championInCategory = championships.filter(c => c.category === filters.category)
  const hasChampFilter = filters.championships.length > 0

  return (
    <div className="space-y-3">
      {/* Category row */}
      <div className="flex gap-2 flex-wrap">
        {CATEGORY_OPTS.map(opt => (
          <Chip key={opt.id} active={filters.category === opt.id} onClick={() => selectCategory(opt.id)}>
            {opt.label}
          </Chip>
        ))}
      </div>

      {/* Championship sub-filters — collapsible section (only when a category is selected) */}
      {filters.category !== 'all' && championInCategory.length > 1 && (
        <div className="pl-2">
          <button
            onClick={() => setShowChampFilters(v => !v)}
            className={clsx(
              'flex items-center gap-1.5 text-xs transition-colors min-h-[44px]',
              hasChampFilter ? 'text-blue-400 font-semibold' : 'text-gray-500 hover:text-gray-300'
            )}
            aria-expanded={showChampFilters}
          >
            {showChampFilters ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
            {hasChampFilter
              ? `Filtering ${filters.championships.length} of ${championInCategory.length} championships`
              : `Filter by championship (${championInCategory.length})`}
          </button>

          {showChampFilters && (
            <div className="flex gap-2 flex-wrap pt-1.5">
              {championInCategory.map(champ => {
                const isActive = filters.championships.includes(champ.id)
                return (
                  <button
                    key={champ.id}
                    onClick={() => toggleChampionship(champ.id)}
                    className={clsx(
                      'px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap border min-h-[44px] focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950',
                      isActive
                        ? 'text-white border-transparent shadow-sm'
                        : 'bg-transparent text-gray-500 border-gray-700 hover:border-gray-500 hover:text-gray-300',
                    )}
                    style={isActive ? { backgroundColor: champ.color, borderColor: champ.color } : {}}
                  >
                    {champ.shortName}
                  </button>
                )
              })}
            </div>
          )}
        </div>
      )}

      {/* Period row */}
      <div className="flex gap-2 flex-wrap items-center">
        {PERIOD_OPTS.map(opt => (
          <Chip key={opt.value} active={filters.period === opt.value} onClick={() => onChange({ ...filters, period: opt.value })}>
            {opt.value === 'live' ? (
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block" />
                Live
              </span>
            ) : opt.label}
          </Chip>
        ))}
      </div>
    </div>
  )
}
