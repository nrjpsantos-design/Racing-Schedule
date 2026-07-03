import type { Championship, Session } from '@/types'

const fp1 = (start: string): Session => ({ type: 'fp1', label: 'Practice', start, durationMinutes: 30 })
const fp2 = (start: string): Session => ({ type: 'fp2', label: 'Practice 2', start, durationMinutes: 30 })
const quali = (start: string): Session => ({ type: 'quali', label: 'Top 10 Shootout', start, durationMinutes: 10 })
const race1 = (start: string): Session => ({ type: 'race', label: 'Race 1', start, durationMinutes: 60 })
const race2 = (start: string): Session => ({ type: 'race', label: 'Race 2', start, durationMinutes: 60 })

export const SUPERCARS_2026: Championship = {
  id: 'supercars',
  name: 'Repco Supercars Championship',
  shortName: 'Supercars',
  vehicleType: 'car',
  category: 'touring',
  color: '#E4002B',
  textColor: '#FFFFFF',
  season: 2026,
  broadcasts: {
    AU: [
      { channel: 'Fox Sports Australia', type: 'cable-tv' },
      { channel: 'Kayo Sports', type: 'paid-streaming', url: 'https://kayosports.com.au' },
      { channel: 'Nine Network', type: 'free-tv', note: 'Highlights' },
    ],
    GLOBAL: [
      { channel: 'Supercars YouTube', type: 'free-streaming', url: 'https://www.youtube.com/@Supercars', isYoutube: true, note: 'Highlights' },
    ],
  },
  events: [
    {
      id: 'supercars-2026-r01',
      round: 1,
      name: 'Repco Supercars Championship Round 1',
      circuit: { name: 'Sydney Motorsport Park', city: 'Eastern Creek', country: 'Australia', countryCode: 'AU', timezone: 'Australia/Sydney' },
      sessions: [
        fp1('2026-02-27T02:00:00Z'),
        quali('2026-02-28T02:00:00Z'),
        race1('2026-02-28T05:00:00Z'),
        race2('2026-03-01T04:00:00Z'),
      ],
    },
    {
      id: 'supercars-2026-r02',
      round: 2,
      name: 'Beaurepaires Melbourne 400',
      circuit: { name: 'Albert Park Circuit', city: 'Melbourne', country: 'Australia', countryCode: 'AU', timezone: 'Australia/Melbourne' },
      sessions: [
        fp1('2026-04-03T00:30:00Z'),
        quali('2026-04-04T01:30:00Z'),
        race1('2026-04-04T06:30:00Z'),
        race2('2026-04-05T01:30:00Z'),
      ],
    },
    {
      id: 'supercars-2026-r03',
      round: 3,
      name: 'ITM Auckland SuperSprint',
      circuit: { name: 'Pukekohe Park Raceway', city: 'Auckland', country: 'New Zealand', countryCode: 'NZ', timezone: 'Pacific/Auckland' },
      sessions: [
        fp1('2026-04-10T23:00:00Z'),
        quali('2026-04-11T23:00:00Z'),
        race1('2026-04-11T01:30:00Z'),
        race2('2026-04-12T01:30:00Z'),
      ],
    },
    {
      id: 'supercars-2026-r04',
      round: 4,
      name: 'OTR SuperSprint',
      circuit: { name: 'The Bend Motorsport Park', city: 'Tailem Bend', country: 'Australia', countryCode: 'AU', timezone: 'Australia/Adelaide' },
      sessions: [
        fp1('2026-05-08T02:00:00Z'),
        quali('2026-05-09T02:00:00Z'),
        race1('2026-05-09T05:00:00Z'),
        race2('2026-05-10T04:00:00Z'),
      ],
    },
    {
      id: 'supercars-2026-r05',
      round: 5,
      name: 'Winton SuperRace',
      circuit: { name: 'Winton Motor Raceway', city: 'Winton', country: 'Australia', countryCode: 'AU', timezone: 'Australia/Melbourne' },
      sessions: [
        fp1('2026-05-22T02:00:00Z'),
        quali('2026-05-23T02:00:00Z'),
        race1('2026-05-23T05:00:00Z'),
        race2('2026-05-24T04:00:00Z'),
      ],
    },
    {
      id: 'supercars-2026-r06',
      round: 6,
      name: 'Darwin Triple Crown',
      circuit: { name: 'Hidden Valley Raceway', city: 'Darwin', country: 'Australia', countryCode: 'AU', timezone: 'Australia/Darwin' },
      sessions: [
        fp1('2026-06-19T03:00:00Z'),
        quali('2026-06-20T03:00:00Z'),
        race1('2026-06-20T06:30:00Z'),
        race2('2026-06-21T05:30:00Z'),
      ],
    },
    {
      id: 'supercars-2026-r07',
      round: 7,
      name: 'NTI Townsville 500',
      circuit: { name: 'Reid Park Street Circuit', city: 'Townsville', country: 'Australia', countryCode: 'AU', timezone: 'Australia/Brisbane' },
      sessions: [
        fp1('2026-07-10T02:00:00Z'),
        quali('2026-07-11T02:00:00Z'),
        race1('2026-07-11T06:00:00Z'),
        race2('2026-07-12T05:00:00Z'),
      ],
    },
    {
      id: 'supercars-2026-r08',
      round: 8,
      name: 'Perth SuperSprint',
      circuit: { name: 'Wanneroo Raceway', city: 'Perth', country: 'Australia', countryCode: 'AU', timezone: 'Australia/Perth' },
      sessions: [
        fp1('2026-07-31T09:00:00Z'),
        quali('2026-08-01T09:00:00Z'),
        race1('2026-08-01T12:30:00Z'),
        race2('2026-08-02T11:00:00Z'),
      ],
    },
    {
      id: 'supercars-2026-r09',
      round: 9,
      name: 'Sydney SuperSprint',
      circuit: { name: 'Sydney Motorsport Park', city: 'Eastern Creek', country: 'Australia', countryCode: 'AU', timezone: 'Australia/Sydney' },
      sessions: [
        fp1('2026-09-04T02:00:00Z'),
        quali('2026-09-05T02:00:00Z'),
        race1('2026-09-05T05:00:00Z'),
        race2('2026-09-06T04:00:00Z'),
      ],
    },
    {
      id: 'supercars-2026-r10',
      round: 10,
      name: 'Penrite Oil Sandown 500',
      circuit: { name: 'Sandown Raceway', city: 'Melbourne', country: 'Australia', countryCode: 'AU', timezone: 'Australia/Melbourne' },
      sessions: [
        fp1('2026-09-11T02:00:00Z'),
        quali('2026-09-12T01:00:00Z'),
        { type: 'race', label: 'Race 1', start: '2026-09-12T02:30:00Z', durationMinutes: 60 },
        { type: 'race', label: 'Sandown 500', start: '2026-09-13T03:00:00Z', durationMinutes: 500 },
      ],
    },
    {
      id: 'supercars-2026-r11',
      round: 11,
      name: 'Bathurst 1000',
      circuit: { name: 'Mount Panorama Circuit', city: 'Bathurst', country: 'Australia', countryCode: 'AU', timezone: 'Australia/Sydney' },
      sessions: [
        fp1('2026-10-08T23:00:00Z'),
        fp2('2026-10-09T23:00:00Z'),
        quali('2026-10-10T01:00:00Z'),
        { type: 'race', label: 'Bathurst 1000', start: '2026-10-11T23:00:00Z', durationMinutes: 600 },
      ],
    },
    {
      id: 'supercars-2026-r12',
      round: 12,
      name: 'Gold Coast 500 (Finale)',
      circuit: { name: 'Surfers Paradise Street Circuit', city: 'Gold Coast', country: 'Australia', countryCode: 'AU', timezone: 'Australia/Brisbane' },
      sessions: [
        fp1('2026-11-20T02:00:00Z'),
        quali('2026-11-21T02:00:00Z'),
        race1('2026-11-21T06:00:00Z'),
        race2('2026-11-22T05:00:00Z'),
      ],
    },
  ],
}

