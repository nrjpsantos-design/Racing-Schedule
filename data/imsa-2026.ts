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
      sessions: [fp1('2026-01-22T19:00:00Z'), fp2('2026-01-23T16:00:00Z'), quali('2026-01-24T00:00:00Z'), race('2026-01-24T22:40:00Z', 1440, 'Rolex 24')],
    },
    {
      id: 'imsa-2026-r02',
      round: 2,
      name: 'Mobil 1 Twelve Hours of Sebring',
      circuit: { name: 'Sebring International Raceway', city: 'Sebring', country: 'United States', countryCode: 'US', timezone: 'America/New_York' },
      sessions: [fp1('2026-03-18T19:00:00Z'), fp2('2026-03-19T16:00:00Z'), quali('2026-03-20T22:00:00Z'), race('2026-03-21T14:10:00Z', 720, '12 Hours of Sebring')],
    },
    {
      id: 'imsa-2026-r03',
      round: 3,
      name: 'Acura Grand Prix of Long Beach',
      circuit: { name: 'Long Beach Street Circuit', city: 'Long Beach', country: 'United States', countryCode: 'US', timezone: 'America/Los_Angeles' },
      sessions: [fp1('2026-04-17T21:00:00Z'), quali('2026-04-18T18:00:00Z'), race('2026-04-18T21:00:00Z', 100)],
    },
    {
      id: 'imsa-2026-r04',
      round: 4,
      name: 'WeatherTech Raceway Laguna Seca',
      circuit: { name: 'WeatherTech Raceway Laguna Seca', city: 'Salinas', country: 'United States', countryCode: 'US', timezone: 'America/Los_Angeles' },
      sessions: [fp1('2026-05-01T21:00:00Z'), fp2('2026-05-02T19:00:00Z'), quali('2026-05-02T22:00:00Z'), race('2026-05-03T19:00:00Z', 160)],
    },
    {
      id: 'imsa-2026-r05',
      round: 5,
      name: 'Chevrolet Detroit Sports Car Classic',
      circuit: { name: 'Detroit Street Circuit', city: 'Detroit', country: 'United States', countryCode: 'US', timezone: 'America/New_York' },
      sessions: [fp1('2026-05-29T20:00:00Z'), quali('2026-05-30T18:00:00Z'), race('2026-05-30T20:00:00Z', 100)],
    },
    {
      id: 'imsa-2026-r06',
      round: 6,
      name: "Sahlen's Six Hours of The Glen",
      circuit: { name: 'Watkins Glen International', city: 'Watkins Glen', country: 'United States', countryCode: 'US', timezone: 'America/New_York' },
      sessions: [fp1('2026-06-26T19:00:00Z'), fp2('2026-06-27T16:00:00Z'), quali('2026-06-27T20:00:00Z'), race('2026-06-28T16:00:00Z', 360, 'Six Hours of The Glen')],
    },
    {
      id: 'imsa-2026-r07',
      round: 7,
      name: 'Chevrolet Grand Prix',
      circuit: { name: 'Canadian Tire Motorsport Park', city: 'Bowmanville', country: 'Canada', countryCode: 'CA', timezone: 'America/Toronto' },
      sessions: [fp1('2026-07-10T18:00:00Z'), fp2('2026-07-11T16:00:00Z'), quali('2026-07-11T19:00:00Z'), race('2026-07-12T18:00:00Z', 160)],
    },
    {
      id: 'imsa-2026-r08',
      round: 8,
      name: 'Motul SportsCar Endurance Grand Prix',
      circuit: { name: 'Road America', city: 'Elkhart Lake', country: 'United States', countryCode: 'US', timezone: 'America/Chicago' },
      sessions: [fp1('2026-07-31T19:00:00Z'), fp2('2026-08-01T16:00:00Z'), quali('2026-08-01T20:00:00Z'), race('2026-08-02T16:30:00Z', 360)],
    },
    {
      id: 'imsa-2026-r09',
      round: 9,
      name: 'Michelin GT Challenge at VIR',
      circuit: { name: 'Virginia International Raceway', city: 'Alton', country: 'United States', countryCode: 'US', timezone: 'America/New_York' },
      sessions: [fp1('2026-08-21T18:00:00Z'), fp2('2026-08-22T15:00:00Z'), quali('2026-08-22T19:00:00Z'), race('2026-08-23T18:00:00Z', 160)],
    },
    {
      id: 'imsa-2026-r10',
      round: 10,
      name: 'TireRack.com Battle On The Bricks',
      circuit: { name: 'Indianapolis Motor Speedway', city: 'Indianapolis', country: 'United States', countryCode: 'US', timezone: 'America/Indiana/Indianapolis' },
      sessions: [fp1('2026-09-18T19:00:00Z'), fp2('2026-09-19T16:00:00Z'), quali('2026-09-19T19:00:00Z'), race('2026-09-20T18:00:00Z', 160)],
    },
    {
      id: 'imsa-2026-r11',
      round: 11,
      name: 'Motul Petit Le Mans',
      circuit: { name: 'Michelin Raceway Road Atlanta', city: 'Braselton', country: 'United States', countryCode: 'US', timezone: 'America/New_York' },
      sessions: [fp1('2026-09-30T18:00:00Z'), fp2('2026-10-01T18:00:00Z'), quali('2026-10-02T21:00:00Z'), race('2026-10-03T16:00:00Z', 600, 'Petit Le Mans (10h)')],
    },
  ],
}
