import type { Championship, Session } from '@/types'

const fp1 = (start: string): Session => ({ type: 'fp1', label: 'Practice', start, durationMinutes: 30 })
const quali = (start: string): Session => ({ type: 'quali', label: 'Qualifying', start, durationMinutes: 30 })
const race1 = (start: string): Session => ({ type: 'race', label: 'Race 1', start, durationMinutes: 45 })
const race2 = (start: string): Session => ({ type: 'race', label: 'Race 2', start, durationMinutes: 45 })

export const TCR_WORLD_TOUR_2026: Championship = {
  id: 'tcr-world-tour',
  name: 'TCR World Tour',
  shortName: 'TCR',
  vehicleType: 'car',
  category: 'touring',
  color: '#CC0000',
  textColor: '#FFFFFF',
  season: 2026,
  broadcasts: {
    GLOBAL: [
      { channel: 'TCR YouTube', type: 'free-streaming', url: 'https://www.youtube.com/@tcr_series', isYoutube: true },
    ],
    EU: [
      { channel: 'Eurosport', type: 'cable-tv' },
    ],
  },
  events: [
    {
      id: 'tcr-world-tour-2026-r01',
      round: 1,
      name: 'Rd 1 — Sepang',
      circuit: { name: 'Sepang International Circuit', city: 'Sepang', country: 'Malaysia', countryCode: 'MY', timezone: 'Asia/Kuala_Lumpur' },
      sessions: [
        fp1('2026-04-25T05:00:00Z'),
        quali('2026-04-25T09:00:00Z'),
        race1('2026-04-25T13:00:00Z'),
        race2('2026-04-26T07:00:00Z'),
      ],
    },
    {
      id: 'tcr-world-tour-2026-r02',
      round: 2,
      name: 'Rd 2 — Zandvoort',
      circuit: { name: 'Circuit Zandvoort', city: 'Zandvoort', country: 'Netherlands', countryCode: 'NL', timezone: 'Europe/Amsterdam' },
      sessions: [
        fp1('2026-06-06T09:00:00Z'),
        quali('2026-06-06T13:00:00Z'),
        race1('2026-06-06T16:00:00Z'),
        race2('2026-06-07T12:00:00Z'),
      ],
    },
    {
      id: 'tcr-world-tour-2026-r03',
      round: 3,
      name: 'Rd 3 — Magny-Cours',
      circuit: { name: 'Circuit de Nevers Magny-Cours', city: 'Magny-Cours', country: 'France', countryCode: 'FR', timezone: 'Europe/Paris' },
      sessions: [
        fp1('2026-06-27T09:00:00Z'),
        quali('2026-06-27T13:00:00Z'),
        race1('2026-06-27T16:00:00Z'),
        race2('2026-06-28T12:00:00Z'),
      ],
    },
    {
      id: 'tcr-world-tour-2026-r04',
      round: 4,
      name: 'Rd 4 — Paul Ricard',
      circuit: { name: 'Circuit Paul Ricard', city: 'Le Castellet', country: 'France', countryCode: 'FR', timezone: 'Europe/Paris' },
      sessions: [
        fp1('2026-07-18T09:00:00Z'),
        quali('2026-07-18T13:00:00Z'),
        race1('2026-07-18T16:00:00Z'),
        race2('2026-07-19T12:00:00Z'),
      ],
    },
    {
      id: 'tcr-world-tour-2026-r05',
      round: 5,
      name: 'Rd 5 — Vallelunga',
      circuit: { name: 'Autodromo Vallelunga', city: 'Rome', country: 'Italy', countryCode: 'IT', timezone: 'Europe/Rome' },
      sessions: [
        fp1('2026-09-05T09:00:00Z'),
        quali('2026-09-05T13:00:00Z'),
        race1('2026-09-05T16:00:00Z'),
        race2('2026-09-06T12:00:00Z'),
      ],
    },
    {
      id: 'tcr-world-tour-2026-r06',
      round: 6,
      name: 'Rd 6 — Portimão',
      circuit: { name: 'Autódromo Internacional do Algarve', city: 'Portimão', country: 'Portugal', countryCode: 'PT', timezone: 'Europe/Lisbon' },
      sessions: [
        fp1('2026-09-26T10:00:00Z'),
        quali('2026-09-26T14:00:00Z'),
        race1('2026-09-26T17:00:00Z'),
        race2('2026-09-27T12:00:00Z'),
      ],
    },
    {
      id: 'tcr-world-tour-2026-r07',
      round: 7,
      name: 'Rd 7 — Suzuka',
      circuit: { name: 'Suzuka International Racing Course', city: 'Suzuka', country: 'Japan', countryCode: 'JP', timezone: 'Asia/Tokyo' },
      sessions: [
        fp1('2026-10-31T04:00:00Z'),
        quali('2026-10-31T08:00:00Z'),
        race1('2026-10-31T12:00:00Z'),
        race2('2026-11-01T06:00:00Z'),
      ],
    },
    {
      id: 'tcr-world-tour-2026-r08',
      round: 8,
      name: 'Rd 8 — Yas Marina (Finale)',
      circuit: { name: 'Yas Marina Circuit', city: 'Abu Dhabi', country: 'United Arab Emirates', countryCode: 'AE', timezone: 'Asia/Dubai' },
      sessions: [
        fp1('2026-12-05T09:00:00Z'),
        quali('2026-12-05T13:00:00Z'),
        race1('2026-12-05T16:00:00Z'),
        race2('2026-12-06T11:00:00Z'),
      ],
    },
  ],
}

