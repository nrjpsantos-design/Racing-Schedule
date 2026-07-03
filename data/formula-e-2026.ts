import type { Championship, Session } from '@/types'

const practice = (start: string): Session => ({ type: 'fp1', label: 'Practice', start, durationMinutes: 45 })
const quali = (start: string): Session => ({ type: 'quali', label: 'Qualifying', start, durationMinutes: 30 })
const race = (start: string): Session => ({ type: 'race', label: 'E-Prix', start, durationMinutes: 50 })

// Formula E streams races free on YouTube globally in many markets
const YT_FE = 'https://www.youtube.com/@FormulaE'

export const FORMULA_E_2026: Championship = {
  id: 'formula-e',
  name: 'Formula E',
  shortName: 'FE',
  vehicleType: 'car',
  category: 'formula',
  color: '#0055BF',
  textColor: '#FFFFFF',
  season: 2026,
  broadcasts: {
    GLOBAL: [
      { channel: 'Formula E YouTube', type: 'free-streaming', url: YT_FE, isYoutube: true },
      { channel: 'Eurosport', type: 'cable-tv' },
    ],
    UK: [
      { channel: 'Channel 4', type: 'free-tv' },
      { channel: 'Formula E YouTube', type: 'free-streaming', url: YT_FE, isYoutube: true },
    ],
    US: [
      { channel: 'CBS Sports', type: 'free-tv' },
      { channel: 'Paramount+', type: 'paid-streaming', url: 'https://www.paramountplus.com' },
      { channel: 'Formula E YouTube', type: 'free-streaming', url: YT_FE, isYoutube: true },
    ],
    BR: [
      { channel: 'Band', type: 'free-tv' },
      { channel: 'Formula E YouTube', type: 'free-streaming', url: YT_FE, isYoutube: true },
    ],
  },
  events: [
    {
      id: 'fe-2026-r01',
      round: 1,
      name: 'Mexico City E-Prix',
      circuit: { name: 'Autodromo Hermanos Rodriguez', city: 'Mexico City', country: 'Mexico', countryCode: 'MX', timezone: 'America/Mexico_City' },
      sessions: [practice('2026-01-10T18:00:00Z'), quali('2026-01-11T16:00:00Z'), race('2026-01-11T19:00:00Z')],
    },
    {
      id: 'fe-2026-r02',
      round: 2,
      name: 'Diriyah E-Prix — Race 1',
      circuit: { name: 'Riyadh Street Circuit', city: 'Diriyah', country: 'Saudi Arabia', countryCode: 'SA', timezone: 'Asia/Riyadh' },
      sessions: [practice('2026-01-30T15:00:00Z'), quali('2026-01-31T14:00:00Z'), race('2026-01-31T17:00:00Z')],
    },
    {
      id: 'fe-2026-r03',
      round: 3,
      name: 'Diriyah E-Prix — Race 2',
      circuit: { name: 'Riyadh Street Circuit', city: 'Diriyah', country: 'Saudi Arabia', countryCode: 'SA', timezone: 'Asia/Riyadh' },
      sessions: [practice('2026-01-31T12:00:00Z'), quali('2026-02-01T14:00:00Z'), race('2026-02-01T17:00:00Z')],
    },
    {
      id: 'fe-2026-r04',
      round: 4,
      name: 'Cape Town E-Prix',
      circuit: { name: 'Cape Town Street Circuit', city: 'Cape Town', country: 'South Africa', countryCode: 'ZA', timezone: 'Africa/Johannesburg' },
      sessions: [practice('2026-02-21T09:00:00Z'), quali('2026-02-22T09:00:00Z'), race('2026-02-22T12:00:00Z')],
    },
    {
      id: 'fe-2026-r05',
      round: 5,
      name: 'São Paulo E-Prix',
      circuit: { name: 'Sambadrome Street Circuit', city: 'São Paulo', country: 'Brazil', countryCode: 'BR', timezone: 'America/Sao_Paulo' },
      sessions: [practice('2026-03-21T14:00:00Z'), quali('2026-03-22T14:00:00Z'), race('2026-03-22T17:00:00Z')],
    },
    {
      id: 'fe-2026-r06',
      round: 6,
      name: 'Monaco E-Prix',
      circuit: { name: 'Circuit de Monaco', city: 'Monte Carlo', country: 'Monaco', countryCode: 'MC', timezone: 'Europe/Monaco' },
      sessions: [practice('2026-05-09T09:00:00Z'), quali('2026-05-10T09:00:00Z'), race('2026-05-10T14:00:00Z')],
    },
    {
      id: 'fe-2026-r07',
      round: 7,
      name: 'Berlin E-Prix — Race 1',
      circuit: { name: 'Tempelhof Airport Street Circuit', city: 'Berlin', country: 'Germany', countryCode: 'DE', timezone: 'Europe/Berlin' },
      sessions: [practice('2026-06-12T11:00:00Z'), quali('2026-06-13T11:00:00Z'), race('2026-06-13T14:00:00Z')],
    },
    {
      id: 'fe-2026-r08',
      round: 8,
      name: 'Berlin E-Prix — Race 2',
      circuit: { name: 'Tempelhof Airport Street Circuit', city: 'Berlin', country: 'Germany', countryCode: 'DE', timezone: 'Europe/Berlin' },
      sessions: [practice('2026-06-13T09:00:00Z'), quali('2026-06-14T11:00:00Z'), race('2026-06-14T14:00:00Z')],
    },
    {
      id: 'fe-2026-r09',
      round: 9,
      name: 'Jakarta E-Prix',
      circuit: { name: 'Jakarta International E-Prix Circuit', city: 'Jakarta', country: 'Indonesia', countryCode: 'ID', timezone: 'Asia/Jakarta' },
      sessions: [practice('2026-07-17T06:00:00Z'), quali('2026-07-18T06:00:00Z'), race('2026-07-18T09:00:00Z')],
    },
    {
      id: 'fe-2026-r10',
      round: 10,
      name: 'London E-Prix — Race 1',
      circuit: { name: 'ExCeL London', city: 'London', country: 'Great Britain', countryCode: 'GB', timezone: 'Europe/London' },
      sessions: [practice('2026-07-24T12:00:00Z'), quali('2026-07-25T12:00:00Z'), race('2026-07-25T15:00:00Z')],
    },
    {
      id: 'fe-2026-r11',
      round: 11,
      name: 'London E-Prix — Race 2',
      circuit: { name: 'ExCeL London', city: 'London', country: 'Great Britain', countryCode: 'GB', timezone: 'Europe/London' },
      sessions: [practice('2026-07-25T10:00:00Z'), quali('2026-07-26T12:00:00Z'), race('2026-07-26T15:00:00Z')],
    },
  ],
}
