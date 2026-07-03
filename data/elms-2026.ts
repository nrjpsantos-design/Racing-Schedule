import type { Championship, Session } from '@/types'

const fp1 = (start: string): Session => ({ type: 'fp1', label: 'Practice 1', start, durationMinutes: 60 })
const fp2 = (start: string): Session => ({ type: 'fp2', label: 'Practice 2', start, durationMinutes: 60 })
const quali = (start: string): Session => ({ type: 'quali', label: 'Qualifying', start, durationMinutes: 30 })
const race = (start: string, durationMinutes: number, label: string): Session => ({ type: 'race', label, start, durationMinutes })

export const ELMS_2026: Championship = {
  id: 'elms',
  name: 'European Le Mans Series',
  shortName: 'ELMS',
  vehicleType: 'car',
  category: 'endurance',
  color: '#00833E',
  textColor: '#FFFFFF',
  season: 2026,
  broadcasts: {
    GLOBAL: [
      { channel: 'ELMS TV', type: 'free-streaming', url: 'https://www.elms.com', isYoutube: false, note: 'Free live stream' },
      { channel: 'Eurosport', type: 'cable-tv' },
    ],
    UK: [
      { channel: 'Eurosport', type: 'cable-tv' },
      { channel: 'discovery+', type: 'paid-streaming', url: 'https://www.discoveryplus.com' },
      { channel: 'ELMS TV', type: 'free-streaming', url: 'https://www.elms.com' },
    ],
  },
  events: [
    {
      id: 'elms-2026-r01',
      round: 1,
      name: '4 Hours of Le Castellet',
      circuit: {
        name: 'Circuit Paul Ricard',
        city: 'Le Castellet',
        country: 'France',
        countryCode: 'FR',
        timezone: 'Europe/Paris',
      },
      sessions: [
        fp1('2026-04-17T09:00:00Z'),
        fp2('2026-04-18T10:00:00Z'),
        quali('2026-04-18T15:00:00Z'),
        race('2026-04-19T10:30:00Z', 240, '4 Hours of Le Castellet'),
      ],
    },
    {
      id: 'elms-2026-r02',
      round: 2,
      name: '4 Hours of Imola',
      circuit: {
        name: 'Autodromo Enzo e Dino Ferrari',
        city: 'Imola',
        country: 'Italy',
        countryCode: 'IT',
        timezone: 'Europe/Rome',
      },
      sessions: [
        fp1('2026-05-15T10:00:00Z'),
        fp2('2026-05-16T10:00:00Z'),
        quali('2026-05-16T15:00:00Z'),
        race('2026-05-17T11:00:00Z', 240, '4 Hours of Imola'),
      ],
    },
    {
      id: 'elms-2026-r03',
      round: 3,
      name: '4 Hours of Red Bull Ring',
      circuit: {
        name: 'Red Bull Ring',
        city: 'Spielberg',
        country: 'Austria',
        countryCode: 'AT',
        timezone: 'Europe/Vienna',
      },
      sessions: [
        fp1('2026-06-19T10:00:00Z'),
        fp2('2026-06-20T10:00:00Z'),
        quali('2026-06-20T15:00:00Z'),
        race('2026-06-21T11:00:00Z', 240, '4 Hours of Red Bull Ring'),
      ],
    },
    {
      id: 'elms-2026-r04',
      round: 4,
      name: '4 Hours of Monza',
      circuit: {
        name: 'Autodromo Nazionale Monza',
        city: 'Monza',
        country: 'Italy',
        countryCode: 'IT',
        timezone: 'Europe/Rome',
      },
      sessions: [
        fp1('2026-07-10T10:00:00Z'),
        fp2('2026-07-11T10:00:00Z'),
        quali('2026-07-11T15:00:00Z'),
        race('2026-07-12T11:00:00Z', 240, '4 Hours of Monza'),
      ],
    },
    {
      id: 'elms-2026-r05',
      round: 5,
      name: '4 Hours of Spa-Francorchamps',
      circuit: {
        name: 'Circuit de Spa-Francorchamps',
        city: 'Stavelot',
        country: 'Belgium',
        countryCode: 'BE',
        timezone: 'Europe/Brussels',
      },
      sessions: [
        fp1('2026-09-18T10:00:00Z'),
        fp2('2026-09-19T10:00:00Z'),
        quali('2026-09-19T15:00:00Z'),
        race('2026-09-20T11:00:00Z', 240, '4 Hours of Spa-Francorchamps'),
      ],
    },
    {
      id: 'elms-2026-r06',
      round: 6,
      name: '4 Hours of Portimão',
      circuit: {
        name: 'Autódromo Internacional do Algarve',
        city: 'Portimão',
        country: 'Portugal',
        countryCode: 'PT',
        timezone: 'Europe/Lisbon',
      },
      sessions: [
        fp1('2026-10-16T10:00:00Z'),
        fp2('2026-10-17T10:00:00Z'),
        quali('2026-10-17T15:00:00Z'),
        race('2026-10-18T11:00:00Z', 240, '4 Hours of Portimão'),
      ],
    },
  ],
}

