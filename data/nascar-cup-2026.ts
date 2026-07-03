import type { Championship, Session } from '@/types'

const race = (start: string, durationMinutes: number, label: string): Session => ({
  type: 'race',
  label,
  start,
  durationMinutes,
})

const fp1 = (start: string): Session => ({ type: 'fp1', label: 'Practice', start, durationMinutes: 25 })
const quali = (start: string): Session => ({ type: 'quali', label: 'Qualifying', start, durationMinutes: 15 })

export const NASCAR_CUP_2026: Championship = {
  id: 'nascar-cup',
  name: 'NASCAR Cup Series',
  shortName: 'NASCAR',
  vehicleType: 'car',
  category: 'touring',
  color: '#003087',
  textColor: '#FFFFFF',
  season: 2026,
  broadcasts: {
    US: [
      { channel: 'Fox', type: 'free-tv', note: 'First half of season' },
      { channel: 'NBC', type: 'free-tv', note: 'Second half of season' },
      { channel: 'TNT Sports', type: 'cable-tv', note: 'Selected races' },
      { channel: 'Prime Video', type: 'paid-streaming', url: 'https://www.amazon.com/primevideo' },
    ],
    GLOBAL: [
      { channel: 'NASCAR.com', type: 'free-streaming', url: 'https://www.nascar.com/live' },
    ],
  },
  events: [
    {
      id: 'nascar-cup-2026-r01',
      round: 1,
      name: 'Daytona 500',
      circuit: { name: 'Daytona International Speedway', city: 'Daytona Beach', country: 'United States', countryCode: 'US', timezone: 'America/New_York' },
      sessions: [
        fp1('2026-02-12T18:00:00Z'),
        quali('2026-02-13T21:00:00Z'),
        race('2026-02-15T20:30:00Z', 240, 'Daytona 500'),
      ],
    },
    {
      id: 'nascar-cup-2026-r02',
      round: 2,
      name: 'Ambetter Health 400',
      circuit: { name: 'Atlanta Motor Speedway', city: 'Hampton', country: 'United States', countryCode: 'US', timezone: 'America/New_York' },
      sessions: [
        fp1('2026-02-21T19:00:00Z'),
        quali('2026-02-21T22:00:00Z'),
        race('2026-02-22T19:30:00Z', 180, 'Ambetter Health 400'),
      ],
    },
    {
      id: 'nascar-cup-2026-r03',
      round: 3,
      name: 'Pennzoil 400',
      circuit: { name: 'Las Vegas Motor Speedway', city: 'Las Vegas', country: 'United States', countryCode: 'US', timezone: 'America/Los_Angeles' },
      sessions: [
        fp1('2026-02-27T22:00:00Z'),
        quali('2026-02-28T01:00:00Z'),
        race('2026-03-01T21:30:00Z', 180, 'Pennzoil 400'),
      ],
    },
    {
      id: 'nascar-cup-2026-r04',
      round: 4,
      name: 'Shriners Children\'s 500',
      circuit: { name: 'Phoenix Raceway', city: 'Avondale', country: 'United States', countryCode: 'US', timezone: 'America/Phoenix' },
      sessions: [
        fp1('2026-03-06T23:00:00Z'),
        quali('2026-03-07T02:00:00Z'),
        race('2026-03-08T20:30:00Z', 180, 'Shriners 500'),
      ],
    },
    {
      id: 'nascar-cup-2026-r05',
      round: 5,
      name: 'Food City 500',
      circuit: { name: 'Bristol Motor Speedway', city: 'Bristol', country: 'United States', countryCode: 'US', timezone: 'America/New_York' },
      sessions: [
        fp1('2026-03-13T19:00:00Z'),
        quali('2026-03-13T22:00:00Z'),
        race('2026-03-15T17:30:00Z', 180, 'Food City 500'),
      ],
    },
    {
      id: 'nascar-cup-2026-r06',
      round: 6,
      name: 'EchoPark Automotive Grand Prix',
      circuit: { name: 'Circuit of the Americas', city: 'Austin', country: 'United States', countryCode: 'US', timezone: 'America/Chicago' },
      sessions: [
        fp1('2026-03-20T20:00:00Z'),
        quali('2026-03-21T18:00:00Z'),
        race('2026-03-22T18:00:00Z', 150, 'EchoPark Grand Prix'),
      ],
    },
    {
      id: 'nascar-cup-2026-r07',
      round: 7,
      name: 'Toyota Owners 400',
      circuit: { name: 'Richmond Raceway', city: 'Richmond', country: 'United States', countryCode: 'US', timezone: 'America/New_York' },
      sessions: [
        fp1('2026-03-27T20:00:00Z'),
        quali('2026-03-27T22:00:00Z'),
        race('2026-03-29T19:30:00Z', 180, 'Toyota Owners 400'),
      ],
    },
    {
      id: 'nascar-cup-2026-r08',
      round: 8,
      name: 'Cook Out 400',
      circuit: { name: 'Martinsville Speedway', city: 'Martinsville', country: 'United States', countryCode: 'US', timezone: 'America/New_York' },
      sessions: [
        fp1('2026-04-03T19:00:00Z'),
        quali('2026-04-03T22:00:00Z'),
        race('2026-04-05T19:30:00Z', 180, 'Cook Out 400'),
      ],
    },
    {
      id: 'nascar-cup-2026-r09',
      round: 9,
      name: 'NOCO 400',
      circuit: { name: 'Talladega Superspeedway', city: 'Talladega', country: 'United States', countryCode: 'US', timezone: 'America/Chicago' },
      sessions: [
        fp1('2026-04-24T19:00:00Z'),
        quali('2026-04-24T22:00:00Z'),
        race('2026-04-26T18:00:00Z', 180, 'NOCO 400 — Talladega'),
      ],
    },
    {
      id: 'nascar-cup-2026-r10',
      round: 10,
      name: 'AdventHealth 400',
      circuit: { name: 'Kansas Speedway', city: 'Kansas City', country: 'United States', countryCode: 'US', timezone: 'America/Chicago' },
      sessions: [
        fp1('2026-05-01T19:00:00Z'),
        quali('2026-05-01T22:00:00Z'),
        race('2026-05-03T18:00:00Z', 180, 'AdventHealth 400'),
      ],
    },
    {
      id: 'nascar-cup-2026-r11',
      round: 11,
      name: 'Wurth 400',
      circuit: { name: 'Dover Motor Speedway', city: 'Dover', country: 'United States', countryCode: 'US', timezone: 'America/New_York' },
      sessions: [
        fp1('2026-05-08T19:00:00Z'),
        quali('2026-05-08T22:00:00Z'),
        race('2026-05-10T18:00:00Z', 180, 'Wurth 400'),
      ],
    },
    {
      id: 'nascar-cup-2026-r12',
      round: 12,
      name: 'Goodyear 400',
      circuit: { name: 'Darlington Raceway', city: 'Darlington', country: 'United States', countryCode: 'US', timezone: 'America/New_York' },
      sessions: [
        fp1('2026-05-15T19:00:00Z'),
        quali('2026-05-15T22:00:00Z'),
        race('2026-05-17T18:00:00Z', 180, 'Goodyear 400'),
      ],
    },
    {
      id: 'nascar-cup-2026-r13',
      round: 13,
      name: 'Coca-Cola 600',
      circuit: { name: 'Charlotte Motor Speedway', city: 'Concord', country: 'United States', countryCode: 'US', timezone: 'America/New_York' },
      sessions: [
        fp1('2026-05-22T19:00:00Z'),
        quali('2026-05-22T22:00:00Z'),
        race('2026-05-24T21:00:00Z', 240, 'Coca-Cola 600'),
      ],
    },
    {
      id: 'nascar-cup-2026-r14',
      round: 14,
      name: 'Ally 400',
      circuit: { name: 'Nashville Superspeedway', city: 'Lebanon', country: 'United States', countryCode: 'US', timezone: 'America/Chicago' },
      sessions: [
        fp1('2026-06-05T20:00:00Z'),
        quali('2026-06-05T23:00:00Z'),
        race('2026-06-07T19:30:00Z', 180, 'Ally 400 — Nashville'),
      ],
    },
    {
      id: 'nascar-cup-2026-r15',
      round: 15,
      name: 'Iowa Corn 350',
      circuit: { name: 'Iowa Speedway', city: 'Newton', country: 'United States', countryCode: 'US', timezone: 'America/Chicago' },
      sessions: [
        fp1('2026-06-12T19:00:00Z'),
        quali('2026-06-12T22:00:00Z'),
        race('2026-06-14T19:00:00Z', 150, 'Iowa Corn 350'),
      ],
    },
    {
      id: 'nascar-cup-2026-r16',
      round: 16,
      name: 'Xcel Energy 300',
      circuit: { name: 'World Wide Technology Raceway', city: 'Madison', country: 'United States', countryCode: 'US', timezone: 'America/Chicago' },
      sessions: [
        fp1('2026-06-19T19:00:00Z'),
        quali('2026-06-19T22:00:00Z'),
        race('2026-06-21T18:00:00Z', 180, 'Xcel Energy 300 — Gateway'),
      ],
    },
    {
      id: 'nascar-cup-2026-r17',
      round: 17,
      name: 'Enjoy Illinois 300',
      circuit: { name: 'World Wide Technology Raceway', city: 'Madison', country: 'United States', countryCode: 'US', timezone: 'America/Chicago' },
      sessions: [
        fp1('2026-06-26T19:00:00Z'),
        quali('2026-06-26T22:00:00Z'),
        race('2026-06-28T18:00:00Z', 150, 'Enjoy Illinois 300'),
      ],
    },
    {
      id: 'nascar-cup-2026-r18',
      round: 18,
      name: 'Grant Park 165',
      circuit: { name: 'Chicago Street Circuit', city: 'Chicago', country: 'United States', countryCode: 'US', timezone: 'America/Chicago' },
      sessions: [
        fp1('2026-07-03T18:00:00Z'),
        quali('2026-07-03T21:00:00Z'),
        race('2026-07-05T17:30:00Z', 120, 'Grant Park 165'),
      ],
    },
    {
      id: 'nascar-cup-2026-r19',
      round: 19,
      name: 'Quaker State 400',
      circuit: { name: 'Atlanta Motor Speedway', city: 'Hampton', country: 'United States', countryCode: 'US', timezone: 'America/New_York' },
      sessions: [
        fp1('2026-07-10T19:00:00Z'),
        quali('2026-07-10T22:00:00Z'),
        race('2026-07-12T19:30:00Z', 180, 'Quaker State 400'),
      ],
    },
    {
      id: 'nascar-cup-2026-r20',
      round: 20,
      name: 'New Hampshire 301',
      circuit: { name: 'New Hampshire Motor Speedway', city: 'Loudon', country: 'United States', countryCode: 'US', timezone: 'America/New_York' },
      sessions: [
        fp1('2026-07-17T18:00:00Z'),
        quali('2026-07-17T21:00:00Z'),
        race('2026-07-19T18:00:00Z', 180, 'New Hampshire 301'),
      ],
    },
    {
      id: 'nascar-cup-2026-r21',
      round: 21,
      name: 'HighPoint.com 400',
      circuit: { name: 'Pocono Raceway', city: 'Long Pond', country: 'United States', countryCode: 'US', timezone: 'America/New_York' },
      sessions: [
        fp1('2026-07-24T18:00:00Z'),
        quali('2026-07-24T21:00:00Z'),
        race('2026-07-26T18:00:00Z', 150, 'HighPoint.com 400'),
      ],
    },
    {
      id: 'nascar-cup-2026-r22',
      round: 22,
      name: 'FireKeepers Casino 400',
      circuit: { name: 'Michigan International Speedway', city: 'Brooklyn', country: 'United States', countryCode: 'US', timezone: 'America/New_York' },
      sessions: [
        fp1('2026-07-31T18:00:00Z'),
        quali('2026-07-31T21:00:00Z'),
        race('2026-08-02T18:00:00Z', 150, 'FireKeepers 400'),
      ],
    },
    {
      id: 'nascar-cup-2026-r23',
      round: 23,
      name: 'Go Bowling at The Glen',
      circuit: { name: 'Watkins Glen International', city: 'Watkins Glen', country: 'United States', countryCode: 'US', timezone: 'America/New_York' },
      sessions: [
        fp1('2026-08-07T18:00:00Z'),
        quali('2026-08-07T21:00:00Z'),
        race('2026-08-09T18:00:00Z', 150, 'Go Bowling at The Glen'),
      ],
    },
    {
      id: 'nascar-cup-2026-r24',
      round: 24,
      name: 'Pacific Office Automation 147',
      circuit: { name: 'Portland International Raceway', city: 'Portland', country: 'United States', countryCode: 'US', timezone: 'America/Los_Angeles' },
      sessions: [
        fp1('2026-08-14T20:00:00Z'),
        quali('2026-08-14T23:00:00Z'),
        race('2026-08-16T20:00:00Z', 120, 'Portland 147'),
      ],
    },
    {
      id: 'nascar-cup-2026-r25',
      round: 25,
      name: 'Cook Out Southern 500',
      circuit: { name: 'Darlington Raceway', city: 'Darlington', country: 'United States', countryCode: 'US', timezone: 'America/New_York' },
      sessions: [
        fp1('2026-08-28T22:00:00Z'),
        quali('2026-08-29T00:30:00Z'),
        race('2026-08-30T23:00:00Z', 240, 'Cook Out Southern 500'),
      ],
    },
    {
      id: 'nascar-cup-2026-r26',
      round: 26,
      name: 'Toyota / Save Mart 350',
      circuit: { name: 'Sonoma Raceway', city: 'Sonoma', country: 'United States', countryCode: 'US', timezone: 'America/Los_Angeles' },
      sessions: [
        fp1('2026-09-04T20:00:00Z'),
        quali('2026-09-04T23:00:00Z'),
        race('2026-09-06T20:00:00Z', 150, 'Toyota 350 — Sonoma'),
      ],
    },
    {
      id: 'nascar-cup-2026-r27',
      round: 27,
      name: 'Federated Auto Parts 400',
      circuit: { name: 'Richmond Raceway', city: 'Richmond', country: 'United States', countryCode: 'US', timezone: 'America/New_York' },
      sessions: [
        fp1('2026-09-11T18:00:00Z'),
        quali('2026-09-11T21:00:00Z'),
        race('2026-09-13T19:30:00Z', 150, 'Federated 400 — Richmond'),
      ],
    },
    {
      id: 'nascar-cup-2026-r28',
      round: 28,
      name: 'Bass Pro Shops Night Race',
      circuit: { name: 'Bristol Motor Speedway', city: 'Bristol', country: 'United States', countryCode: 'US', timezone: 'America/New_York' },
      sessions: [
        fp1('2026-09-18T22:00:00Z'),
        quali('2026-09-18T23:00:00Z'),
        race('2026-09-20T00:00:00Z', 180, 'Bass Pro Night Race — Bristol'),
      ],
    },
    {
      id: 'nascar-cup-2026-r29',
      round: 29,
      name: 'South Point 400',
      circuit: { name: 'Las Vegas Motor Speedway', city: 'Las Vegas', country: 'United States', countryCode: 'US', timezone: 'America/Los_Angeles' },
      sessions: [
        fp1('2026-09-25T22:00:00Z'),
        quali('2026-09-26T00:30:00Z'),
        race('2026-09-27T22:00:00Z', 180, 'South Point 400'),
      ],
    },
    {
      id: 'nascar-cup-2026-r30',
      round: 30,
      name: 'Autotrader EchoPark Automotive 400',
      circuit: { name: 'Texas Motor Speedway', city: 'Fort Worth', country: 'United States', countryCode: 'US', timezone: 'America/Chicago' },
      sessions: [
        fp1('2026-10-02T19:00:00Z'),
        quali('2026-10-02T22:00:00Z'),
        race('2026-10-04T19:30:00Z', 180, 'Autotrader 400 — Texas'),
      ],
    },
  ],
}

