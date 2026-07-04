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
        practice('2026-03-05T22:00:00Z'),     // Fri 09:00 AEDT
        quali('2026-03-06T03:00:00Z'),         // Fri 14:00 AEDT
        sprint('2026-03-07T02:00:00Z'),        // Sat 13:00 AEDT
        feature('2026-03-07T21:00:00Z'),       // Sun 08:00 AEDT
      ],
    },
    {
      id: 'f3-2026-r02',
      round: 2,
      name: 'Formula 3 — Monaco',
      circuit: { name: 'Circuit de Monaco', city: 'Monte Carlo', country: 'Monaco', countryCode: 'MC', timezone: 'Europe/Monaco' },
      sessions: [
        practice('2026-06-05T07:55:00Z'),     // Fri 09:55 CEST (estimated)
        quali('2026-06-05T13:00:00Z'),         // Fri 15:00 CEST (estimated)
        sprint('2026-06-06T08:05:00Z'),        // Sat 10:05 CEST (estimated)
        feature('2026-06-07T06:40:00Z'),       // Sun 08:40 CEST (estimated)
      ],
    },
    {
      id: 'f3-2026-r03',
      round: 3,
      name: 'Formula 3 — Spain',
      circuit: { name: 'Circuit de Barcelona-Catalunya', city: 'Montmeló', country: 'Spain', countryCode: 'ES', timezone: 'Europe/Madrid' },
      sessions: [
        practice('2026-06-12T07:55:00Z'),     // Fri 09:55 CEST (estimated)
        quali('2026-06-12T13:00:00Z'),         // Fri 15:00 CEST (estimated)
        sprint('2026-06-13T08:05:00Z'),        // Sat 10:05 CEST (estimated)
        feature('2026-06-14T06:40:00Z'),       // Sun 08:40 CEST (estimated)
      ],
    },
    {
      id: 'f3-2026-r04',
      round: 4,
      name: 'Formula 3 — Austria',
      circuit: { name: 'Red Bull Ring', city: 'Spielberg', country: 'Austria', countryCode: 'AT', timezone: 'Europe/Vienna' },
      sessions: [
        practice('2026-06-26T07:55:00Z'),     // Fri 09:55 CEST ✓ official
        quali('2026-06-26T13:00:00Z'),         // Fri 15:00 CEST ✓ official
        sprint('2026-06-27T08:05:00Z'),        // Sat 10:05 CEST ✓ official
        feature('2026-06-28T06:40:00Z'),       // Sun 08:40 CEST ✓ official
      ],
    },
    {
      id: 'f3-2026-r05',
      round: 5,
      name: 'Formula 3 — Great Britain',
      circuit: { name: 'Silverstone Circuit', city: 'Silverstone', country: 'Great Britain', countryCode: 'GB', timezone: 'Europe/London' },
      sessions: [
        practice('2026-07-03T07:50:00Z'),     // Fri 08:50 BST ✓ official
        quali('2026-07-03T13:00:00Z'),         // Fri 14:00 BST ✓ official
        sprint('2026-07-04T08:35:00Z'),        // Sat 09:35 BST ✓ official
        feature('2026-07-05T07:25:00Z'),       // Sun 08:25 BST ✓ official
      ],
    },
    {
      id: 'f3-2026-r06',
      round: 6,
      name: 'Formula 3 — Belgium',
      circuit: { name: 'Circuit de Spa-Francorchamps', city: 'Stavelot', country: 'Belgium', countryCode: 'BE', timezone: 'Europe/Brussels' },
      sessions: [
        practice('2026-07-17T07:55:00Z'),     // Fri 09:55 CEST ✓ official
        quali('2026-07-17T13:00:00Z'),         // Fri 15:00 CEST ✓ official
        sprint('2026-07-18T08:00:00Z'),        // Sat 10:00 CEST ✓ official
        feature('2026-07-19T06:30:00Z'),       // Sun 08:30 CEST ✓ official
      ],
    },
    {
      id: 'f3-2026-r07',
      round: 7,
      name: 'Formula 3 — Hungary',
      circuit: { name: 'Hungaroring', city: 'Budapest', country: 'Hungary', countryCode: 'HU', timezone: 'Europe/Budapest' },
      sessions: [
        practice('2026-07-24T07:55:00Z'),     // Fri 09:55 CEST ✓ official
        quali('2026-07-24T13:00:00Z'),         // Fri 15:00 CEST ✓ official
        sprint('2026-07-25T08:05:00Z'),        // Sat 10:05 CEST ✓ official
        feature('2026-07-26T06:40:00Z'),       // Sun 08:40 CEST ✓ official
      ],
    },
    {
      id: 'f3-2026-r08',
      round: 8,
      name: 'Formula 3 — Italy',
      circuit: { name: 'Autodromo Nazionale Monza', city: 'Monza', country: 'Italy', countryCode: 'IT', timezone: 'Europe/Rome' },
      sessions: [
        practice('2026-09-04T07:55:00Z'),     // Fri 09:55 CEST (estimated)
        quali('2026-09-04T13:00:00Z'),         // Fri 15:00 CEST (estimated)
        sprint('2026-09-05T08:05:00Z'),        // Sat 10:05 CEST (estimated)
        feature('2026-09-06T06:40:00Z'),       // Sun 08:40 CEST (estimated)
      ],
    },
    {
      id: 'f3-2026-r09',
      round: 9,
      name: 'Formula 3 — Spain/Madrid',
      circuit: { name: 'Madring', city: 'Madrid', country: 'Spain', countryCode: 'ES', timezone: 'Europe/Madrid' },
      sessions: [
        practice('2026-09-11T07:55:00Z'),     // Fri 09:55 CEST (estimated)
        quali('2026-09-11T13:00:00Z'),         // Fri 15:00 CEST (estimated)
        sprint('2026-09-12T08:05:00Z'),        // Sat 10:05 CEST (estimated)
        feature('2026-09-13T06:40:00Z'),       // Sun 08:40 CEST (estimated)
      ],
    },
  ],
}
