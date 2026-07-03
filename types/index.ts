export type VehicleType = 'car' | 'motorcycle'
export type VehicleCategory = 'formula' | 'endurance' | 'touring' | 'moto' | 'rally'

export type SessionType =
  | 'fp1' | 'fp2' | 'fp3'
  | 'sprint_quali' | 'sprint'
  | 'quali' | 'race'
  | 'warmup'

export type SessionStatus = 'upcoming' | 'live' | 'completed'

export type BroadcastType = 'free-tv' | 'cable-tv' | 'free-streaming' | 'paid-streaming'

export type RegionCode = 'BR' | 'US' | 'UK' | 'GLOBAL' | string

export interface Session {
  type: SessionType
  label: string
  start: string     // ISO 8601 UTC
  durationMinutes: number
}

export interface Circuit {
  name: string
  city: string
  country: string
  countryCode: string  // ISO 3166-1 alpha-2
  timezone: string     // IANA timezone
}

export interface RaceEvent {
  id: string
  round: number
  name: string
  circuit: Circuit
  sessions: Session[]
  broadcastOverrides?: Record<RegionCode, BroadcastEntry[]>
}

export interface BroadcastEntry {
  channel: string
  type: BroadcastType
  url?: string
  isYoutube?: boolean
  note?: string
}

export interface Championship {
  id: string
  name: string
  shortName: string
  vehicleType: VehicleType
  category: VehicleCategory
  color: string
  textColor?: string
  season: number
  broadcasts: Record<RegionCode, BroadcastEntry[]>
  events: RaceEvent[]
}

export interface EnrichedSession extends Session {
  status: SessionStatus
  localStart: Date
  localEnd: Date
}

export interface EnrichedEvent extends RaceEvent {
  championship: Championship
  status: SessionStatus
  nextSession: EnrichedSession | null
  enrichedSessions: EnrichedSession[]
}

export type PeriodFilter = 'all' | 'today' | 'week' | 'month' | 'upcoming' | 'live' | 'completed'

export interface Filters {
  category: 'all' | VehicleCategory
  championships: string[]  // empty = all in category
  period: PeriodFilter
  region: RegionCode
}
