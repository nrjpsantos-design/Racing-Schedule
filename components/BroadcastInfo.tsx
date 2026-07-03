import type { BroadcastEntry } from '@/types'
import clsx from 'clsx'
import { Tv, Wifi, Youtube } from 'lucide-react'
import { ExternalLink } from 'lucide-react'

interface Props {
  broadcasts: BroadcastEntry[]
  compact?: boolean
}

const TYPE_CONFIG: Record<string, { label: string; bg: string; text: string }> = {
  'free-tv':        { label: 'FREE TV',      bg: 'bg-green-900/60',  text: 'text-green-400' },
  'cable-tv':       { label: 'CABLE',        bg: 'bg-gray-800',      text: 'text-gray-400' },
  'free-streaming': { label: 'FREE',         bg: 'bg-blue-900/60',   text: 'text-blue-400' },
  'paid-streaming': { label: 'SUBSCRIPTION', bg: 'bg-yellow-900/40', text: 'text-yellow-500' },
}

function BroadcastIcon({ type, isYoutube }: { type: string; isYoutube?: boolean }) {
  if (isYoutube) return <Youtube className="w-3 h-3 shrink-0" />
  if (type === 'free-tv' || type === 'cable-tv') return <Tv className="w-3 h-3 shrink-0" />
  return <Wifi className="w-3 h-3 shrink-0" />
}

export function BroadcastInfo({ broadcasts, compact = false }: Props) {
  if (!broadcasts || broadcasts.length === 0) {
    return <p className="text-xs text-gray-400">No broadcast info available</p>
  }

  return (
    <div className={clsx('flex flex-wrap', compact ? 'gap-1' : 'gap-1.5')}>
      {broadcasts.map((b, i) => {
        const config = TYPE_CONFIG[b.type] ?? TYPE_CONFIG['cable-tv']
        const inner = (
          <span
            key={i}
            className={clsx(
              'inline-flex items-center gap-1 rounded px-2 py-1 text-xs font-medium transition-colors min-h-[28px]',
              config.bg, config.text,
              b.url ? 'cursor-pointer hover:brightness-125' : '',
              b.isYoutube ? 'ring-1 ring-red-700' : '',
            )}
          >
            <BroadcastIcon type={b.type} isYoutube={b.isYoutube} />
            <span>{b.channel}</span>
            {b.note && <span className="text-[10px] opacity-70">· {b.note}</span>}
            {b.url && <ExternalLink className="w-2.5 h-2.5 opacity-60" />}
          </span>
        )

        if (b.url) {
          return (
            <a key={i} href={b.url} target="_blank" rel="noopener noreferrer">
              {inner}
            </a>
          )
        }
        return <span key={i}>{inner}</span>
      })}
    </div>
  )
}
