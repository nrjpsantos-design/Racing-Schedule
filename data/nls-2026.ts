import type { Championship, Session } from '@/types'

// NLS = Nürburgring Langstrecken-Serie (Nürburgring Endurance Series)
// Includes the ADAC TOTALENERGIES 24h Nürburgring as the centrepiece event

const fp = (start: string): Session => ({ type: 'fp1', label: 'Free Practice', start, durationMinutes: 60 })
const quali = (start: string): Session => ({ type: 'quali', label: 'Qualifying', start, durationMinutes: 60 })
const race = (start: string, durationMinutes: number, label: string): Session => ({ type: 'race', label, start, durationMinutes })

const h4 = (start: string) => race(start, 240, 'Race (4h)')

// Nürburgring YouTube channel streams the 24h race live for free globally
const YT_N24 = 'https://www.youtube.com/@Nuerburgring'

export const NLS_2026: Championship = {
  id: 'nls',
  name: 'Nürburgring Endurance',
  shortName: 'NLS',
  vehicleType: 'car',
  category: 'endurance',
  color: '#00693E',
  textColor: '#FFFFFF',
  season: 2026,
  broadcasts: {
    DE: [
      { channel: 'RTL', type: 'free-tv', note: '24h race highlights' },
      { channel: 'n-tv', type: 'cable-tv', note: '24h race live' },
      { channel: 'Nürburgring Live', type: 'free-streaming', url: 'https://www.nuerburgring.de/live', note: 'Free online stream' },
      { channel: 'Nürburgring YouTube', type: 'free-streaming', url: YT_N24, isYoutube: true, note: '24h race' },
    ],
    GLOBAL: [
      { channel: 'Nürburgring YouTube', type: 'free-streaming', url: YT_N24, isYoutube: true, note: '24h race' },
      { channel: 'Nürburgring Live', type: 'free-streaming', url: 'https://www.nuerburgring.de/live' },
    ],
    BR: [
      { channel: 'Nürburgring YouTube', type: 'free-streaming', url: YT_N24, isYoutube: true, note: '24h race' },
    ],
    US: [
      { channel: 'Nürburgring YouTube', type: 'free-streaming', url: YT_N24, isYoutube: true, note: '24h race' },
    ],
  },
  events: [
    {
      id: 'nls-2026-r01',
      round: 1,
      name: 'NLS 1 — 59. ADAC Westfalenfahrt',
      circuit: { name: 'Nürburgring Nordschleife', city: 'Nürburg', country: 'Germany', countryCode: 'DE', timezone: 'Europe/Berlin' },
      sessions: [fp('2026-03-28T08:00:00Z'), quali('2026-03-28T09:30:00Z'), h4('2026-03-28T10:00:00Z')],
    },
    {
      id: 'nls-2026-r02',
      round: 2,
      name: 'NLS 2 — 55. DMV Münsterlandpokal',
      circuit: { name: 'Nürburgring Nordschleife', city: 'Nürburg', country: 'Germany', countryCode: 'DE', timezone: 'Europe/Berlin' },
      sessions: [fp('2026-04-25T08:00:00Z'), quali('2026-04-25T09:30:00Z'), h4('2026-04-25T10:00:00Z')],
    },
    {
      id: 'nls-2026-r03',
      round: 3,
      name: 'NLS 3 — 51. ADAC ACAS H&R Cup',
      circuit: { name: 'Nürburgring Nordschleife', city: 'Nürburg', country: 'Germany', countryCode: 'DE', timezone: 'Europe/Berlin' },
      sessions: [fp('2026-05-16T08:00:00Z'), quali('2026-05-16T09:30:00Z'), h4('2026-05-16T10:00:00Z')],
    },
    {
      id: 'nls-2026-r04',
      round: 4,
      name: 'ADAC TOTALENERGIES 24h Nürburgring',
      circuit: { name: 'Nürburgring Nordschleife', city: 'Nürburg', country: 'Germany', countryCode: 'DE', timezone: 'Europe/Berlin' },
      sessions: [
        fp('2026-06-04T09:00:00Z'),
        fp('2026-06-05T09:00:00Z'),
        { type: 'quali', label: 'Top 30 Qualifying', start: '2026-06-05T16:30:00Z', durationMinutes: 60 },
        race('2026-06-06T13:30:00Z', 1440, '24h Race'),
      ],
      broadcastOverrides: {
        DE: [
          { channel: 'RTL', type: 'free-tv', note: 'Live coverage' },
          { channel: 'n-tv', type: 'cable-tv', note: '24h live' },
          { channel: 'Nürburgring YouTube', type: 'free-streaming', url: YT_N24, isYoutube: true },
          { channel: 'Nürburgring Live', type: 'free-streaming', url: 'https://www.nuerburgring.de/live' },
        ],
        GLOBAL: [
          { channel: 'Nürburgring YouTube', type: 'free-streaming', url: YT_N24, isYoutube: true },
          { channel: 'Nürburgring Live', type: 'free-streaming', url: 'https://www.nuerburgring.de/live' },
        ],
        BR: [
          { channel: 'Nürburgring YouTube', type: 'free-streaming', url: YT_N24, isYoutube: true },
        ],
        US: [
          { channel: 'Nürburgring YouTube', type: 'free-streaming', url: YT_N24, isYoutube: true },
        ],
      },
    },
    {
      id: 'nls-2026-r05',
      round: 5,
      name: 'NLS 4 — 45. RCM DMV Grenzlandrennen',
      circuit: { name: 'Nürburgring Nordschleife', city: 'Nürburg', country: 'Germany', countryCode: 'DE', timezone: 'Europe/Berlin' },
      sessions: [fp('2026-06-27T08:00:00Z'), quali('2026-06-27T09:30:00Z'), h4('2026-06-27T10:00:00Z')],
    },
    {
      id: 'nls-2026-r06',
      round: 6,
      name: 'NLS 5 — 53. Reinoldus-Langstreckenrennen',
      circuit: { name: 'Nürburgring Nordschleife', city: 'Nürburg', country: 'Germany', countryCode: 'DE', timezone: 'Europe/Berlin' },
      sessions: [fp('2026-07-18T08:00:00Z'), quali('2026-07-18T09:30:00Z'), h4('2026-07-18T10:00:00Z')],
    },
    {
      id: 'nls-2026-r07',
      round: 7,
      name: 'NLS 6 — 45. DMV Touring Car Trophy',
      circuit: { name: 'Nürburgring Nordschleife', city: 'Nürburg', country: 'Germany', countryCode: 'DE', timezone: 'Europe/Berlin' },
      sessions: [fp('2026-08-08T08:00:00Z'), quali('2026-08-08T09:30:00Z'), h4('2026-08-08T10:00:00Z')],
    },
    {
      id: 'nls-2026-r08',
      round: 8,
      name: 'NLS 7 — 52. ADAC Barbarossapreis',
      circuit: { name: 'Nürburgring Nordschleife', city: 'Nürburg', country: 'Germany', countryCode: 'DE', timezone: 'Europe/Berlin' },
      sessions: [fp('2026-09-12T08:00:00Z'), quali('2026-09-12T09:30:00Z'), h4('2026-09-12T10:00:00Z')],
    },
    {
      id: 'nls-2026-r09',
      round: 9,
      name: 'NLS 8 — 47. BMW Langstrecken Trophy Nürburgring (Finale)',
      circuit: { name: 'Nürburgring Nordschleife', city: 'Nürburg', country: 'Germany', countryCode: 'DE', timezone: 'Europe/Berlin' },
      sessions: [fp('2026-10-17T08:00:00Z'), quali('2026-10-17T09:30:00Z'), h4('2026-10-17T10:00:00Z')],
    },
  ],
}
