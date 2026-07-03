import type { Championship, Session } from '@/types'

const quali = (start: string): Session => ({ type: 'quali', label: 'Qualifying', start, durationMinutes: 30 })
const race1 = (start: string): Session => ({ type: 'race', label: 'Race 1', start, durationMinutes: 30 })
const race2 = (start: string): Session => ({ type: 'race', label: 'Race 2', start, durationMinutes: 30 })
const race3 = (start: string): Session => ({ type: 'race', label: 'Race 3', start, durationMinutes: 30 })

export const BTCC_2026: Championship = {
  id: 'btcc',
  name: 'British Touring Car Championship',
  shortName: 'BTCC',
  vehicleType: 'car',
  category: 'touring',
  color: '#1D428A',
  textColor: '#FFFFFF',
  season: 2026,
  broadcasts: {
    UK: [
      { channel: 'ITV4', type: 'free-tv' },
      { channel: 'ITVX', type: 'free-streaming', url: 'https://www.itvx.com', note: 'Free live stream UK' },
    ],
    GLOBAL: [
      { channel: 'BTCC.net', type: 'paid-streaming', url: 'https://www.btcc.net/btcc-tv' },
    ],
  },
  events: [
    {
      id: 'btcc-2026-r01',
      round: 1,
      name: 'Brands Hatch Indy',
      circuit: { name: 'Brands Hatch (Indy)', city: 'Longfield', country: 'Great Britain', countryCode: 'GB', timezone: 'Europe/London' },
      sessions: [
        quali('2026-04-18T10:00:00Z'),
        race1('2026-04-19T09:30:00Z'),
        race2('2026-04-19T12:00:00Z'),
        race3('2026-04-19T14:30:00Z'),
      ],
    },
    {
      id: 'btcc-2026-r02',
      round: 2,
      name: 'Donington Park',
      circuit: { name: 'Donington Park', city: 'Castle Donington', country: 'Great Britain', countryCode: 'GB', timezone: 'Europe/London' },
      sessions: [
        quali('2026-05-02T10:00:00Z'),
        race1('2026-05-03T09:30:00Z'),
        race2('2026-05-03T12:00:00Z'),
        race3('2026-05-03T14:30:00Z'),
      ],
    },
    {
      id: 'btcc-2026-r03',
      round: 3,
      name: 'Thruxton',
      circuit: { name: 'Thruxton Circuit', city: 'Andover', country: 'Great Britain', countryCode: 'GB', timezone: 'Europe/London' },
      sessions: [
        quali('2026-05-23T10:00:00Z'),
        race1('2026-05-24T09:30:00Z'),
        race2('2026-05-24T12:00:00Z'),
        race3('2026-05-24T14:30:00Z'),
      ],
    },
    {
      id: 'btcc-2026-r04',
      round: 4,
      name: 'Oulton Park',
      circuit: { name: 'Oulton Park', city: 'Little Budworth', country: 'Great Britain', countryCode: 'GB', timezone: 'Europe/London' },
      sessions: [
        quali('2026-06-06T10:00:00Z'),
        race1('2026-06-07T09:30:00Z'),
        race2('2026-06-07T12:00:00Z'),
        race3('2026-06-07T14:30:00Z'),
      ],
    },
    {
      id: 'btcc-2026-r05',
      round: 5,
      name: 'Croft',
      circuit: { name: 'Croft Circuit', city: 'Dalton-on-Tees', country: 'Great Britain', countryCode: 'GB', timezone: 'Europe/London' },
      sessions: [
        quali('2026-06-27T10:00:00Z'),
        race1('2026-06-28T09:30:00Z'),
        race2('2026-06-28T12:00:00Z'),
        race3('2026-06-28T14:30:00Z'),
      ],
    },
    {
      id: 'btcc-2026-r06',
      round: 6,
      name: 'Snetterton 300',
      circuit: { name: 'Snetterton Circuit', city: 'Norwich', country: 'Great Britain', countryCode: 'GB', timezone: 'Europe/London' },
      sessions: [
        quali('2026-08-01T10:00:00Z'),
        race1('2026-08-02T09:30:00Z'),
        race2('2026-08-02T12:00:00Z'),
        race3('2026-08-02T14:30:00Z'),
      ],
    },
    {
      id: 'btcc-2026-r07',
      round: 7,
      name: 'Knockhill',
      circuit: { name: 'Knockhill Racing Circuit', city: 'Dunfermline', country: 'Great Britain', countryCode: 'GB', timezone: 'Europe/London' },
      sessions: [
        quali('2026-08-15T10:00:00Z'),
        race1('2026-08-16T09:30:00Z'),
        race2('2026-08-16T12:00:00Z'),
        race3('2026-08-16T14:30:00Z'),
      ],
    },
    {
      id: 'btcc-2026-r08',
      round: 8,
      name: 'Silverstone',
      circuit: { name: 'Silverstone Circuit', city: 'Silverstone', country: 'Great Britain', countryCode: 'GB', timezone: 'Europe/London' },
      sessions: [
        quali('2026-09-05T10:00:00Z'),
        race1('2026-09-06T09:30:00Z'),
        race2('2026-09-06T12:00:00Z'),
        race3('2026-09-06T14:30:00Z'),
      ],
    },
    {
      id: 'btcc-2026-r09',
      round: 9,
      name: 'Brands Hatch GP',
      circuit: { name: 'Brands Hatch GP', city: 'Longfield', country: 'Great Britain', countryCode: 'GB', timezone: 'Europe/London' },
      sessions: [
        quali('2026-10-03T10:00:00Z'),
        race1('2026-10-04T09:30:00Z'),
        race2('2026-10-04T12:00:00Z'),
        race3('2026-10-04T14:30:00Z'),
      ],
    },
    {
      id: 'btcc-2026-r10',
      round: 10,
      name: 'Brands Hatch GP (Finale)',
      circuit: { name: 'Brands Hatch (GP Circuit)', city: 'Longfield', country: 'Great Britain', countryCode: 'GB', timezone: 'Europe/London' },
      sessions: [
        quali('2026-10-17T10:00:00Z'),
        race1('2026-10-18T09:30:00Z'),
        race2('2026-10-18T12:00:00Z'),
        race3('2026-10-18T14:30:00Z'),
      ],
    },
  ],
}

