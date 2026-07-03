import type { Championship } from '@/types'

export const SUPER_FORMULA_2026: Championship = {
  id: 'super-formula',
  name: 'Super Formula',
  shortName: 'SF',
  vehicleType: 'car',
  category: 'formula',
  color: '#E31C31',
  textColor: '#FFFFFF',
  season: 2026,
  broadcasts: {
    GLOBAL: [
      { channel: 'Super Formula YouTube', type: 'free-streaming', url: 'https://www.youtube.com/@SuperFormula_official', isYoutube: true },
    ],
    JP: [
      { channel: 'J Sports', type: 'cable-tv' },
    ],
  },
  events: [
    {
      id: 'super-formula-2026-r01',
      round: 1,
      name: 'Rd. 1 — Suzuka',
      circuit: {
        name: 'Suzuka International Racing Course',
        city: 'Suzuka',
        country: 'Japan',
        countryCode: 'JP',
        timezone: 'Asia/Tokyo',
      },
      sessions: [
        { type: 'fp1', label: 'Practice', start: '2026-04-04T01:00:00Z', durationMinutes: 60 },
        { type: 'quali', label: 'Qualifying', start: '2026-04-04T05:00:00Z', durationMinutes: 30 },
        { type: 'race', label: 'Race', start: '2026-04-05T04:00:00Z', durationMinutes: 90 },
      ],
    },
    {
      id: 'super-formula-2026-r02',
      round: 2,
      name: 'Rd. 2 — Fuji',
      circuit: {
        name: 'Fuji Speedway',
        city: 'Oyama',
        country: 'Japan',
        countryCode: 'JP',
        timezone: 'Asia/Tokyo',
      },
      sessions: [
        { type: 'fp1', label: 'Practice', start: '2026-05-02T01:00:00Z', durationMinutes: 60 },
        { type: 'quali', label: 'Qualifying', start: '2026-05-02T05:00:00Z', durationMinutes: 30 },
        { type: 'race', label: 'Race', start: '2026-05-03T04:00:00Z', durationMinutes: 90 },
      ],
    },
    {
      id: 'super-formula-2026-r03',
      round: 3,
      name: 'Rd. 3 — Autopolis',
      circuit: {
        name: 'Autopolis International Racing Course',
        city: 'Kamitsue',
        country: 'Japan',
        countryCode: 'JP',
        timezone: 'Asia/Tokyo',
      },
      sessions: [
        { type: 'fp1', label: 'Practice', start: '2026-05-23T01:00:00Z', durationMinutes: 60 },
        { type: 'quali', label: 'Qualifying', start: '2026-05-23T05:00:00Z', durationMinutes: 30 },
        { type: 'race', label: 'Race', start: '2026-05-24T04:00:00Z', durationMinutes: 90 },
      ],
    },
    {
      id: 'super-formula-2026-r04',
      round: 4,
      name: 'Rd. 4 — Sapporo/Hokkaido',
      circuit: {
        name: 'Hokkaido Automobile Racing Club (HARC)',
        city: 'Sapporo',
        country: 'Japan',
        countryCode: 'JP',
        timezone: 'Asia/Tokyo',
      },
      sessions: [
        { type: 'fp1', label: 'Practice', start: '2026-07-11T01:00:00Z', durationMinutes: 60 },
        { type: 'quali', label: 'Qualifying', start: '2026-07-11T05:00:00Z', durationMinutes: 30 },
        { type: 'race', label: 'Race', start: '2026-07-12T03:00:00Z', durationMinutes: 90 },
      ],
    },
    {
      id: 'super-formula-2026-r05',
      round: 5,
      name: 'Rd. 5 — Sugo',
      circuit: {
        name: 'Sportsland Sugo',
        city: 'Murata',
        country: 'Japan',
        countryCode: 'JP',
        timezone: 'Asia/Tokyo',
      },
      sessions: [
        { type: 'fp1', label: 'Practice', start: '2026-08-01T01:00:00Z', durationMinutes: 60 },
        { type: 'quali', label: 'Qualifying', start: '2026-08-01T05:00:00Z', durationMinutes: 30 },
        { type: 'race', label: 'Race', start: '2026-08-02T03:00:00Z', durationMinutes: 90 },
      ],
    },
    {
      id: 'super-formula-2026-r06',
      round: 6,
      name: 'Rd. 6 — Fuji',
      circuit: {
        name: 'Fuji Speedway',
        city: 'Oyama',
        country: 'Japan',
        countryCode: 'JP',
        timezone: 'Asia/Tokyo',
      },
      sessions: [
        { type: 'fp1', label: 'Practice', start: '2026-09-05T01:00:00Z', durationMinutes: 60 },
        { type: 'quali', label: 'Qualifying', start: '2026-09-05T05:00:00Z', durationMinutes: 30 },
        { type: 'race', label: 'Race', start: '2026-09-06T04:00:00Z', durationMinutes: 90 },
      ],
    },
    {
      id: 'super-formula-2026-r07',
      round: 7,
      name: 'Rd. 7 — Suzuka',
      circuit: {
        name: 'Suzuka International Racing Course',
        city: 'Suzuka',
        country: 'Japan',
        countryCode: 'JP',
        timezone: 'Asia/Tokyo',
      },
      sessions: [
        { type: 'fp1', label: 'Practice', start: '2026-10-03T01:00:00Z', durationMinutes: 60 },
        { type: 'quali', label: 'Qualifying', start: '2026-10-03T05:00:00Z', durationMinutes: 30 },
        { type: 'race', label: 'Race', start: '2026-10-04T04:00:00Z', durationMinutes: 90 },
      ],
    },
    {
      id: 'super-formula-2026-r08',
      round: 8,
      name: 'Rd. 8 — Motegi (Finale)',
      circuit: {
        name: 'Twin Ring Motegi',
        city: 'Motegi',
        country: 'Japan',
        countryCode: 'JP',
        timezone: 'Asia/Tokyo',
      },
      sessions: [
        { type: 'fp1', label: 'Practice', start: '2026-11-07T02:00:00Z', durationMinutes: 60 },
        { type: 'quali', label: 'Qualifying', start: '2026-11-07T06:00:00Z', durationMinutes: 30 },
        { type: 'race', label: 'Race', start: '2026-11-08T05:00:00Z', durationMinutes: 90 },
      ],
    },
  ],
}

