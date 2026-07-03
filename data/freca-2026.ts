import type { Championship } from '@/types'

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
      name: 'Rd. 1 — Bahrain',
      circuit: {
        name: 'Bahrain International Circuit',
        city: 'Sakhir',
        country: 'Bahrain',
        countryCode: 'BH',
        timezone: 'Asia/Bahrain',
      },
      sessions: [
        { type: 'fp1', label: 'Practice', start: '2026-03-06T07:00:00Z', durationMinutes: 30 },
        { type: 'quali', label: 'Qualifying', start: '2026-03-06T11:00:00Z', durationMinutes: 20 },
        { type: 'race', label: 'Race 1', start: '2026-03-07T07:00:00Z', durationMinutes: 25 },
        { type: 'race', label: 'Race 2', start: '2026-03-08T11:30:00Z', durationMinutes: 25 },
      ],
    },
    {
      id: 'freca-2026-r02',
      round: 2,
      name: 'Rd. 2 — Imola',
      circuit: {
        name: 'Autodromo Enzo e Dino Ferrari',
        city: 'Imola',
        country: 'Italy',
        countryCode: 'IT',
        timezone: 'Europe/Rome',
      },
      sessions: [
        { type: 'fp1', label: 'Practice', start: '2026-04-18T09:00:00Z', durationMinutes: 30 },
        { type: 'quali', label: 'Qualifying', start: '2026-04-18T13:00:00Z', durationMinutes: 20 },
        { type: 'race', label: 'Race 1', start: '2026-04-19T09:00:00Z', durationMinutes: 25 },
        { type: 'race', label: 'Race 2', start: '2026-04-19T14:00:00Z', durationMinutes: 25 },
      ],
    },
    {
      id: 'freca-2026-r03',
      round: 3,
      name: 'Rd. 3 — Barcelona',
      circuit: {
        name: 'Circuit de Barcelona-Catalunya',
        city: 'Montmeló',
        country: 'Spain',
        countryCode: 'ES',
        timezone: 'Europe/Madrid',
      },
      sessions: [
        { type: 'fp1', label: 'Practice', start: '2026-06-05T08:00:00Z', durationMinutes: 30 },
        { type: 'quali', label: 'Qualifying', start: '2026-06-05T12:00:00Z', durationMinutes: 20 },
        { type: 'race', label: 'Race 1', start: '2026-06-06T08:00:00Z', durationMinutes: 25 },
        { type: 'race', label: 'Race 2', start: '2026-06-07T09:00:00Z', durationMinutes: 25 },
      ],
    },
    {
      id: 'freca-2026-r04',
      round: 4,
      name: 'Rd. 4 — Silverstone',
      circuit: {
        name: 'Silverstone Circuit',
        city: 'Silverstone',
        country: 'Great Britain',
        countryCode: 'GB',
        timezone: 'Europe/London',
      },
      sessions: [
        { type: 'fp1', label: 'Practice', start: '2026-07-17T09:00:00Z', durationMinutes: 30 },
        { type: 'quali', label: 'Qualifying', start: '2026-07-17T13:00:00Z', durationMinutes: 20 },
        { type: 'race', label: 'Race 1', start: '2026-07-18T09:00:00Z', durationMinutes: 25 },
        { type: 'race', label: 'Race 2', start: '2026-07-19T10:00:00Z', durationMinutes: 25 },
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
        { type: 'fp1', label: 'Practice', start: '2026-07-31T08:00:00Z', durationMinutes: 30 },
        { type: 'quali', label: 'Qualifying', start: '2026-07-31T12:00:00Z', durationMinutes: 20 },
        { type: 'race', label: 'Race 1', start: '2026-08-01T08:00:00Z', durationMinutes: 25 },
        { type: 'race', label: 'Race 2', start: '2026-08-02T09:30:00Z', durationMinutes: 25 },
      ],
    },
    {
      id: 'freca-2026-r06',
      round: 6,
      name: 'Rd. 6 — Spa',
      circuit: {
        name: 'Circuit de Spa-Francorchamps',
        city: 'Stavelot',
        country: 'Belgium',
        countryCode: 'BE',
        timezone: 'Europe/Brussels',
      },
      sessions: [
        { type: 'fp1', label: 'Practice', start: '2026-08-28T08:00:00Z', durationMinutes: 30 },
        { type: 'quali', label: 'Qualifying', start: '2026-08-28T12:00:00Z', durationMinutes: 20 },
        { type: 'race', label: 'Race 1', start: '2026-08-29T08:00:00Z', durationMinutes: 25 },
        { type: 'race', label: 'Race 2', start: '2026-08-30T09:30:00Z', durationMinutes: 25 },
      ],
    },
    {
      id: 'freca-2026-r07',
      round: 7,
      name: 'Rd. 7 — Monza',
      circuit: {
        name: 'Autodromo Nazionale Monza',
        city: 'Monza',
        country: 'Italy',
        countryCode: 'IT',
        timezone: 'Europe/Rome',
      },
      sessions: [
        { type: 'fp1', label: 'Practice', start: '2026-09-11T08:00:00Z', durationMinutes: 30 },
        { type: 'quali', label: 'Qualifying', start: '2026-09-11T12:00:00Z', durationMinutes: 20 },
        { type: 'race', label: 'Race 1', start: '2026-09-12T08:00:00Z', durationMinutes: 25 },
        { type: 'race', label: 'Race 2', start: '2026-09-13T09:30:00Z', durationMinutes: 25 },
      ],
    },
    {
      id: 'freca-2026-r08',
      round: 8,
      name: 'Rd. 8 — Abu Dhabi (Finale)',
      circuit: {
        name: 'Yas Marina Circuit',
        city: 'Abu Dhabi',
        country: 'United Arab Emirates',
        countryCode: 'AE',
        timezone: 'Asia/Dubai',
      },
      sessions: [
        { type: 'fp1', label: 'Practice', start: '2026-12-04T06:30:00Z', durationMinutes: 30 },
        { type: 'quali', label: 'Qualifying', start: '2026-12-04T10:00:00Z', durationMinutes: 20 },
        { type: 'race', label: 'Race 1', start: '2026-12-05T06:30:00Z', durationMinutes: 25 },
        { type: 'race', label: 'Race 2', start: '2026-12-06T09:30:00Z', durationMinutes: 25 },
      ],
    },
  ],
}

