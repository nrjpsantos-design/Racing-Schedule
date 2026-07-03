import type { Championship, Session } from '@/types'

const fp1 = (start: string): Session => ({ type: 'fp1', label: 'Practice 1', start, durationMinutes: 60 })
const fp2 = (start: string): Session => ({ type: 'fp2', label: 'Practice 2', start, durationMinutes: 60 })
const quali = (start: string): Session => ({ type: 'quali', label: 'Qualifying', start, durationMinutes: 15 })
const race = (start: string, durationMinutes: number, label = 'Race'): Session => ({ type: 'race', label, start, durationMinutes })

export const IMSA_2026: Championship = {
  id: 'imsa',
  name: 'IMSA SportsCar Championship',
  shortName: 'IMSA',
  vehicleType: 'car',
  category: 'endurance',
  color: '#E31837',
  textColor: '#FFFFFF',
  season: 2026,
  broadcasts: {
    US: [
      { channel: 'NBC', type: 'free-tv', note: 'Selected rounds' },
      { channel: 'USA Network', type: 'cable-tv' },
      { channel: 'Peacock', type: 'paid-streaming', url: 'https://www.peacocktv.com' },
      { channel: 'IMSA.tv', type: 'free-streaming', url: 'https://www.imsa.com/imsa-tv', note: 'Free for registered users' },
    ],
    GLOBAL: [
      { channel: 'Peacock', type: 'paid-streaming', url: 'https://www.peacocktv.com' },
      { channel: 'IMSA.tv', type: 'free-streaming', url: 'https://www.imsa.com/imsa-tv', note: 'Free for registered users' },
    ],
    BR: [
      { channel: 'ESPN', type: 'cable-tv' },
      { channel: 'IMSA.tv', type: 'free-streaming', url: 'https://www.imsa.com/imsa-tv' },
    ],
  },
  events: [
    {
      id: 'imsa-2026-r01',
      round: 1,
      name: 'Rolex 24 at Daytona',
      circuit: { name: 'Daytona International Speedway', city: 'Daytona Beach', country: 'United States', countryCode: 'US', timezone: 'America/New_York' },
      sessions: [fp1('2026-01-22T19:00:00Z'), fp2('2026-01-23T16:00:00Z'), quali('2026-01-24T00:00:00Z'), race('2026-01-24T20:00:00Z', 1440, 'Rolex 24')],
    },
    {
      id: 'imsa-2026-r02',
      round: 2,
      name: '12 Hours of Sebring',
      circuit: { name: 'Sebring International Raceway', city: 'Sebring', country: 'United States', countryCode: 'US', timezone: 'America/New_York' },
      sessions: [fp1('2026-03-13T17:00:00Z'), fp2('2026-03-14T14:00:00Z'), quali('2026-03-14T18:30:00Z'), race('2026-03-14T14:00:00Z', 720, '12 Hours of Sebring')],
    },
    {
      id: 'imsa-2026-r03',
      round: 3,
      name: 'Acura Grand Prix of Long Beach',
      circuit: { name: 'Streets of Long Beach', city: 'Long Beach', country: 'United States', countryCode: 'US', timezone: 'America/Los_Angeles' },
      sessions: [fp1('2026-04-11T19:00:00Z'), quali('2026-04-11T22:00:00Z'), race('2026-04-12T19:00:00Z', 100)],
    },
    {
      id: 'imsa-2026-r04',
      round: 4,
      name: 'Mid-Ohio Sports Car Course',
      circuit: { name: 'Mid-Ohio Sports Car Course', city: 'Lexington', country: 'United States', countryCode: 'US', timezone: 'America/New_York' },
      sessions: [fp1('2026-05-02T17:00:00Z'), fp2('2026-05-03T13:00:00Z'), quali('2026-05-03T16:00:00Z'), race('2026-05-03T19:00:00Z', 150)],
    },
    {
      id: 'imsa-2026-r05',
      round: 5,
      name: 'Chevrolet Detroit Grand Prix',
      circuit: { name: 'Detroit Street Circuit', city: 'Detroit', country: 'United States', countryCode: 'US', timezone: 'America/New_York' },
      sessions: [fp1('2026-06-06T17:00:00Z'), quali('2026-06-06T21:00:00Z'), race('2026-06-07T17:00:00Z', 120)],
    },
    {
      id: 'imsa-2026-r06',
      round: 6,
      name: 'Chevrolet Sports Car Classic — Mosport',
      circuit: { name: 'Canadian Tire Motorsport Park', city: 'Bowmanville', country: 'Canada', countryCode: 'CA', timezone: 'America/Toronto' },
      sessions: [fp1('2026-07-03T18:00:00Z'), fp2('2026-07-04T16:00:00Z'), quali('2026-07-05T13:00:00Z'), race('2026-07-05T17:00:00Z', 150)],
    },
    {
      id: 'imsa-2026-r07',
      round: 7,
      name: 'Road America',
      circuit: { name: 'Road America', city: 'Elkhart Lake', country: 'United States', countryCode: 'US', timezone: 'America/Chicago' },
      sessions: [fp1('2026-08-07T19:00:00Z'), fp2('2026-08-08T16:00:00Z'), quali('2026-08-08T20:00:00Z'), race('2026-08-09T17:00:00Z', 150)],
    },
    {
      id: 'imsa-2026-r08',
      round: 8,
      name: 'Virginia Is For Racing Lovers Grand Prix',
      circuit: { name: 'Virginia International Raceway', city: 'Danville', country: 'United States', countryCode: 'US', timezone: 'America/New_York' },
      sessions: [fp1('2026-08-21T18:00:00Z'), fp2('2026-08-22T15:00:00Z'), quali('2026-08-22T19:00:00Z'), race('2026-08-23T16:00:00Z', 150)],
    },
    {
      id: 'imsa-2026-r09',
      round: 9,
      name: 'Hyundai Monterey Sports Car Championship',
      circuit: { name: 'WeatherTech Raceway Laguna Seca', city: 'Salinas', country: 'United States', countryCode: 'US', timezone: 'America/Los_Angeles' },
      sessions: [fp1('2026-09-11T19:00:00Z'), fp2('2026-09-12T17:00:00Z'), quali('2026-09-12T20:00:00Z'), race('2026-09-13T19:00:00Z', 150)],
    },
    {
      id: 'imsa-2026-r10',
      round: 10,
      name: 'Petit Le Mans',
      circuit: { name: 'Michelin Raceway Road Atlanta', city: 'Braselton', country: 'United States', countryCode: 'US', timezone: 'America/New_York' },
      sessions: [fp1('2026-10-02T18:00:00Z'), fp2('2026-10-03T14:00:00Z'), quali('2026-10-03T18:00:00Z'), race('2026-10-03T16:00:00Z', 600, 'Petit Le Mans (10h)')],
    },
  ],
}
