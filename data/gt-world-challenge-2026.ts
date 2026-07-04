import type { Championship, Session } from '@/types'

const fp1 = (start: string): Session => ({ type: 'fp1', label: 'Practice 1', start, durationMinutes: 60 })
const fp2 = (start: string): Session => ({ type: 'fp2', label: 'Practice 2', start, durationMinutes: 60 })
const quali = (start: string): Session => ({ type: 'quali', label: 'Qualifying', start, durationMinutes: 30 })
const race = (start: string, durationMinutes: number, label: string): Session => ({ type: 'race', label, start, durationMinutes })

export const GT_WORLD_CHALLENGE_2026: Championship = {
  id: 'gtwce',
  name: 'GT World Challenge Europe',
  shortName: 'GTWCE',
  vehicleType: 'car',
  category: 'endurance',
  color: '#1F3B6E',
  textColor: '#FFFFFF',
  season: 2026,
  broadcasts: {
    GLOBAL: [
      { channel: 'GT World YouTube', type: 'free-streaming', url: 'https://www.youtube.com/@GTWorld', isYoutube: true, note: 'Live on YouTube' },
    ],
    EU: [
      { channel: 'Eurosport', type: 'cable-tv' },
      { channel: 'GT World YouTube', type: 'free-streaming', url: 'https://www.youtube.com/@GTWorld', isYoutube: true },
    ],
  },
  events: [
    {
      id: 'gtwce-2026-r01',
      round: 1,
      name: '6 Hours of Paul Ricard',
      circuit: {
        name: 'Circuit Paul Ricard',
        city: 'Le Castellet',
        country: 'France',
        countryCode: 'FR',
        timezone: 'Europe/Paris',
      },
      sessions: [
        fp1('2026-04-10T09:00:00Z'),
        fp2('2026-04-11T09:00:00Z'),
        quali('2026-04-11T14:00:00Z'),
        race('2026-04-12T09:00:00Z', 360, '6 Hours of Paul Ricard'),
      ],
    },
    {
      id: 'gtwce-2026-r02',
      round: 2,
      name: 'Brands Hatch Sprint',
      circuit: {
        name: 'Brands Hatch',
        city: 'Swanley',
        country: 'Great Britain',
        countryCode: 'GB',
        timezone: 'Europe/London',
      },
      sessions: [
        fp1('2026-05-02T07:00:00Z'),
        quali('2026-05-02T11:00:00Z'),
        race('2026-05-02T15:00:00Z', 60, 'Race 1'),
        race('2026-05-03T09:00:00Z', 60, 'Race 2'),
      ],
    },
    {
      id: 'gtwce-2026-r03',
      round: 3,
      name: '3 Hours of Monza',
      circuit: {
        name: 'Autodromo Nazionale Monza',
        city: 'Monza',
        country: 'Italy',
        countryCode: 'IT',
        timezone: 'Europe/Rome',
      },
      sessions: [
        fp1('2026-05-29T09:00:00Z'),
        fp2('2026-05-30T09:00:00Z'),
        quali('2026-05-30T14:00:00Z'),
        race('2026-05-31T10:00:00Z', 180, '3 Hours of Monza'),
      ],
    },
    {
      id: 'gtwce-2026-r04',
      round: 4,
      name: 'CrowdStrike 24 Hours of Spa',
      circuit: {
        name: 'Circuit de Spa-Francorchamps',
        city: 'Stavelot',
        country: 'Belgium',
        countryCode: 'BE',
        timezone: 'Europe/Brussels',
      },
      sessions: [
        fp1('2026-06-23T09:00:00Z'),
        fp2('2026-06-24T09:00:00Z'),
        quali('2026-06-25T14:00:00Z'),
        race('2026-06-27T15:00:00Z', 1440, 'CrowdStrike 24 Hours of Spa'),
      ],
    },
    {
      id: 'gtwce-2026-r05',
      round: 5,
      name: 'Misano Sprint',
      circuit: {
        name: 'Misano World Circuit Marco Simoncelli',
        city: 'Misano Adriatico',
        country: 'Italy',
        countryCode: 'IT',
        timezone: 'Europe/Rome',
      },
      sessions: [
        fp1('2026-07-18T07:00:00Z'),
        quali('2026-07-18T11:00:00Z'),
        race('2026-07-18T15:00:00Z', 60, 'Race 1'),
        race('2026-07-19T09:00:00Z', 60, 'Race 2'),
      ],
    },
    {
      id: 'gtwce-2026-r06',
      round: 6,
      name: 'Magny-Cours Sprint',
      circuit: {
        name: 'Circuit de Nevers Magny-Cours',
        city: 'Magny-Cours',
        country: 'France',
        countryCode: 'FR',
        timezone: 'Europe/Paris',
      },
      sessions: [
        fp1('2026-08-01T07:00:00Z'),
        quali('2026-08-01T11:00:00Z'),
        race('2026-08-01T15:00:00Z', 60, 'Race 1'),
        race('2026-08-02T09:00:00Z', 60, 'Race 2'),
      ],
    },
    {
      id: 'gtwce-2026-r07',
      round: 7,
      name: '3 Hours of Nürburgring',
      circuit: {
        name: 'Nürburgring GP-Strecke',
        city: 'Nürburg',
        country: 'Germany',
        countryCode: 'DE',
        timezone: 'Europe/Berlin',
      },
      sessions: [
        fp1('2026-08-28T09:00:00Z'),
        fp2('2026-08-29T09:00:00Z'),
        quali('2026-08-29T14:00:00Z'),
        race('2026-08-30T10:00:00Z', 180, '3 Hours of Nürburgring'),
      ],
    },
    {
      id: 'gtwce-2026-r08',
      round: 8,
      name: 'Zandvoort Sprint',
      circuit: {
        name: 'Circuit Zandvoort',
        city: 'Zandvoort',
        country: 'Netherlands',
        countryCode: 'NL',
        timezone: 'Europe/Amsterdam',
      },
      sessions: [
        fp1('2026-09-19T07:00:00Z'),
        quali('2026-09-19T11:00:00Z'),
        race('2026-09-19T15:00:00Z', 60, 'Race 1'),
        race('2026-09-20T09:00:00Z', 60, 'Race 2'),
      ],
    },
    {
      id: 'gtwce-2026-r09',
      round: 9,
      name: 'Barcelona Sprint',
      circuit: {
        name: 'Circuit de Barcelona-Catalunya',
        city: 'Montmeló',
        country: 'Spain',
        countryCode: 'ES',
        timezone: 'Europe/Madrid',
      },
      sessions: [
        fp1('2026-10-03T07:00:00Z'),
        quali('2026-10-03T11:00:00Z'),
        race('2026-10-03T15:00:00Z', 60, 'Race 1'),
        race('2026-10-04T09:00:00Z', 60, 'Race 2'),
      ],
    },
    {
      id: 'gtwce-2026-r10',
      round: 10,
      name: '3 Hours of Portimão',
      circuit: {
        name: 'Autódromo Internacional do Algarve',
        city: 'Portimão',
        country: 'Portugal',
        countryCode: 'PT',
        timezone: 'Europe/Lisbon',
      },
      sessions: [
        fp1('2026-10-16T09:00:00Z'),
        fp2('2026-10-17T09:00:00Z'),
        quali('2026-10-17T14:00:00Z'),
        race('2026-10-18T10:00:00Z', 180, '3 Hours of Portimão'),
      ],
    },
  ],
}
