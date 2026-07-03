import type { Championship } from '@/types'

export const F4_BRASIL_2026: Championship = {
  id: 'f4-brasil',
  name: 'Formula 4 Brasileira',
  shortName: 'F4 BR',
  vehicleType: 'car',
  category: 'formula',
  color: '#009C3B',
  textColor: '#FFFFFF',
  season: 2026,
  broadcasts: {
    BR: [
      { channel: 'BandSports', type: 'cable-tv' },
      { channel: 'SporTV', type: 'cable-tv', note: 'Selected rounds' },
    ],
    GLOBAL: [
      { channel: 'F4 Brasil YouTube', type: 'free-streaming', url: 'https://www.youtube.com/@F4Brasil', isYoutube: true },
    ],
  },
  events: [
    {
      id: 'f4-brasil-2026-r01',
      round: 1,
      name: 'Rd. 1 — Interlagos',
      circuit: {
        name: 'Autódromo José Carlos Pace',
        city: 'São Paulo',
        country: 'Brazil',
        countryCode: 'BR',
        timezone: 'America/Sao_Paulo',
      },
      sessions: [
        { type: 'fp1', label: 'Practice', start: '2026-03-14T14:00:00Z', durationMinutes: 30 },
        { type: 'quali', label: 'Qualifying', start: '2026-03-14T18:00:00Z', durationMinutes: 20 },
        { type: 'race', label: 'Race 1', start: '2026-03-15T14:00:00Z', durationMinutes: 30 },
        { type: 'race', label: 'Race 2', start: '2026-03-15T18:00:00Z', durationMinutes: 30 },
      ],
    },
    {
      id: 'f4-brasil-2026-r02',
      round: 2,
      name: 'Rd. 2 — Potenza',
      circuit: {
        name: 'Autódromo de Potenza (Velocitta)',
        city: 'Mogi Guaçu',
        country: 'Brazil',
        countryCode: 'BR',
        timezone: 'America/Sao_Paulo',
      },
      sessions: [
        { type: 'fp1', label: 'Practice', start: '2026-04-11T14:00:00Z', durationMinutes: 30 },
        { type: 'quali', label: 'Qualifying', start: '2026-04-11T18:00:00Z', durationMinutes: 20 },
        { type: 'race', label: 'Race 1', start: '2026-04-12T14:00:00Z', durationMinutes: 30 },
        { type: 'race', label: 'Race 2', start: '2026-04-12T17:30:00Z', durationMinutes: 30 },
      ],
    },
    {
      id: 'f4-brasil-2026-r03',
      round: 3,
      name: 'Rd. 3 — Curitiba',
      circuit: {
        name: 'Autódromo Internacional de Curitiba',
        city: 'Curitiba',
        country: 'Brazil',
        countryCode: 'BR',
        timezone: 'America/Sao_Paulo',
      },
      sessions: [
        { type: 'fp1', label: 'Practice', start: '2026-05-09T14:00:00Z', durationMinutes: 30 },
        { type: 'quali', label: 'Qualifying', start: '2026-05-09T18:00:00Z', durationMinutes: 20 },
        { type: 'race', label: 'Race 1', start: '2026-05-10T14:00:00Z', durationMinutes: 30 },
        { type: 'race', label: 'Race 2', start: '2026-05-10T17:30:00Z', durationMinutes: 30 },
      ],
    },
    {
      id: 'f4-brasil-2026-r04',
      round: 4,
      name: 'Rd. 4 — Goiânia',
      circuit: {
        name: 'Autódromo Internacional de Goiânia',
        city: 'Goiânia',
        country: 'Brazil',
        countryCode: 'BR',
        timezone: 'America/Sao_Paulo',
      },
      sessions: [
        { type: 'fp1', label: 'Practice', start: '2026-06-06T14:00:00Z', durationMinutes: 30 },
        { type: 'quali', label: 'Qualifying', start: '2026-06-06T18:00:00Z', durationMinutes: 20 },
        { type: 'race', label: 'Race 1', start: '2026-06-07T14:00:00Z', durationMinutes: 30 },
        { type: 'race', label: 'Race 2', start: '2026-06-07T17:30:00Z', durationMinutes: 30 },
      ],
    },
    {
      id: 'f4-brasil-2026-r05',
      round: 5,
      name: 'Rd. 5 — Interlagos',
      circuit: {
        name: 'Autódromo José Carlos Pace',
        city: 'São Paulo',
        country: 'Brazil',
        countryCode: 'BR',
        timezone: 'America/Sao_Paulo',
      },
      sessions: [
        { type: 'fp1', label: 'Practice', start: '2026-07-11T14:00:00Z', durationMinutes: 30 },
        { type: 'quali', label: 'Qualifying', start: '2026-07-11T18:00:00Z', durationMinutes: 20 },
        { type: 'race', label: 'Race 1', start: '2026-07-12T14:00:00Z', durationMinutes: 30 },
        { type: 'race', label: 'Race 2', start: '2026-07-12T17:30:00Z', durationMinutes: 30 },
      ],
    },
    {
      id: 'f4-brasil-2026-r06',
      round: 6,
      name: 'Rd. 6 — Cascavel',
      circuit: {
        name: 'Autódromo Internacional de Cascavel',
        city: 'Cascavel',
        country: 'Brazil',
        countryCode: 'BR',
        timezone: 'America/Sao_Paulo',
      },
      sessions: [
        { type: 'fp1', label: 'Practice', start: '2026-08-08T14:00:00Z', durationMinutes: 30 },
        { type: 'quali', label: 'Qualifying', start: '2026-08-08T18:00:00Z', durationMinutes: 20 },
        { type: 'race', label: 'Race 1', start: '2026-08-09T14:00:00Z', durationMinutes: 30 },
        { type: 'race', label: 'Race 2', start: '2026-08-09T17:30:00Z', durationMinutes: 30 },
      ],
    },
    {
      id: 'f4-brasil-2026-r07',
      round: 7,
      name: 'Rd. 7 — Potenza',
      circuit: {
        name: 'Autódromo de Potenza (Velocitta)',
        city: 'Mogi Guaçu',
        country: 'Brazil',
        countryCode: 'BR',
        timezone: 'America/Sao_Paulo',
      },
      sessions: [
        { type: 'fp1', label: 'Practice', start: '2026-09-12T14:00:00Z', durationMinutes: 30 },
        { type: 'quali', label: 'Qualifying', start: '2026-09-12T18:00:00Z', durationMinutes: 20 },
        { type: 'race', label: 'Race 1', start: '2026-09-13T14:00:00Z', durationMinutes: 30 },
        { type: 'race', label: 'Race 2', start: '2026-09-13T17:30:00Z', durationMinutes: 30 },
      ],
    },
    {
      id: 'f4-brasil-2026-r08',
      round: 8,
      name: 'Rd. 8 — Interlagos (Finale)',
      circuit: {
        name: 'Autódromo José Carlos Pace',
        city: 'São Paulo',
        country: 'Brazil',
        countryCode: 'BR',
        timezone: 'America/Sao_Paulo',
      },
      sessions: [
        { type: 'fp1', label: 'Practice', start: '2026-10-17T14:00:00Z', durationMinutes: 30 },
        { type: 'quali', label: 'Qualifying', start: '2026-10-17T18:00:00Z', durationMinutes: 20 },
        { type: 'race', label: 'Race 1', start: '2026-10-18T14:00:00Z', durationMinutes: 30 },
        { type: 'race', label: 'Race 2', start: '2026-10-18T17:30:00Z', durationMinutes: 30 },
      ],
    },
  ],
}

