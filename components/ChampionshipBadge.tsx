import type { Championship } from '@/types'
import clsx from 'clsx'

interface Props {
  championship: Championship
  size?: 'sm' | 'md'
}

export function ChampionshipBadge({ championship, size = 'md' }: Props) {
  return (
    <span
      className={clsx(
        'inline-flex items-center font-bold tracking-wider leading-none rounded-sm',
        size === 'sm' ? 'text-[10px] px-1.5 py-0.5' : 'text-xs px-2 py-1',
      )}
      style={{ backgroundColor: championship.color, color: championship.textColor ?? '#fff' }}
      title={championship.name}
    >
      {championship.shortName}
    </span>
  )
}
