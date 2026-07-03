import type { Championship } from '@/types'

export const F3_2026: Championship = {
  id: 'f3',
  name: 'Formula 3',
  shortName: 'F3',
  vehicleType: 'car',
  category: 'formula',
  color: '#00CFE8',
  textColor: '#000000',
  season: 2026,
  broadcasts: {
    BR: [
      { channel: 'F1 TV', type: 'paid-streaming', url: 'https://f1tv.formula1.com' },
      { channel: 'Band', type: 'free-tv', note: 'Selected rounds' },
    ],
    US: [
      { channel: 'F1 TV', type: 'paid-streaming', url: 'https://f1tv.formula1.com' },
      { channel: 'ESPN', type: 'cable-tv' },
    ],
    UK: [
      { channel: 'Sky Sports F1', type: 'cable-tv' },
      { channel: 'F1 TV', type: 'paid-streaming', url: 'https://f1tv.formula1.com' },
    ],
    GLOBAL: [
      { channel: 'F1 TV', type: 'paid-streaming', url: 'https://f1tv.formula1.com' },
    ],
  },
  events: [
    {
      id: 'f3-2026-r01',
      round: 1,
      name: 'Formula 3 — Bahrain',
      circuit: { name: 'Bahrain International Circuit', city: 'Sakhir', country: 'Bahrain', countryCode: 'BH', timezone: 'Asia/Bahrain' },
      sessions: [
        { type: 'fp1', label: 'Practice', start: '2026-03-06T07:30:00Z', durationMinutes: 30 },
        { type: 'quali', label: 'Qualifying', start: '2026-03-06T12:30:00Z', durationMinutes: 30 },
        { type: 'race', label: 'Race 1', start: '2026-03-07T07:30:00Z', durationMinutes: 30 },
        { type: 'race', label: 'Race 2', start: '2026-03-08T05:30:00Z', durationMinutes: 30 },
      ],
    },
    {
      id: 'f3-2026-r02',
      round: 2,
      name: 'Formula 3 — Australia',
      circuit: { name: 'Albert Park Circuit', city: 'Melbourne', country: 'Australia', countryCode: 'AU', timezone: 'Australia/Melbourne' },
      sessions: [
        { type: 'fp1', label: 'Practice', start: '2026-04-02T23:30:00Z', durationMinutes: 30 },
        { type: 'quali', label: 'Qualifying', start: '2026-04-03T03:30:00Z', durationMinutes: 30 },
        { type: 'race', label: 'Race 1', start: '2026-04-03T23:30:00Z', durationMinutes: 30 },
        { type: 'race', label: 'Race 2', start: '2026-04-04T21:30:00Z', durationMinutes: 30 },
      ],
    },
    {
      id: 'f3-2026-r03',
      round: 3,
      name: 'Formula 3 — Monaco',
      circuit: { name: 'Circuit de Monaco', city: 'Monte Carlo', country: 'Monaco', countryCode: 'MC', timezone: 'Europe/Monaco' },
      sessions: [
        { type: 'fp1', label: 'Practice', start: '2026-05-22T08:30:00Z', durationMinutes: 30 },
        { type: 'quali', label: 'Qualifying', start: '2026-05-22T12:30:00Z', durationMinutes: 30 },
        { type: 'race', label: 'Race 1', start: '2026-05-23T08:30:00Z', durationMinutes: 30 },
        { type: 'race', label: 'Race 2', start: '2026-05-24T06:30:00Z', durationMinutes: 30 },
      ],
    },
    {
      id: 'f3-2026-r04',
      round: 4,
      name: 'Formula 3 — Spain',
      circuit: { name: 'Circuit de Barcelona-Catalunya', city: 'Montmeló', country: 'Spain', countryCode: 'ES', timezone: 'Europe/Madrid' },
      sessions: [
        { type: 'fp1', label: 'Practice', start: '2026-06-05T08:30:00Z', durationMinutes: 30 },
        { type: 'quali', label: 'Qualifying', start: '2026-06-05T12:30:00Z', durationMinutes: 30 },
        { type: 'race', label: 'Race 1', start: '2026-06-06T08:30:00Z', durationMinutes: 30 },
        { type: 'race', label: 'Race 2', start: '2026-06-07T06:30:00Z', durationMinutes: 30 },
      ],
    },
    {
      id: 'f3-2026-r05',
      round: 5,
      name: 'Formula 3 — Great Britain',
      circuit: { name: 'Silverstone Circuit', city: 'Silverstone', country: 'Great Britain', countryCode: 'GB', timezone: 'Europe/London' },
      sessions: [
        { type: 'fp1', label: 'Practice', start: '2026-07-17T09:30:00Z', durationMinutes: 30 },
        { type: 'quali', label: 'Qualifying', start: '2026-07-17T13:30:00Z', durationMinutes: 30 },
        { type: 'race', label: 'Race 1', start: '2026-07-18T09:30:00Z', durationMinutes: 30 },
        { type: 'race', label: 'Race 2', start: '2026-07-19T07:30:00Z', durationMinutes: 30 },
      ],
    },
    {
      id: 'f3-2026-r06',
      round: 6,
      name: 'Formula 3 — Hungary',
      circuit: { name: 'Hungaroring', city: 'Budapest', country: 'Hungary', countryCode: 'HU', timezone: 'Europe/Budapest' },
      sessions: [
        { type: 'fp1', label: 'Practice', start: '2026-07-31T08:30:00Z', durationMinutes: 30 },
        { type: 'quali', label: 'Qualifying', start: '2026-07-31T12:30:00Z', durationMinutes: 30 },
        { type: 'race', label: 'Race 1', start: '2026-08-01T08:30:00Z', durationMinutes: 30 },
        { type: 'race', label: 'Race 2', start: '2026-08-02T06:30:00Z', durationMinutes: 30 },
      ],
    },
    {
      id: 'f3-2026-r07',
      round: 7,
      name: 'Formula 3 — Belgium',
      circuit: { name: 'Circuit de Spa-Francorchamps', city: 'Stavelot', country: 'Belgium', countryCode: 'BE', timezone: 'Europe/Brussels' },
      sessions: [
        { type: 'fp1', label: 'Practice', start: '2026-08-28T08:30:00Z', durationMinutes: 30 },
        { type: 'quali', label: 'Qualifying', start: '2026-08-28T12:30:00Z', durationMinutes: 30 },
        { type: 'race', label: 'Race 1', start: '2026-08-29T08:30:00Z', durationMinutes: 30 },
        { type: 'race', label: 'Race 2', start: '2026-08-30T06:30:00Z', durationMinutes: 30 },
      ],
    },
    {
      id: 'f3-2026-r08',
      round: 8,
      name: 'Formula 3 — Netherlands',
      circuit: { name: 'Circuit Zandvoort', city: 'Zandvoort', country: 'Netherlands', countryCode: 'NL', timezone: 'Europe/Amsterdam' },
      sessions: [
        { type: 'fp1', label: 'Practice', start: '2026-09-04T08:30:00Z', durationMinutes: 30 },
        { type: 'quali', label: 'Qualifying', start: '2026-09-04T12:30:00Z', durationMinutes: 30 },
        { type: 'race', label: 'Race 1', start: '2026-09-05T08:30:00Z', durationMinutes: 30 },
        { type: 'race', label: 'Race 2', start: '2026-09-06T06:30:00Z', durationMinutes: 30 },
      ],
    },
    {
      id: 'f3-2026-r09',
      round: 9,
      name: 'Formula 3 — Italy',
      circuit: { name: 'Autodromo Nazionale Monza', city: 'Monza', country: 'Italy', countryCode: 'IT', timezone: 'Europe/Rome' },
      sessions: [
        { type: 'fp1', label: 'Practice', start: '2026-09-11T08:30:00Z', durationMinutes: 30 },
        { type: 'quali', label: 'Qualifying', start: '2026-09-11T12:30:00Z', durationMinutes: 30 },
        { type: 'race', label: 'Race 1', start: '2026-09-12T08:30:00Z', durationMinutes: 30 },
        { type: 'race', label: 'Race 2', start: '2026-09-13T06:30:00Z', durationMinutes: 30 },
      ],
    },
    {
      id: 'f3-2026-r10',
      round: 10,
      name: 'Formula 3 — Singapore',
      circuit: { name: 'Marina Bay Street Circuit', city: 'Singapore', country: 'Singapore', countryCode: 'SG', timezone: 'Asia/Singapore' },
      sessions: [
        { type: 'fp1', label: 'Practice', start: '2026-10-02T02:30:00Z', durationMinutes: 30 },
        { type: 'quali', label: 'Qualifying', start: '2026-10-02T06:30:00Z', durationMinutes: 30 },
        { type: 'race', label: 'Race 1', start: '2026-10-03T02:30:00Z', durationMinutes: 30 },
        { type: 'race', label: 'Race 2', start: '2026-10-04T00:30:00Z', durationMinutes: 30 },
      ],
    },
    {
      id: 'f3-2026-r11',
      round: 11,
      name: 'Formula 3 — Abu Dhabi',
      circuit: { name: 'Yas Marina Circuit', city: 'Abu Dhabi', country: 'United Arab Emirates', countryCode: 'AE', timezone: 'Asia/Dubai' },
      sessions: [
        { type: 'fp1', label: 'Practice', start: '2026-12-04T06:30:00Z', durationMinutes: 30 },
        { type: 'quali', label: 'Qualifying', start: '2026-12-04T10:30:00Z', durationMinutes: 30 },
        { type: 'race', label: 'Race 1', start: '2026-12-05T06:30:00Z', durationMinutes: 30 },
        { type: 'race', label: 'Race 2', start: '2026-12-06T04:30:00Z', durationMinutes: 30 },
      ],
    },
  ],
}
