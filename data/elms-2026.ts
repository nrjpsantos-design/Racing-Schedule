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
      name: '4 Hours of Barcelona',
      circuit: {
        name: 'Circuit de Barcelona-Catalunya',
        city: 'Montmeló',
        country: 'Spain',
        countryCode: 'ES',
        timezone: 'Europe/Madrid',
      },
      sessions: [
        fp1('2026-04-11T09:00:00Z'),
        quali('2026-04-11T14:00:00Z'),
        fp2('2026-04-12T08:00:00Z'),
        race('2026-04-12T10:00:00Z', 240, '4 Hours of Barcelona'),
      ],
    },
    {
      id: 'elms-2026-r02',
      round: 2,
      name: '4 Hours of Le Castellet',
      circuit: {
        name: 'Circuit Paul Ricard',
        city: 'Le Castellet',
        country: 'France',
        countryCode: 'FR',
        timezone: 'Europe/Paris',
      },
      sessions: [
        fp1('2026-05-02T09:00:00Z'),
        quali('2026-05-02T14:00:00Z'),
        fp2('2026-05-03T08:00:00Z'),
        race('2026-05-03T10:00:00Z', 240, '4 Hours of Le Castellet'),
      ],
    },
    {
      id: 'elms-2026-r03',
      round: 3,
      name: '4 Hours of Imola',
      circuit: {
        name: 'Autodromo Enzo e Dino Ferrari',
        city: 'Imola',
        country: 'Italy',
        countryCode: 'IT',
        timezone: 'Europe/Rome',
      },
      sessions: [
        fp1('2026-07-04T09:00:00Z'),
        quali('2026-07-04T14:00:00Z'),
        fp2('2026-07-05T08:00:00Z'),
        race('2026-07-05T10:00:00Z', 240, '4 Hours of Imola'),
      ],
    },
    {
      id: 'elms-2026-r04',
      round: 4,
      name: '4 Hours of Spa-Francorchamps',
      circuit: {
        name: 'Circuit de Spa-Francorchamps',
        city: 'Stavelot',
        country: 'Belgium',
        countryCode: 'BE',
        timezone: 'Europe/Brussels',
      },
      sessions: [
        fp1('2026-08-22T09:00:00Z'),
        quali('2026-08-22T14:00:00Z'),
        fp2('2026-08-23T08:00:00Z'),
        race('2026-08-23T10:00:00Z', 240, '4 Hours of Spa-Francorchamps'),
      ],
    },
    {
      id: 'elms-2026-r05',
      round: 5,
      name: 'Goodyear 4 Hours of Silverstone',
      circuit: {
        name: 'Silverstone Circuit',
        city: 'Silverstone',
        country: 'Great Britain',
        countryCode: 'GB',
        timezone: 'Europe/London',
      },
      sessions: [
        fp1('2026-09-12T09:00:00Z'),
        quali('2026-09-12T14:00:00Z'),
        fp2('2026-09-13T08:00:00Z'),
        race('2026-09-13T10:00:00Z', 240, 'Goodyear 4 Hours of Silverstone'),
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
        fp1('2026-10-09T09:00:00Z'),
        quali('2026-10-09T14:00:00Z'),
        fp2('2026-10-10T08:00:00Z'),
        race('2026-10-10T10:00:00Z', 240, '4 Hours of Portimão'),
      ],
    },
  ],
}
