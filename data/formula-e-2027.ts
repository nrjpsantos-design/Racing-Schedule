import type { Championship, Session } from '@/types'

const practice = (start: string): Session => ({ type: 'fp1', label: 'Practice', start, durationMinutes: 45 })
const quali = (start: string): Session => ({ type: 'quali', label: 'Qualifying', start, durationMinutes: 30 })
const race = (start: string): Session => ({ type: 'race', label: 'E-Prix', start, durationMinutes: 50 })

const YT_FE = 'https://www.youtube.com/@FormulaE'

export const FORMULA_E_2027: Championship = {
  id: 'formula-e-2027',
  name: 'Formula E (GEN4)',
  shortName: 'FE Gen4',
  vehicleType: 'car',
  category: 'formula',
  color: '#0055BF',
  textColor: '#FFFFFF',
  season: 2027,
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
      id: 'fe-2027-r01',
      round: 1,
      name: 'Jeddah E-Prix — Race 1',
      circuit: { name: 'Jeddah Corniche Circuit', city: 'Jeddah', country: 'Saudi Arabia', countryCode: 'SA', timezone: 'Asia/Riyadh' },
      sessions: [practice('2026-12-18T12:00:00Z'), quali('2026-12-18T15:00:00Z'), race('2026-12-18T17:00:00Z')],
    },
    {
      id: 'fe-2027-r02',
      round: 2,
      name: 'Jeddah E-Prix — Race 2',
      circuit: { name: 'Jeddah Corniche Circuit', city: 'Jeddah', country: 'Saudi Arabia', countryCode: 'SA', timezone: 'Asia/Riyadh' },
      sessions: [practice('2026-12-19T10:00:00Z'), quali('2026-12-20T14:00:00Z'), race('2026-12-20T17:00:00Z')],
    },
    {
      id: 'fe-2027-r03',
      round: 3,
      name: 'Mexico City E-Prix',
      circuit: { name: 'Autódromo Hermanos Rodríguez', city: 'Mexico City', country: 'Mexico', countryCode: 'MX', timezone: 'America/Mexico_City' },
      sessions: [practice('2027-01-15T18:00:00Z'), quali('2027-01-16T17:00:00Z'), race('2027-01-16T20:00:00Z')],
    },
    {
      id: 'fe-2027-r04',
      round: 4,
      name: 'Austin E-Prix',
      circuit: { name: 'Circuit of The Americas', city: 'Austin', country: 'United States', countryCode: 'US', timezone: 'America/Chicago' },
      sessions: [practice('2027-02-05T19:00:00Z'), quali('2027-02-06T18:00:00Z'), race('2027-02-06T21:00:00Z')],
    },
    {
      id: 'fe-2027-r05',
      round: 5,
      name: 'Miami E-Prix',
      circuit: { name: 'Miami International Autodrome', city: 'Miami', country: 'United States', countryCode: 'US', timezone: 'America/New_York' },
      sessions: [practice('2027-02-19T20:00:00Z'), quali('2027-02-20T19:00:00Z'), race('2027-02-20T22:00:00Z')],
    },
    {
      id: 'fe-2027-r06',
      round: 6,
      name: 'São Paulo E-Prix',
      circuit: { name: 'Anhembi Sambadrome Circuit', city: 'São Paulo', country: 'Brazil', countryCode: 'BR', timezone: 'America/Sao_Paulo' },
      sessions: [practice('2027-03-12T14:00:00Z'), quali('2027-03-13T14:00:00Z'), race('2027-03-13T18:00:00Z')],
    },
    {
      id: 'fe-2027-r07',
      round: 7,
      name: 'Sanya E-Prix',
      circuit: { name: 'Haitang Bay Circuit', city: 'Sanya', country: 'China', countryCode: 'CN', timezone: 'Asia/Shanghai' },
      sessions: [practice('2027-04-16T06:00:00Z'), quali('2027-04-17T05:00:00Z'), race('2027-04-17T08:00:00Z')],
    },
    {
      id: 'fe-2027-r08',
      round: 8,
      name: 'Berlin E-Prix — Race 1',
      circuit: { name: 'Tempelhof Airport Street Circuit', city: 'Berlin', country: 'Germany', countryCode: 'DE', timezone: 'Europe/Berlin' },
      sessions: [practice('2027-05-07T09:00:00Z'), quali('2027-05-08T11:00:00Z'), race('2027-05-08T14:00:00Z')],
    },
    {
      id: 'fe-2027-r09',
      round: 9,
      name: 'Berlin E-Prix — Race 2',
      circuit: { name: 'Tempelhof Airport Street Circuit', city: 'Berlin', country: 'Germany', countryCode: 'DE', timezone: 'Europe/Berlin' },
      sessions: [practice('2027-05-08T10:00:00Z'), quali('2027-05-09T11:00:00Z'), race('2027-05-09T14:00:00Z')],
    },
    {
      id: 'fe-2027-r10',
      round: 10,
      name: 'Monaco E-Prix — Race 1',
      circuit: { name: 'Circuit de Monaco', city: 'Monte Carlo', country: 'Monaco', countryCode: 'MC', timezone: 'Europe/Monaco' },
      sessions: [practice('2027-05-14T09:00:00Z'), quali('2027-05-15T09:00:00Z'), race('2027-05-15T14:00:00Z')],
    },
    {
      id: 'fe-2027-r11',
      round: 11,
      name: 'Monaco E-Prix — Race 2',
      circuit: { name: 'Circuit de Monaco', city: 'Monte Carlo', country: 'Monaco', countryCode: 'MC', timezone: 'Europe/Monaco' },
      sessions: [practice('2027-05-15T08:00:00Z'), quali('2027-05-16T09:00:00Z'), race('2027-05-16T14:00:00Z')],
    },
    {
      id: 'fe-2027-r12',
      round: 12,
      name: 'London E-Prix — Race 1',
      circuit: { name: 'Brands Hatch', city: 'Swanley', country: 'Great Britain', countryCode: 'GB', timezone: 'Europe/London' },
      sessions: [practice('2027-05-28T12:00:00Z'), quali('2027-05-29T10:00:00Z'), race('2027-05-29T14:00:00Z')],
    },
    {
      id: 'fe-2027-r13',
      round: 13,
      name: 'London E-Prix — Race 2',
      circuit: { name: 'Brands Hatch', city: 'Swanley', country: 'Great Britain', countryCode: 'GB', timezone: 'Europe/London' },
      sessions: [practice('2027-05-29T08:00:00Z'), quali('2027-05-30T10:00:00Z'), race('2027-05-30T14:00:00Z')],
    },
    {
      id: 'fe-2027-r14',
      round: 14,
      name: 'Zandvoort E-Prix — Race 1',
      circuit: { name: 'MASCOT Zandvoort Circuit', city: 'Zandvoort', country: 'Netherlands', countryCode: 'NL', timezone: 'Europe/Amsterdam' },
      sessions: [practice('2027-06-17T09:00:00Z'), quali('2027-06-18T11:00:00Z'), race('2027-06-18T14:00:00Z')],
    },
    {
      id: 'fe-2027-r15',
      round: 15,
      name: 'Zandvoort E-Prix — Race 2',
      circuit: { name: 'MASCOT Zandvoort Circuit', city: 'Zandvoort', country: 'Netherlands', countryCode: 'NL', timezone: 'Europe/Amsterdam' },
      sessions: [practice('2027-06-18T10:00:00Z'), quali('2027-06-19T11:00:00Z'), race('2027-06-19T14:00:00Z')],
    },
    {
      id: 'fe-2027-r16',
      round: 16,
      name: 'Madrid E-Prix — Race 1',
      circuit: { name: 'Circuito de Madrid Jarama-RACE', city: 'Madrid', country: 'Spain', countryCode: 'ES', timezone: 'Europe/Madrid' },
      sessions: [practice('2027-06-25T09:00:00Z'), quali('2027-06-26T11:00:00Z'), race('2027-06-26T14:00:00Z')],
    },
    {
      id: 'fe-2027-r17',
      round: 17,
      name: 'Madrid E-Prix — Race 2',
      circuit: { name: 'Circuito de Madrid Jarama-RACE', city: 'Madrid', country: 'Spain', countryCode: 'ES', timezone: 'Europe/Madrid' },
      sessions: [practice('2027-06-26T10:00:00Z'), quali('2027-06-27T11:00:00Z'), race('2027-06-27T14:00:00Z')],
    },
    {
      id: 'fe-2027-r18',
      round: 18,
      name: 'Shanghai E-Prix — Race 1',
      circuit: { name: 'Shanghai International Circuit', city: 'Shanghai', country: 'China', countryCode: 'CN', timezone: 'Asia/Shanghai' },
      sessions: [practice('2027-07-09T04:00:00Z'), quali('2027-07-10T04:00:00Z'), race('2027-07-10T07:00:00Z')],
    },
    {
      id: 'fe-2027-r19',
      round: 19,
      name: 'Shanghai E-Prix — Race 2',
      circuit: { name: 'Shanghai International Circuit', city: 'Shanghai', country: 'China', countryCode: 'CN', timezone: 'Asia/Shanghai' },
      sessions: [practice('2027-07-10T03:00:00Z'), quali('2027-07-11T04:00:00Z'), race('2027-07-11T07:00:00Z')],
    },
    {
      id: 'fe-2027-r20',
      round: 20,
      name: 'Tokyo E-Prix — Race 1',
      circuit: { name: 'Tokyo Street Circuit', city: 'Tokyo', country: 'Japan', countryCode: 'JP', timezone: 'Asia/Tokyo' },
      sessions: [practice('2027-07-23T03:00:00Z'), quali('2027-07-24T03:00:00Z'), race('2027-07-24T06:00:00Z')],
    },
    {
      id: 'fe-2027-r21',
      round: 21,
      name: 'Tokyo E-Prix — Race 2',
      circuit: { name: 'Tokyo Street Circuit', city: 'Tokyo', country: 'Japan', countryCode: 'JP', timezone: 'Asia/Tokyo' },
      sessions: [practice('2027-07-24T02:00:00Z'), quali('2027-07-25T03:00:00Z'), race('2027-07-25T06:00:00Z')],
    },
  ],
}
