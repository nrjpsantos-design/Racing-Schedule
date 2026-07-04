import type { Championship, Session } from '@/types'

const fp1 = (start: string): Session => ({ type: 'fp1', label: 'Practice', start, durationMinutes: 30 })
const quali = (start: string): Session => ({ type: 'quali', label: 'Qualifying', start, durationMinutes: 20 })
const race = (start: string): Session => ({ type: 'race', label: 'Race 1', start, durationMinutes: 25 })

export const FRECA_2026: Championship = {
  id: 'freca',
  name: 'Formula Regional European Championship',
  shortName: 'FRECA',
  vehicleType: 'car',
  category: 'formula',
  color: '#0033A0',
  textColor: '#FFFFFF',
  season: 2026,
  broadcasts: {
    GLOBAL: [
      { channel: 'FRECA YouTube', type: 'free-streaming', url: 'https://www.youtube.com/@FREnChampionship', isYoutube: true },
    ],
    UK: [
      { channel: 'Sky Sports', type: 'cable-tv' },
    ],
  },
  events: [
    {
      id: 'freca-2026-r01',
      round: 1,
      name: 'Rd. 1 — Red Bull Ring',
      circuit: {
        name: 'Red Bull Ring',
        city: 'Spielberg',
        country: 'Austria',
        countryCode: 'AT',
        timezone: 'Europe/Vienna',
      },
      sessions: [
        fp1('2026-04-24T08:00:00Z'),
        quali('2026-04-24T12:00:00Z'),
        race('2026-04-25T08:00:00Z'),
        race('2026-04-26T10:00:00Z'),
      ],
    },
    {
      id: 'freca-2026-r02',
      round: 2,
      name: 'Rd. 2 — Zandvoort',
      circuit: {
        name: 'Circuit Zandvoort',
        city: 'Zandvoort',
        country: 'Netherlands',
        countryCode: 'NL',
        timezone: 'Europe/Amsterdam',
      },
      sessions: [
        fp1('2026-05-22T08:00:00Z'),
        quali('2026-05-22T12:00:00Z'),
        race('2026-05-23T08:00:00Z'),
        race('2026-05-24T10:00:00Z'),
      ],
    },
    {
      id: 'freca-2026-r03',
      round: 3,
      name: 'Rd. 3 — Spa',
      circuit: {
        name: 'Circuit de Spa-Francorchamps',
        city: 'Stavelot',
        country: 'Belgium',
        countryCode: 'BE',
        timezone: 'Europe/Brussels',
      },
      sessions: [
        fp1('2026-05-29T08:00:00Z'),
        quali('2026-05-29T12:00:00Z'),
        race('2026-05-30T08:00:00Z'),
        race('2026-05-31T10:00:00Z'),
      ],
    },
    {
      id: 'freca-2026-r04',
      round: 4,
      name: 'Rd. 4 — Monza',
      circuit: {
        name: 'Autodromo Nazionale Monza',
        city: 'Monza',
        country: 'Italy',
        countryCode: 'IT',
        timezone: 'Europe/Rome',
      },
      sessions: [
        fp1('2026-06-19T08:00:00Z'),
        quali('2026-06-19T12:00:00Z'),
        race('2026-06-20T08:00:00Z'),
        race('2026-06-21T10:00:00Z'),
      ],
    },
    {
      id: 'freca-2026-r05',
      round: 5,
      name: 'Rd. 5 — Budapest',
      circuit: {
        name: 'Hungaroring',
        city: 'Budapest',
        country: 'Hungary',
        countryCode: 'HU',
        timezone: 'Europe/Budapest',
      },
      sessions: [
        fp1('2026-07-03T08:00:00Z'),
        quali('2026-07-03T12:00:00Z'),
        race('2026-07-04T08:00:00Z'),
        race('2026-07-05T10:00:00Z'),
      ],
    },
    {
      id: 'freca-2026-r06',
      round: 6,
      name: 'Rd. 6 — Paul Ricard',
      circuit: {
        name: 'Circuit Paul Ricard',
        city: 'Le Castellet',
        country: 'France',
        countryCode: 'FR',
        timezone: 'Europe/Paris',
      },
      sessions: [
        fp1('2026-07-17T08:00:00Z'),
        quali('2026-07-17T12:00:00Z'),
        race('2026-07-18T08:00:00Z'),
        race('2026-07-19T10:00:00Z'),
      ],
    },
    {
      id: 'freca-2026-r07',
      round: 7,
      name: 'Rd. 7 — Imola',
      circuit: {
        name: 'Autodromo Enzo e Dino Ferrari',
        city: 'Imola',
        country: 'Italy',
        countryCode: 'IT',
        timezone: 'Europe/Rome',
      },
      sessions: [
        fp1('2026-09-04T08:00:00Z'),
        quali('2026-09-04T12:00:00Z'),
        race('2026-09-05T08:00:00Z'),
        race('2026-09-06T10:00:00Z'),
      ],
    },
    {
      id: 'freca-2026-r08',
      round: 8,
      name: 'Rd. 8 — Hockenheim (Finale)',
      circuit: {
        name: 'Hockenheim-Ring',
        city: 'Hockenheim',
        country: 'Germany',
        countryCode: 'DE',
        timezone: 'Europe/Berlin',
      },
      sessions: [
        fp1('2026-09-11T08:00:00Z'),
        quali('2026-09-11T12:00:00Z'),
        race('2026-09-12T08:00:00Z'),
        race('2026-09-13T10:00:00Z'),
      ],
    },
  ],
}
