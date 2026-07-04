import type { Session, Championship } from '@/types'

const practice = (start: string): Session => ({ type: 'fp1', label: 'Practice', start, durationMinutes: 45 })
const quali = (start: string): Session => ({ type: 'quali', label: 'Qualifying', start, durationMinutes: 30 })
const sprint = (start: string): Session => ({ type: 'sprint', label: 'Sprint Race', start, durationMinutes: 40 })
const feature = (start: string): Session => ({ type: 'race', label: 'Feature Race', start, durationMinutes: 45 })

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
      name: 'Formula 3 — Australia',
      circuit: { name: 'Albert Park Circuit', city: 'Melbourne', country: 'Australia', countryCode: 'AU', timezone: 'Australia/Melbourne' },
      sessions: [
        practice('2026-03-05T23:00:00Z'),
        quali('2026-03-06T03:00:00Z'),
        sprint('2026-03-06T23:00:00Z'),
        feature('2026-03-07T23:00:00Z'),
      ],
    },
    {
      id: 'f3-2026-r02',
      round: 2,
      name: 'Formula 3 — Monaco',
      circuit: { name: 'Circuit de Monaco', city: 'Monte Carlo', country: 'Monaco', countryCode: 'MC', timezone: 'Europe/Monaco' },
      sessions: [
        practice('2026-06-05T08:00:00Z'),
        quali('2026-06-05T12:00:00Z'),
        sprint('2026-06-06T08:00:00Z'),
        feature('2026-06-07T08:00:00Z'),
      ],
    },
    {
      id: 'f3-2026-r03',
      round: 3,
      name: 'Formula 3 — Spain',
      circuit: { name: 'Circuit de Barcelona-Catalunya', city: 'Montmeló', country: 'Spain', countryCode: 'ES', timezone: 'Europe/Madrid' },
      sessions: [
        practice('2026-06-12T08:00:00Z'),
        quali('2026-06-12T12:00:00Z'),
        sprint('2026-06-13T08:00:00Z'),
        feature('2026-06-14T08:00:00Z'),
      ],
    },
    {
      id: 'f3-2026-r04',
      round: 4,
      name: 'Formula 3 — Austria',
      circuit: { name: 'Red Bull Ring', city: 'Spielberg', country: 'Austria', countryCode: 'AT', timezone: 'Europe/Vienna' },
      sessions: [
        practice('2026-06-26T08:00:00Z'),
        quali('2026-06-26T12:00:00Z'),
        sprint('2026-06-27T08:00:00Z'),
        feature('2026-06-28T08:00:00Z'),
      ],
    },
    {
      id: 'f3-2026-r05',
      round: 5,
      name: 'Formula 3 — Great Britain',
      circuit: { name: 'Silverstone Circuit', city: 'Silverstone', country: 'Great Britain', countryCode: 'GB', timezone: 'Europe/London' },
      sessions: [
        practice('2026-07-03T09:00:00Z'),
        quali('2026-07-03T13:00:00Z'),
        sprint('2026-07-04T09:00:00Z'),
        feature('2026-07-05T09:00:00Z'),
      ],
    },
    {
      id: 'f3-2026-r06',
      round: 6,
      name: 'Formula 3 — Belgium',
      circuit: { name: 'Circuit de Spa-Francorchamps', city: 'Stavelot', country: 'Belgium', countryCode: 'BE', timezone: 'Europe/Brussels' },
      sessions: [
        practice('2026-07-17T08:00:00Z'),
        quali('2026-07-17T12:00:00Z'),
        sprint('2026-07-18T08:00:00Z'),
        feature('2026-07-19T08:00:00Z'),
      ],
    },
    {
      id: 'f3-2026-r07',
      round: 7,
      name: 'Formula 3 — Hungary',
      circuit: { name: 'Hungaroring', city: 'Budapest', country: 'Hungary', countryCode: 'HU', timezone: 'Europe/Budapest' },
      sessions: [
        practice('2026-07-24T08:00:00Z'),
        quali('2026-07-24T12:00:00Z'),
        sprint('2026-07-25T08:00:00Z'),
        feature('2026-07-26T08:00:00Z'),
      ],
    },
    {
      id: 'f3-2026-r08',
      round: 8,
      name: 'Formula 3 — Italy',
      circuit: { name: 'Autodromo Nazionale Monza', city: 'Monza', country: 'Italy', countryCode: 'IT', timezone: 'Europe/Rome' },
      sessions: [
        practice('2026-09-04T08:00:00Z'),
        quali('2026-09-04T12:00:00Z'),
        sprint('2026-09-05T08:00:00Z'),
        feature('2026-09-06T08:00:00Z'),
      ],
    },
    {
      id: 'f3-2026-r09',
      round: 9,
      name: 'Formula 3 — Spain/Madrid',
      circuit: { name: 'Madring', city: 'Madrid', country: 'Spain', countryCode: 'ES', timezone: 'Europe/Madrid' },
      sessions: [
        practice('2026-09-11T08:00:00Z'),
        quali('2026-09-11T12:00:00Z'),
        sprint('2026-09-12T08:00:00Z'),
        feature('2026-09-13T08:00:00Z'),
      ],
    },
  ],
}
