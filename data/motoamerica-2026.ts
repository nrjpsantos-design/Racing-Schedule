import type { Championship, Session } from '@/types'

const fp1 = (start: string): Session => ({ type: 'fp1', label: 'Practice', start, durationMinutes: 45 })
const quali = (start: string): Session => ({ type: 'quali', label: 'Superpole', start, durationMinutes: 30 })
const race1 = (start: string): Session => ({ type: 'race', label: 'Superbike Race 1', start, durationMinutes: 30 })
const race2 = (start: string): Session => ({ type: 'race', label: 'Superbike Race 2', start, durationMinutes: 30 })

export const MOTOAMERICA_2026: Championship = {
  id: 'motoamerica',
  name: 'MotoAmerica Superbike',
  shortName: 'MotoAmerica',
  vehicleType: 'motorcycle',
  category: 'moto',
  color: '#002868',
  textColor: '#FFFFFF',
  season: 2026,
  broadcasts: {
    US: [
      { channel: 'Peacock', type: 'paid-streaming', url: 'https://www.peacocktv.com' },
      { channel: 'MotoAmerica+', type: 'paid-streaming', url: 'https://www.motoamerica.com' },
    ],
    GLOBAL: [
      { channel: 'MotoAmerica+', type: 'paid-streaming', url: 'https://www.motoamerica.com' },
    ],
  },
  events: [
    {
      id: 'motoamerica-2026-r01',
      round: 1,
      name: 'Road Atlanta',
      circuit: {
        name: 'Michelin Raceway Road Atlanta',
        city: 'Braselton',
        country: 'United States',
        countryCode: 'US',
        timezone: 'America/New_York',
      },
      sessions: [
        fp1('2026-04-17T18:00:00Z'),
        quali('2026-04-18T17:00:00Z'),
        race1('2026-04-18T20:30:00Z'),
        race2('2026-04-19T18:00:00Z'),
      ],
    },
    {
      id: 'motoamerica-2026-r02',
      round: 2,
      name: 'Barber',
      circuit: {
        name: 'Barber Motorsports Park',
        city: 'Birmingham',
        country: 'United States',
        countryCode: 'US',
        timezone: 'America/Chicago',
      },
      sessions: [
        fp1('2026-05-01T18:00:00Z'),
        quali('2026-05-02T17:00:00Z'),
        race1('2026-05-02T20:30:00Z'),
        race2('2026-05-03T18:00:00Z'),
      ],
    },
    {
      id: 'motoamerica-2026-r03',
      round: 3,
      name: 'Road America',
      circuit: {
        name: 'Road America',
        city: 'Elkhart Lake',
        country: 'United States',
        countryCode: 'US',
        timezone: 'America/Chicago',
      },
      sessions: [
        fp1('2026-06-05T18:00:00Z'),
        quali('2026-06-06T17:00:00Z'),
        race1('2026-06-06T20:30:00Z'),
        race2('2026-06-07T18:00:00Z'),
      ],
    },
    {
      id: 'motoamerica-2026-r04',
      round: 4,
      name: 'Mid-Ohio',
      circuit: {
        name: 'Mid-Ohio Sports Car Course',
        city: 'Lexington',
        country: 'United States',
        countryCode: 'US',
        timezone: 'America/New_York',
      },
      sessions: [
        fp1('2026-06-26T18:00:00Z'),
        quali('2026-06-27T17:00:00Z'),
        race1('2026-06-27T20:30:00Z'),
        race2('2026-06-28T18:00:00Z'),
      ],
    },
    {
      id: 'motoamerica-2026-r05',
      round: 5,
      name: 'Ridge Motorsports Park',
      circuit: {
        name: 'Ridge Motorsports Park',
        city: 'Shelton',
        country: 'United States',
        countryCode: 'US',
        timezone: 'America/Los_Angeles',
      },
      sessions: [
        fp1('2026-07-24T20:00:00Z'),
        quali('2026-07-25T19:00:00Z'),
        race1('2026-07-25T22:00:00Z'),
        race2('2026-07-26T20:00:00Z'),
      ],
    },
    {
      id: 'motoamerica-2026-r06',
      round: 6,
      name: 'Pittsburgh Intl Race Complex',
      circuit: {
        name: 'Pittsburgh International Race Complex',
        city: 'Wampum',
        country: 'United States',
        countryCode: 'US',
        timezone: 'America/New_York',
      },
      sessions: [
        fp1('2026-08-14T18:00:00Z'),
        quali('2026-08-15T17:00:00Z'),
        race1('2026-08-15T20:30:00Z'),
        race2('2026-08-16T18:00:00Z'),
      ],
    },
    {
      id: 'motoamerica-2026-r07',
      round: 7,
      name: 'Laguna Seca',
      circuit: {
        name: 'WeatherTech Raceway Laguna Seca',
        city: 'Salinas',
        country: 'United States',
        countryCode: 'US',
        timezone: 'America/Los_Angeles',
      },
      sessions: [
        fp1('2026-09-04T20:00:00Z'),
        quali('2026-09-05T19:00:00Z'),
        race1('2026-09-05T22:00:00Z'),
        race2('2026-09-06T20:00:00Z'),
      ],
    },
    {
      id: 'motoamerica-2026-r08',
      round: 8,
      name: 'Indianapolis Motor Speedway',
      circuit: {
        name: 'Indianapolis Motor Speedway',
        city: 'Indianapolis',
        country: 'United States',
        countryCode: 'US',
        timezone: 'America/Indiana/Indianapolis',
      },
      sessions: [
        fp1('2026-09-18T17:00:00Z'),
        quali('2026-09-19T17:00:00Z'),
        race1('2026-09-19T20:00:00Z'),
        race2('2026-09-20T18:00:00Z'),
      ],
    },
  ],
}

