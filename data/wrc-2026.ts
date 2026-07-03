import type { Championship, Session } from '@/types'

const shakedown = (start: string): Session => ({ type: 'fp1', label: 'Shakedown', start, durationMinutes: 60 })
const day1 = (start: string): Session => ({ type: 'race', label: 'Day 1 — Friday Stages', start, durationMinutes: 480 })
const day2 = (start: string): Session => ({ type: 'race', label: 'Day 2 — Saturday Stages', start, durationMinutes: 480 })
const day3 = (start: string): Session => ({ type: 'race', label: 'Day 3 — Power Stage', start, durationMinutes: 120 })

export const WRC_2026: Championship = {
  id: 'wrc',
  name: 'FIA World Rally Championship',
  shortName: 'WRC',
  vehicleType: 'car',
  category: 'rally',
  color: '#00A0DC',
  textColor: '#FFFFFF',
  season: 2026,
  broadcasts: {
    GLOBAL: [
      { channel: 'WRC+', type: 'paid-streaming', url: 'https://www.wrc.com/en/wrc-plus/' },
    ],
    UK: [
      { channel: 'WRC+', type: 'paid-streaming', url: 'https://www.wrc.com/en/wrc-plus/' },
      { channel: 'Eurosport', type: 'cable-tv' },
    ],
    DE: [
      { channel: 'WRC+', type: 'paid-streaming', url: 'https://www.wrc.com/en/wrc-plus/' },
      { channel: 'Eurosport', type: 'cable-tv' },
    ],
    BR: [
      { channel: 'WRC+', type: 'paid-streaming', url: 'https://www.wrc.com/en/wrc-plus/' },
    ],
  },
  events: [
    {
      id: 'wrc-2026-r01',
      round: 1,
      name: 'Rally Monte-Carlo',
      circuit: { name: 'Monte-Carlo', city: 'Monte-Carlo', country: 'Monaco', countryCode: 'MC', timezone: 'Europe/Monaco' },
      sessions: [shakedown('2026-01-22T09:00:00Z'), day1('2026-01-22T14:00:00Z'), day2('2026-01-23T08:00:00Z'), day3('2026-01-25T10:00:00Z')],
    },
    {
      id: 'wrc-2026-r02',
      round: 2,
      name: 'Rally Sweden',
      circuit: { name: 'Umeå Service Park', city: 'Umeå', country: 'Sweden', countryCode: 'SE', timezone: 'Europe/Stockholm' },
      sessions: [shakedown('2026-02-12T09:00:00Z'), day1('2026-02-12T14:00:00Z'), day2('2026-02-13T08:00:00Z'), day3('2026-02-15T10:00:00Z')],
    },
    {
      id: 'wrc-2026-r03',
      round: 3,
      name: 'Safari Rally Kenya',
      circuit: { name: 'Naivasha', city: 'Naivasha', country: 'Kenya', countryCode: 'KE', timezone: 'Africa/Nairobi' },
      sessions: [shakedown('2026-03-26T07:00:00Z'), day1('2026-03-26T12:00:00Z'), day2('2026-03-27T07:00:00Z'), day3('2026-03-29T08:00:00Z')],
    },
    {
      id: 'wrc-2026-r04',
      round: 4,
      name: 'Croatia Rally',
      circuit: { name: 'Zagreb', city: 'Zagreb', country: 'Croatia', countryCode: 'HR', timezone: 'Europe/Zagreb' },
      sessions: [shakedown('2026-04-23T09:00:00Z'), day1('2026-04-23T14:00:00Z'), day2('2026-04-24T08:00:00Z'), day3('2026-04-26T10:00:00Z')],
    },
    {
      id: 'wrc-2026-r05',
      round: 5,
      name: 'Rally de Portugal',
      circuit: { name: 'Matosinhos Service Park', city: 'Matosinhos', country: 'Portugal', countryCode: 'PT', timezone: 'Europe/Lisbon' },
      sessions: [shakedown('2026-05-21T09:00:00Z'), day1('2026-05-21T14:00:00Z'), day2('2026-05-22T08:00:00Z'), day3('2026-05-24T10:00:00Z')],
    },
    {
      id: 'wrc-2026-r06',
      round: 6,
      name: 'Rally Italia Sardegna',
      circuit: { name: 'Alghero', city: 'Alghero', country: 'Italy', countryCode: 'IT', timezone: 'Europe/Rome' },
      sessions: [shakedown('2026-06-04T09:00:00Z'), day1('2026-06-04T14:00:00Z'), day2('2026-06-05T08:00:00Z'), day3('2026-06-07T10:00:00Z')],
    },
    {
      id: 'wrc-2026-r07',
      round: 7,
      name: 'Acropolis Rally Greece',
      circuit: { name: 'Lamia', city: 'Lamia', country: 'Greece', countryCode: 'GR', timezone: 'Europe/Athens' },
      sessions: [shakedown('2026-09-03T09:00:00Z'), day1('2026-09-03T14:00:00Z'), day2('2026-09-04T08:00:00Z'), day3('2026-09-06T10:00:00Z')],
    },
    {
      id: 'wrc-2026-r08',
      round: 8,
      name: 'Rally Finland',
      circuit: { name: 'Jyväskylä', city: 'Jyväskylä', country: 'Finland', countryCode: 'FI', timezone: 'Europe/Helsinki' },
      sessions: [shakedown('2026-07-30T09:00:00Z'), day1('2026-07-30T14:00:00Z'), day2('2026-07-31T08:00:00Z'), day3('2026-08-02T10:00:00Z')],
    },
    {
      id: 'wrc-2026-r09',
      round: 9,
      name: 'Rally Latvia',
      circuit: { name: 'Liepāja', city: 'Liepāja', country: 'Latvia', countryCode: 'LV', timezone: 'Europe/Riga' },
      sessions: [shakedown('2026-08-20T09:00:00Z'), day1('2026-08-20T14:00:00Z'), day2('2026-08-21T08:00:00Z'), day3('2026-08-23T10:00:00Z')],
    },
    {
      id: 'wrc-2026-r10',
      round: 10,
      name: 'Rally Chile Biobío',
      circuit: { name: 'Concepción', city: 'Concepción', country: 'Chile', countryCode: 'CL', timezone: 'America/Santiago' },
      sessions: [shakedown('2026-10-01T13:00:00Z'), day1('2026-10-01T18:00:00Z'), day2('2026-10-02T13:00:00Z'), day3('2026-10-04T15:00:00Z')],
    },
    {
      id: 'wrc-2026-r11',
      round: 11,
      name: 'Rally Japan',
      circuit: { name: 'Nagoya', city: 'Nagoya', country: 'Japan', countryCode: 'JP', timezone: 'Asia/Tokyo' },
      sessions: [shakedown('2026-10-29T01:00:00Z'), day1('2026-10-29T06:00:00Z'), day2('2026-10-30T01:00:00Z'), day3('2026-11-01T04:00:00Z')],
    },
    {
      id: 'wrc-2026-r12',
      round: 12,
      name: 'FORUM8 Rally Japan',
      circuit: { name: 'Aichi/Gifu', city: 'Nagoya', country: 'Japan', countryCode: 'JP', timezone: 'Asia/Tokyo' },
      sessions: [shakedown('2026-11-19T01:00:00Z'), day1('2026-11-19T06:00:00Z'), day2('2026-11-20T01:00:00Z'), day3('2026-11-22T04:00:00Z')],
    },
    {
      id: 'wrc-2026-r13',
      round: 13,
      name: 'Rally RACC — Rally de España',
      circuit: { name: 'Salou', city: 'Salou', country: 'Spain', countryCode: 'ES', timezone: 'Europe/Madrid' },
      sessions: [shakedown('2026-10-22T09:00:00Z'), day1('2026-10-22T14:00:00Z'), day2('2026-10-23T08:00:00Z'), day3('2026-10-25T10:00:00Z')],
    },
  ],
}
