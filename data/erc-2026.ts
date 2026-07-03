import type { Championship, Session } from '@/types'

const shakedown = (start: string): Session => ({ type: 'fp1', label: 'Shakedown', start, durationMinutes: 60 })
const day1 = (start: string): Session => ({ type: 'race', label: 'Day 1 — Friday Stages', start, durationMinutes: 480 })
const day2 = (start: string): Session => ({ type: 'race', label: 'Day 2 — Saturday Stages', start, durationMinutes: 480 })
const day3 = (start: string): Session => ({ type: 'race', label: 'Day 3 — Power Stage', start, durationMinutes: 120 })

const YT_ERC = 'https://www.youtube.com/@FIAEuropeanRallyChampionship'

export const ERC_2026: Championship = {
  id: 'erc',
  name: 'FIA European Rally Championship',
  shortName: 'ERC',
  vehicleType: 'car',
  category: 'rally',
  color: '#FF3700',
  textColor: '#FFFFFF',
  season: 2026,
  broadcasts: {
    GLOBAL: [
      { channel: 'ERC YouTube', type: 'free-streaming', url: YT_ERC, isYoutube: true },
    ],
    UK: [
      { channel: 'ERC YouTube', type: 'free-streaming', url: YT_ERC, isYoutube: true },
      { channel: 'Eurosport', type: 'cable-tv' },
    ],
    DE: [
      { channel: 'ERC YouTube', type: 'free-streaming', url: YT_ERC, isYoutube: true },
      { channel: 'Eurosport', type: 'cable-tv' },
    ],
    BR: [
      { channel: 'ERC YouTube', type: 'free-streaming', url: YT_ERC, isYoutube: true },
    ],
  },
  events: [
    {
      id: 'erc-2026-r01',
      round: 1,
      name: 'Azores Rallye',
      circuit: { name: 'Ponta Delgada', city: 'Ponta Delgada', country: 'Portugal', countryCode: 'PT', timezone: 'Atlantic/Azores' },
      sessions: [shakedown('2026-03-19T10:00:00Z'), day1('2026-03-19T15:00:00Z'), day2('2026-03-20T09:00:00Z'), day3('2026-03-22T11:00:00Z')],
    },
    {
      id: 'erc-2026-r02',
      round: 2,
      name: 'Rally Islas Canarias',
      circuit: { name: 'Las Palmas', city: 'Las Palmas', country: 'Spain', countryCode: 'ES', timezone: 'Atlantic/Canary' },
      sessions: [shakedown('2026-05-07T10:00:00Z'), day1('2026-05-07T15:00:00Z'), day2('2026-05-08T09:00:00Z'), day3('2026-05-10T11:00:00Z')],
    },
    {
      id: 'erc-2026-r03',
      round: 3,
      name: 'Rally Hungary',
      circuit: { name: 'Nyíregyháza', city: 'Nyíregyháza', country: 'Hungary', countryCode: 'HU', timezone: 'Europe/Budapest' },
      sessions: [shakedown('2026-06-18T09:00:00Z'), day1('2026-06-18T14:00:00Z'), day2('2026-06-19T08:00:00Z'), day3('2026-06-21T10:00:00Z')],
    },
    {
      id: 'erc-2026-r04',
      round: 4,
      name: 'Barum Czech Rally Zlín',
      circuit: { name: 'Zlín', city: 'Zlín', country: 'Czech Republic', countryCode: 'CZ', timezone: 'Europe/Prague' },
      sessions: [shakedown('2026-08-27T09:00:00Z'), day1('2026-08-27T14:00:00Z'), day2('2026-08-28T08:00:00Z'), day3('2026-08-30T10:00:00Z')],
    },
    {
      id: 'erc-2026-r05',
      round: 5,
      name: 'Rally di Roma Capitale',
      circuit: { name: 'Rome', city: 'Rome', country: 'Italy', countryCode: 'IT', timezone: 'Europe/Rome' },
      sessions: [shakedown('2026-09-17T09:00:00Z'), day1('2026-09-17T14:00:00Z'), day2('2026-09-18T08:00:00Z'), day3('2026-09-20T10:00:00Z')],
    },
    {
      id: 'erc-2026-r06',
      round: 6,
      name: 'Rally de Ourense',
      circuit: { name: 'Ourense', city: 'Ourense', country: 'Spain', countryCode: 'ES', timezone: 'Europe/Madrid' },
      sessions: [shakedown('2026-10-08T09:00:00Z'), day1('2026-10-08T14:00:00Z'), day2('2026-10-09T08:00:00Z'), day3('2026-10-11T10:00:00Z')],
    },
    {
      id: 'erc-2026-r07',
      round: 7,
      name: 'Rally Corsica',
      circuit: { name: 'Ajaccio', city: 'Ajaccio', country: 'France', countryCode: 'FR', timezone: 'Europe/Paris' },
      sessions: [shakedown('2026-10-29T09:00:00Z'), day1('2026-10-29T14:00:00Z'), day2('2026-10-30T08:00:00Z'), day3('2026-11-01T10:00:00Z')],
    },
    {
      id: 'erc-2026-r08',
      round: 8,
      name: 'Rally Liepāja — ERC Finale',
      circuit: { name: 'Liepāja', city: 'Liepāja', country: 'Latvia', countryCode: 'LV', timezone: 'Europe/Riga' },
      sessions: [shakedown('2026-11-19T10:00:00Z'), day1('2026-11-19T15:00:00Z'), day2('2026-11-20T09:00:00Z'), day3('2026-11-22T11:00:00Z')],
    },
  ],
}
