import type { Session, Championship } from '@/types'

const practice = (start: string): Session => ({ type: 'fp1', label: 'Practice', start, durationMinutes: 45 })
const quali = (start: string): Session => ({ type: 'quali', label: 'Qualifying', start, durationMinutes: 30 })
const sprint = (start: string): Session => ({ type: 'sprint', label: 'Sprint Race', start, durationMinutes: 45 })
const feature = (start: string): Session => ({ type: 'race', label: 'Feature Race', start, durationMinutes: 60 })

export const F2_2026: Championship = {
  id: 'f2',
  name: 'Formula 2',
  shortName: 'F2',
  vehicleType: 'car',
  category: 'formula',
  color: '#0032A0',
  textColor: '#FFFFFF',
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
      id: 'f2-2026-r01',
      round: 1,
      name: 'Formula 2 — Australia',
      circuit: { name: 'Albert Park Circuit', city: 'Melbourne', country: 'Australia', countryCode: 'AU', timezone: 'Australia/Melbourne' },
      sessions: [
        practice('2026-03-05T23:00:00Z'),     // Fri 10:00 AEDT
        quali('2026-03-06T04:00:00Z'),         // Fri 15:00 AEDT
        sprint('2026-03-07T03:00:00Z'),        // Sat 14:00 AEDT
        feature('2026-03-07T22:00:00Z'),       // Sun 09:00 AEDT
      ],
    },
    {
      id: 'f2-2026-r02',
      round: 2,
      name: 'Formula 2 — Miami',
      circuit: { name: 'Miami International Autodrome', city: 'Miami', country: 'United States', countryCode: 'US', timezone: 'America/New_York' },
      sessions: [
        practice('2026-05-01T14:00:00Z'),     // Fri 10:00 EDT
        quali('2026-05-01T19:00:00Z'),         // Fri 15:00 EDT
        sprint('2026-05-02T18:00:00Z'),        // Sat 14:00 EDT
        feature('2026-05-03T13:00:00Z'),       // Sun 09:00 EDT
      ],
    },
    {
      id: 'f2-2026-r03',
      round: 3,
      name: 'Formula 2 — Canada',
      circuit: { name: 'Circuit Gilles Villeneuve', city: 'Montréal', country: 'Canada', countryCode: 'CA', timezone: 'America/Toronto' },
      sessions: [
        practice('2026-05-22T14:00:00Z'),     // Fri 10:00 EDT
        quali('2026-05-22T19:00:00Z'),         // Fri 15:00 EDT
        sprint('2026-05-23T18:00:00Z'),        // Sat 14:00 EDT
        feature('2026-05-24T13:00:00Z'),       // Sun 09:00 EDT
      ],
    },
    {
      id: 'f2-2026-r04',
      round: 4,
      name: 'Formula 2 — Monaco',
      circuit: { name: 'Circuit de Monaco', city: 'Monte Carlo', country: 'Monaco', countryCode: 'MC', timezone: 'Europe/Monaco' },
      sessions: [
        practice('2026-06-05T08:00:00Z'),     // Fri 10:00 CEST
        quali('2026-06-05T13:00:00Z'),         // Fri 15:00 CEST
        sprint('2026-06-06T12:00:00Z'),        // Sat 14:00 CEST
        feature('2026-06-07T07:00:00Z'),       // Sun 09:00 CEST
      ],
    },
    {
      id: 'f2-2026-r05',
      round: 5,
      name: 'Formula 2 — Spain',
      circuit: { name: 'Circuit de Barcelona-Catalunya', city: 'Montmeló', country: 'Spain', countryCode: 'ES', timezone: 'Europe/Madrid' },
      sessions: [
        practice('2026-06-12T08:00:00Z'),     // Fri 10:00 CEST
        quali('2026-06-12T13:00:00Z'),         // Fri 15:00 CEST
        sprint('2026-06-13T12:00:00Z'),        // Sat 14:00 CEST
        feature('2026-06-14T07:00:00Z'),       // Sun 09:00 CEST
      ],
    },
    {
      id: 'f2-2026-r06',
      round: 6,
      name: 'Formula 2 — Austria',
      circuit: { name: 'Red Bull Ring', city: 'Spielberg', country: 'Austria', countryCode: 'AT', timezone: 'Europe/Vienna' },
      sessions: [
        practice('2026-06-26T08:00:00Z'),     // Fri 10:00 CEST
        quali('2026-06-26T13:00:00Z'),         // Fri 15:00 CEST
        sprint('2026-06-27T12:00:00Z'),        // Sat 14:00 CEST
        feature('2026-06-28T07:00:00Z'),       // Sun 09:00 CEST
      ],
    },
    {
      id: 'f2-2026-r07',
      round: 7,
      name: 'Formula 2 — Great Britain',
      circuit: { name: 'Silverstone Circuit', city: 'Silverstone', country: 'Great Britain', countryCode: 'GB', timezone: 'Europe/London' },
      sessions: [
        practice('2026-07-03T09:00:00Z'),     // Fri 10:00 BST
        quali('2026-07-03T14:00:00Z'),         // Fri 15:00 BST
        sprint('2026-07-04T13:00:00Z'),        // Sat 14:00 BST
        feature('2026-07-05T08:00:00Z'),       // Sun 09:00 BST
      ],
    },
    {
      id: 'f2-2026-r08',
      round: 8,
      name: 'Formula 2 — Belgium',
      circuit: { name: 'Circuit de Spa-Francorchamps', city: 'Stavelot', country: 'Belgium', countryCode: 'BE', timezone: 'Europe/Brussels' },
      sessions: [
        practice('2026-07-17T08:00:00Z'),     // Fri 10:00 CEST
        quali('2026-07-17T13:00:00Z'),         // Fri 15:00 CEST
        sprint('2026-07-18T12:00:00Z'),        // Sat 14:00 CEST
        feature('2026-07-19T07:00:00Z'),       // Sun 09:00 CEST
      ],
    },
    {
      id: 'f2-2026-r09',
      round: 9,
      name: 'Formula 2 — Hungary',
      circuit: { name: 'Hungaroring', city: 'Budapest', country: 'Hungary', countryCode: 'HU', timezone: 'Europe/Budapest' },
      sessions: [
        practice('2026-07-24T08:00:00Z'),     // Fri 10:00 CEST
        quali('2026-07-24T13:00:00Z'),         // Fri 15:00 CEST
        sprint('2026-07-25T12:00:00Z'),        // Sat 14:00 CEST
        feature('2026-07-26T07:00:00Z'),       // Sun 09:00 CEST
      ],
    },
    {
      id: 'f2-2026-r10',
      round: 10,
      name: 'Formula 2 — Italy',
      circuit: { name: 'Autodromo Nazionale Monza', city: 'Monza', country: 'Italy', countryCode: 'IT', timezone: 'Europe/Rome' },
      sessions: [
        practice('2026-09-04T08:00:00Z'),     // Fri 10:00 CEST
        quali('2026-09-04T13:00:00Z'),         // Fri 15:00 CEST
        sprint('2026-09-05T12:00:00Z'),        // Sat 14:00 CEST
        feature('2026-09-06T07:00:00Z'),       // Sun 09:00 CEST
      ],
    },
    {
      id: 'f2-2026-r11',
      round: 11,
      name: 'Formula 2 — Spain/Madrid',
      circuit: { name: 'Madring', city: 'Madrid', country: 'Spain', countryCode: 'ES', timezone: 'Europe/Madrid' },
      sessions: [
        practice('2026-09-11T08:00:00Z'),     // Fri 10:00 CEST
        quali('2026-09-11T13:00:00Z'),         // Fri 15:00 CEST
        sprint('2026-09-12T12:00:00Z'),        // Sat 14:00 CEST
        feature('2026-09-13T07:00:00Z'),       // Sun 09:00 CEST
      ],
    },
    {
      id: 'f2-2026-r12',
      round: 12,
      name: 'Formula 2 — Azerbaijan',
      circuit: { name: 'Baku City Circuit', city: 'Baku', country: 'Azerbaijan', countryCode: 'AZ', timezone: 'Asia/Baku' },
      sessions: [
        practice('2026-09-24T06:00:00Z'),     // Thu 10:00 AZT
        quali('2026-09-24T11:00:00Z'),         // Thu 15:00 AZT
        sprint('2026-09-25T10:00:00Z'),        // Fri 14:00 AZT
        feature('2026-09-26T05:00:00Z'),       // Sat 09:00 AZT
      ],
    },
    {
      id: 'f2-2026-r13',
      round: 13,
      name: 'Formula 2 — Qatar',
      circuit: { name: 'Lusail International Circuit', city: 'Lusail', country: 'Qatar', countryCode: 'QA', timezone: 'Asia/Qatar' },
      sessions: [
        practice('2026-11-27T07:00:00Z'),     // Fri 10:00 AST
        quali('2026-11-27T12:00:00Z'),         // Fri 15:00 AST
        sprint('2026-11-28T11:00:00Z'),        // Sat 14:00 AST
        feature('2026-11-29T06:00:00Z'),       // Sun 09:00 AST
      ],
    },
    {
      id: 'f2-2026-r14',
      round: 14,
      name: 'Formula 2 — Abu Dhabi',
      circuit: { name: 'Yas Marina Circuit', city: 'Abu Dhabi', country: 'United Arab Emirates', countryCode: 'AE', timezone: 'Asia/Dubai' },
      sessions: [
        practice('2026-12-04T06:00:00Z'),     // Fri 10:00 GST
        quali('2026-12-04T11:00:00Z'),         // Fri 15:00 GST
        sprint('2026-12-05T10:00:00Z'),        // Sat 14:00 GST
        feature('2026-12-06T05:00:00Z'),       // Sun 09:00 GST
      ],
    },
  ],
}
