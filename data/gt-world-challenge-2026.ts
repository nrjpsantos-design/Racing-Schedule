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
      name: '3 Hours of Barcelona',
      circuit: {
        name: 'Circuit de Barcelona-Catalunya',
        city: 'Montmeló',
        country: 'Spain',
        countryCode: 'ES',
        timezone: 'Europe/Madrid',
      },
      sessions: [
        fp1('2026-04-24T10:00:00Z'),
        fp2('2026-04-25T10:00:00Z'),
        quali('2026-04-25T15:00:00Z'),
        race('2026-04-26T11:00:00Z', 180, '3 Hours of Barcelona'),
      ],
    },
    {
      id: 'gtwce-2026-r02',
      round: 2,
      name: '3 Hours of Misano',
      circuit: {
        name: 'Misano World Circuit Marco Simoncelli',
        city: 'Misano Adriatico',
        country: 'Italy',
        countryCode: 'IT',
        timezone: 'Europe/Rome',
      },
      sessions: [
        fp1('2026-06-05T09:00:00Z'),
        fp2('2026-06-06T09:00:00Z'),
        quali('2026-06-06T14:00:00Z'),
        race('2026-06-07T10:00:00Z', 180, '3 Hours of Misano'),
      ],
    },
    {
      id: 'gtwce-2026-r03',
      round: 3,
      name: 'Total 24 Hours of Spa',
      circuit: {
        name: 'Circuit de Spa-Francorchamps',
        city: 'Stavelot',
        country: 'Belgium',
        countryCode: 'BE',
        timezone: 'Europe/Brussels',
      },
      sessions: [
        fp1('2026-07-23T09:00:00Z'),
        fp2('2026-07-24T12:00:00Z'),
        { type: 'quali', label: 'Qualifying / Top 10 Shootout', start: '2026-07-24T16:00:00Z', durationMinutes: 60 },
        { type: 'race', label: '24 Hours of Spa', start: '2026-07-25T14:30:00Z', durationMinutes: 1440 },
      ],
    },
    {
      id: 'gtwce-2026-r04',
      round: 4,
      name: '3 Hours of Nürburgring',
      circuit: {
        name: 'Nürburgring GP-Strecke',
        city: 'Nürburg',
        country: 'Germany',
        countryCode: 'DE',
        timezone: 'Europe/Berlin',
      },
      sessions: [
        fp1('2026-09-04T09:00:00Z'),
        fp2('2026-09-05T09:00:00Z'),
        quali('2026-09-05T14:00:00Z'),
        race('2026-09-06T10:00:00Z', 180, '3 Hours of Nürburgring'),
      ],
    },
    {
      id: 'gtwce-2026-r05',
      round: 5,
      name: '3 Hours of Magny-Cours',
      circuit: {
        name: 'Circuit de Nevers Magny-Cours',
        city: 'Magny-Cours',
        country: 'France',
        countryCode: 'FR',
        timezone: 'Europe/Paris',
      },
      sessions: [
        fp1('2026-10-02T10:00:00Z'),
        fp2('2026-10-03T10:00:00Z'),
        quali('2026-10-03T15:00:00Z'),
        race('2026-10-04T11:00:00Z', 180, '3 Hours of Magny-Cours'),
      ],
    },
  ],
}

