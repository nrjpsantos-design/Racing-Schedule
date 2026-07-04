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
      name: 'São Paulo E-Prix',
      circuit: { name: 'Sambadrome Anhembi Circuit', city: 'São Paulo', country: 'Brazil', countryCode: 'BR', timezone: 'America/Sao_Paulo' },
      sessions: [practice('2025-12-05T13:00:00Z'), quali('2025-12-06T14:00:00Z'), race('2025-12-06T18:00:00Z')],
    },
    {
      id: 'fe-2026-r02',
      round: 2,
      name: 'Mexico City E-Prix',
      circuit: { name: 'Autódromo Hermanos Rodríguez', city: 'Mexico City', country: 'Mexico', countryCode: 'MX', timezone: 'America/Mexico_City' },
      sessions: [practice('2026-01-09T18:00:00Z'), quali('2026-01-10T17:00:00Z'), race('2026-01-10T20:00:00Z')],
    },
    {
      id: 'fe-2026-r03',
      round: 3,
      name: 'Miami E-Prix',
      circuit: { name: 'Miami International Autodrome (Hard Rock Stadium)', city: 'Miami', country: 'USA', countryCode: 'US', timezone: 'America/New_York' },
      sessions: [practice('2026-01-30T20:00:00Z'), quali('2026-01-31T19:00:00Z'), race('2026-01-31T22:00:00Z')],
    },
    {
      id: 'fe-2026-r04',
      round: 4,
      name: 'Jeddah E-Prix — Race 1',
      circuit: { name: 'Jeddah Corniche Circuit', city: 'Jeddah', country: 'Saudi Arabia', countryCode: 'SA', timezone: 'Asia/Riyadh' },
      sessions: [practice('2026-02-12T14:00:00Z'), quali('2026-02-13T12:00:00Z'), race('2026-02-13T17:00:00Z')],
    },
    {
      id: 'fe-2026-r05',
      round: 5,
      name: 'Jeddah E-Prix — Race 2',
      circuit: { name: 'Jeddah Corniche Circuit', city: 'Jeddah', country: 'Saudi Arabia', countryCode: 'SA', timezone: 'Asia/Riyadh' },
      sessions: [practice('2026-02-13T09:00:00Z'), quali('2026-02-14T11:00:00Z'), race('2026-02-14T16:00:00Z')],
    },
    {
      id: 'fe-2026-r06',
      round: 6,
      name: 'Madrid E-Prix',
      circuit: { name: 'Circuito de Madrid-Jarama', city: 'Madrid', country: 'Spain', countryCode: 'ES', timezone: 'Europe/Madrid' },
      sessions: [practice('2026-03-20T14:00:00Z'), quali('2026-03-21T11:00:00Z'), race('2026-03-21T14:00:00Z')],
    },
    {
      id: 'fe-2026-r07',
      round: 7,
      name: 'Berlin E-Prix — Race 1',
      circuit: { name: 'Tempelhof Airport Street Circuit', city: 'Berlin', country: 'Germany', countryCode: 'DE', timezone: 'Europe/Berlin' },
      sessions: [practice('2026-05-01T10:00:00Z'), quali('2026-05-02T09:00:00Z'), race('2026-05-02T14:00:00Z')],
    },
    {
      id: 'fe-2026-r08',
      round: 8,
      name: 'Berlin E-Prix — Race 2',
      circuit: { name: 'Tempelhof Airport Street Circuit', city: 'Berlin', country: 'Germany', countryCode: 'DE', timezone: 'Europe/Berlin' },
      sessions: [practice('2026-05-02T10:00:00Z'), quali('2026-05-03T09:00:00Z'), race('2026-05-03T14:00:00Z')],
    },
    {
      id: 'fe-2026-r09',
      round: 9,
      name: 'Monaco E-Prix — Race 1',
      circuit: { name: 'Circuit de Monaco', city: 'Monte Carlo', country: 'Monaco', countryCode: 'MC', timezone: 'Europe/Monaco' },
      sessions: [practice('2026-05-15T09:00:00Z'), quali('2026-05-16T09:00:00Z'), race('2026-05-16T14:00:00Z')],
    },
    {
      id: 'fe-2026-r10',
      round: 10,
      name: 'Monaco E-Prix — Race 2',
      circuit: { name: 'Circuit de Monaco', city: 'Monte Carlo', country: 'Monaco', countryCode: 'MC', timezone: 'Europe/Monaco' },
      sessions: [practice('2026-05-16T09:00:00Z'), quali('2026-05-17T09:00:00Z'), race('2026-05-17T14:00:00Z')],
    },
    {
      id: 'fe-2026-r11',
      round: 11,
      name: 'Sanya E-Prix',
      circuit: { name: 'Haitang Bay Circuit', city: 'Sanya', country: 'China', countryCode: 'CN', timezone: 'Asia/Shanghai' },
      sessions: [practice('2026-06-19T06:00:00Z'), quali('2026-06-20T05:00:00Z'), race('2026-06-20T08:00:00Z')],
    },
    {
      id: 'fe-2026-r12',
      round: 12,
      name: 'Shanghai E-Prix — Race 1',
      circuit: { name: 'Shanghai International Circuit', city: 'Shanghai', country: 'China', countryCode: 'CN', timezone: 'Asia/Shanghai' },
      sessions: [practice('2026-07-03T05:00:00Z'), quali('2026-07-04T04:00:00Z'), race('2026-07-04T07:00:00Z')],
    },
    {
      id: 'fe-2026-r13',
      round: 13,
      name: 'Shanghai E-Prix — Race 2',
      circuit: { name: 'Shanghai International Circuit', city: 'Shanghai', country: 'China', countryCode: 'CN', timezone: 'Asia/Shanghai' },
      sessions: [practice('2026-07-04T05:00:00Z'), quali('2026-07-05T04:00:00Z'), race('2026-07-05T07:00:00Z')],
    },
    {
      id: 'fe-2026-r14',
      round: 14,
      name: 'Tokyo E-Prix — Race 1',
      circuit: { name: 'Tokyo Street Circuit', city: 'Tokyo', country: 'Japan', countryCode: 'JP', timezone: 'Asia/Tokyo' },
      sessions: [practice('2026-07-24T04:00:00Z'), quali('2026-07-25T03:00:00Z'), race('2026-07-25T06:00:00Z')],
    },
    {
      id: 'fe-2026-r15',
      round: 15,
      name: 'Tokyo E-Prix — Race 2',
      circuit: { name: 'Tokyo Street Circuit', city: 'Tokyo', country: 'Japan', countryCode: 'JP', timezone: 'Asia/Tokyo' },
      sessions: [practice('2026-07-25T04:00:00Z'), quali('2026-07-26T03:00:00Z'), race('2026-07-26T06:00:00Z')],
    },
    {
      id: 'fe-2026-r16',
      round: 16,
      name: 'London E-Prix — Race 1',
      circuit: { name: 'ExCeL London', city: 'London', country: 'Great Britain', countryCode: 'GB', timezone: 'Europe/London' },
      sessions: [practice('2026-08-14T13:00:00Z'), quali('2026-08-15T11:00:00Z'), race('2026-08-15T14:00:00Z')],
    },
    {
      id: 'fe-2026-r17',
      round: 17,
      name: 'London E-Prix — Race 2',
      circuit: { name: 'ExCeL London', city: 'London', country: 'Great Britain', countryCode: 'GB', timezone: 'Europe/London' },
      sessions: [practice('2026-08-15T13:00:00Z'), quali('2026-08-16T11:00:00Z'), race('2026-08-16T14:00:00Z')],
    },
  ],
}
