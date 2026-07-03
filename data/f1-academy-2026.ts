import type { Championship } from '@/types'

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
      id: 'f1-academy-2026-r01',
      round: 1,
      name: 'F1 Academy — Miami',
      circuit: { name: 'Miami International Autodrome', city: 'Miami', country: 'United States', countryCode: 'US', timezone: 'America/New_York' },
      sessions: [
        { type: 'fp1', label: 'Practice', start: '2026-05-01T15:30:00Z', durationMinutes: 30 },
        { type: 'race', label: 'Race 1', start: '2026-05-02T15:00:00Z', durationMinutes: 30 },
        { type: 'race', label: 'Race 2', start: '2026-05-03T15:00:00Z', durationMinutes: 30 },
      ],
    },
    {
      id: 'f1-academy-2026-r02',
      round: 2,
      name: 'F1 Academy — Monaco',
      circuit: { name: 'Circuit de Monaco', city: 'Monte Carlo', country: 'Monaco', countryCode: 'MC', timezone: 'Europe/Monaco' },
      sessions: [
        { type: 'fp1', label: 'Practice', start: '2026-05-22T09:30:00Z', durationMinutes: 30 },
        { type: 'race', label: 'Race 1', start: '2026-05-23T09:30:00Z', durationMinutes: 30 },
        { type: 'race', label: 'Race 2', start: '2026-05-24T09:30:00Z', durationMinutes: 30 },
      ],
    },
    {
      id: 'f1-academy-2026-r03',
      round: 3,
      name: 'F1 Academy — Spain',
      circuit: { name: 'Circuit de Barcelona-Catalunya', city: 'Montmeló', country: 'Spain', countryCode: 'ES', timezone: 'Europe/Madrid' },
      sessions: [
        { type: 'fp1', label: 'Practice', start: '2026-06-05T09:30:00Z', durationMinutes: 30 },
        { type: 'race', label: 'Race 1', start: '2026-06-06T09:30:00Z', durationMinutes: 30 },
        { type: 'race', label: 'Race 2', start: '2026-06-07T09:30:00Z', durationMinutes: 30 },
      ],
    },
    {
      id: 'f1-academy-2026-r04',
      round: 4,
      name: 'F1 Academy — Great Britain',
      circuit: { name: 'Silverstone Circuit', city: 'Silverstone', country: 'Great Britain', countryCode: 'GB', timezone: 'Europe/London' },
      sessions: [
        { type: 'fp1', label: 'Practice', start: '2026-07-17T10:30:00Z', durationMinutes: 30 },
        { type: 'race', label: 'Race 1', start: '2026-07-18T10:30:00Z', durationMinutes: 30 },
        { type: 'race', label: 'Race 2', start: '2026-07-19T10:30:00Z', durationMinutes: 30 },
      ],
    },
    {
      id: 'f1-academy-2026-r05',
      round: 5,
      name: 'F1 Academy — Hungary',
      circuit: { name: 'Hungaroring', city: 'Budapest', country: 'Hungary', countryCode: 'HU', timezone: 'Europe/Budapest' },
      sessions: [
        { type: 'fp1', label: 'Practice', start: '2026-07-31T09:30:00Z', durationMinutes: 30 },
        { type: 'race', label: 'Race 1', start: '2026-08-01T09:30:00Z', durationMinutes: 30 },
        { type: 'race', label: 'Race 2', start: '2026-08-02T09:30:00Z', durationMinutes: 30 },
      ],
    },
    {
      id: 'f1-academy-2026-r06',
      round: 6,
      name: 'F1 Academy — Netherlands',
      circuit: { name: 'Circuit Zandvoort', city: 'Zandvoort', country: 'Netherlands', countryCode: 'NL', timezone: 'Europe/Amsterdam' },
      sessions: [
        { type: 'fp1', label: 'Practice', start: '2026-09-04T09:30:00Z', durationMinutes: 30 },
        { type: 'race', label: 'Race 1', start: '2026-09-05T09:30:00Z', durationMinutes: 30 },
        { type: 'race', label: 'Race 2', start: '2026-09-06T09:30:00Z', durationMinutes: 30 },
      ],
    },
    {
      id: 'f1-academy-2026-r07',
      round: 7,
      name: 'F1 Academy — Singapore',
      circuit: { name: 'Marina Bay Street Circuit', city: 'Singapore', country: 'Singapore', countryCode: 'SG', timezone: 'Asia/Singapore' },
      sessions: [
        { type: 'fp1', label: 'Practice', start: '2026-10-02T03:30:00Z', durationMinutes: 30 },
        { type: 'race', label: 'Race 1', start: '2026-10-03T03:30:00Z', durationMinutes: 30 },
        { type: 'race', label: 'Race 2', start: '2026-10-04T03:30:00Z', durationMinutes: 30 },
      ],
    },
    {
      id: 'f1-academy-2026-r08',
      round: 8,
      name: 'F1 Academy — Abu Dhabi',
      circuit: { name: 'Yas Marina Circuit', city: 'Abu Dhabi', country: 'United Arab Emirates', countryCode: 'AE', timezone: 'Asia/Dubai' },
      sessions: [
        { type: 'fp1', label: 'Practice', start: '2026-12-04T07:30:00Z', durationMinutes: 30 },
        { type: 'race', label: 'Race 1', start: '2026-12-05T07:30:00Z', durationMinutes: 30 },
        { type: 'race', label: 'Race 2', start: '2026-12-06T07:30:00Z', durationMinutes: 30 },
      ],
    },
  ],
}
