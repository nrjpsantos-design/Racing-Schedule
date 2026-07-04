import type { Session, Championship } from '@/types'

const fp1 = (start: string): Session => ({ type: 'fp1', label: 'Free Practice 1', start, durationMinutes: 40 })
const quali1 = (start: string): Session => ({ type: 'quali', label: 'Qualifying 1', start, durationMinutes: 30 })
const race = (start: string, label: string): Session => ({ type: 'race', label, start, durationMinutes: 30 })

export const F1_ACADEMY_2026: Championship = {
  id: 'f1-academy',
  name: 'F1 Academy',
  shortName: 'F1 Aca',
  vehicleType: 'car',
  category: 'formula',
  color: '#E91E8C',
  textColor: '#FFFFFF',
  season: 2026,
  broadcasts: {
    GLOBAL: [
      { channel: 'F1 TV', type: 'paid-streaming', url: 'https://f1tv.formula1.com' },
    ],
    BR: [
      { channel: 'F1 TV', type: 'paid-streaming', url: 'https://f1tv.formula1.com' },
      { channel: 'Band', type: 'free-tv', note: 'Selected rounds' },
    ],
  },
  events: [
    {
      id: 'f1a-2026-r01',
      round: 1,
      name: 'F1 Academy — China',
      circuit: { name: 'Shanghai International Circuit', city: 'Shanghai', country: 'China', countryCode: 'CN', timezone: 'Asia/Shanghai' },
      sessions: [
        fp1('2026-03-13T02:00:00Z'),
        quali1('2026-03-13T06:00:00Z'),
        race('2026-03-14T02:00:00Z', 'Race 1'),
        race('2026-03-15T02:00:00Z', 'Race 2'),
      ],
    },
    {
      id: 'f1a-2026-r02',
      round: 2,
      name: 'F1 Academy — Canada',
      circuit: { name: 'Circuit Gilles Villeneuve', city: 'Montréal', country: 'Canada', countryCode: 'CA', timezone: 'America/Toronto' },
      sessions: [
        fp1('2026-05-22T14:00:00Z'),
        quali1('2026-05-22T18:00:00Z'),
        race('2026-05-23T14:00:00Z', 'Opening Race'),
        race('2026-05-23T18:00:00Z', 'Race 1'),
        race('2026-05-24T14:00:00Z', 'Race 2'),
      ],
    },
    {
      id: 'f1a-2026-r03',
      round: 3,
      name: 'F1 Academy — Great Britain',
      circuit: { name: 'Silverstone Circuit', city: 'Silverstone', country: 'Great Britain', countryCode: 'GB', timezone: 'Europe/London' },
      sessions: [
        fp1('2026-07-03T09:00:00Z'),
        quali1('2026-07-03T13:00:00Z'),
        race('2026-07-04T09:00:00Z', 'Race 1'),
        race('2026-07-05T09:00:00Z', 'Race 2'),
      ],
    },
    {
      id: 'f1a-2026-r04',
      round: 4,
      name: 'F1 Academy — Netherlands',
      circuit: { name: 'Circuit Zandvoort', city: 'Zandvoort', country: 'Netherlands', countryCode: 'NL', timezone: 'Europe/Amsterdam' },
      sessions: [
        fp1('2026-08-21T08:00:00Z'),
        quali1('2026-08-21T12:00:00Z'),
        race('2026-08-22T08:00:00Z', 'Race 1'),
        race('2026-08-23T08:00:00Z', 'Race 2'),
      ],
    },
    {
      id: 'f1a-2026-r05',
      round: 5,
      name: 'F1 Academy — USA',
      circuit: { name: 'Circuit of the Americas', city: 'Austin', country: 'United States', countryCode: 'US', timezone: 'America/Chicago' },
      sessions: [
        fp1('2026-10-23T15:00:00Z'),
        quali1('2026-10-23T19:00:00Z'),
        race('2026-10-24T15:00:00Z', 'Opening Race'),
        race('2026-10-24T19:00:00Z', 'Race 1'),
        race('2026-10-25T15:00:00Z', 'Race 2'),
      ],
    },
    {
      id: 'f1a-2026-r06',
      round: 6,
      name: 'F1 Academy — Las Vegas',
      circuit: { name: 'Las Vegas Street Circuit', city: 'Las Vegas', country: 'United States', countryCode: 'US', timezone: 'America/Los_Angeles' },
      sessions: [
        fp1('2026-11-19T18:00:00Z'),
        quali1('2026-11-19T22:00:00Z'),
        race('2026-11-20T18:00:00Z', 'Race 1'),
        race('2026-11-21T18:00:00Z', 'Race 2'),
      ],
    },
  ],
}
