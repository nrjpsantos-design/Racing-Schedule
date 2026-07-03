import type { Championship, Session } from '@/types'

const fp1 = (start: string): Session => ({ type: 'fp1', label: 'Free Practice 1', start, durationMinutes: 60 })
const fp2 = (start: string): Session => ({ type: 'fp2', label: 'Free Practice 2', start, durationMinutes: 60 })
const quali = (start: string): Session => ({ type: 'quali', label: 'Qualifying', start, durationMinutes: 30 })

export const IGTC_2026: Championship = {
  id: 'igtc',
  name: 'Intercontinental GT Challenge',
  shortName: 'IGTC',
  vehicleType: 'car',
  category: 'endurance',
  color: '#FF6B00',
  textColor: '#FFFFFF',
  season: 2026,
  broadcasts: {
    GLOBAL: [
      { channel: 'GT World YouTube', type: 'free-streaming', url: 'https://www.youtube.com/@GTWorld', isYoutube: true },
    ],
    AU: [
      { channel: 'Foxtel', type: 'cable-tv' },
      { channel: 'GT World YouTube', type: 'free-streaming', url: 'https://www.youtube.com/@GTWorld', isYoutube: true },
    ],
    UK: [
      { channel: 'Eurosport', type: 'cable-tv' },
      { channel: 'GT World YouTube', type: 'free-streaming', url: 'https://www.youtube.com/@GTWorld', isYoutube: true },
    ],
  },
  events: [
    {
      id: 'igtc-2026-r01',
      round: 1,
      name: 'Liqui-Moly Bathurst 12 Hour',
      circuit: {
        name: 'Mount Panorama Circuit',
        city: 'Bathurst',
        country: 'Australia',
        countryCode: 'AU',
        timezone: 'Australia/Sydney',
      },
      sessions: [
        fp1('2026-02-05T23:00:00Z'),
        fp2('2026-02-06T23:00:00Z'),
        quali('2026-02-07T01:00:00Z'),
        { type: 'race', label: 'Bathurst 12 Hour', start: '2026-02-08T21:30:00Z', durationMinutes: 720 },
      ],
    },
    {
      id: 'igtc-2026-r02',
      round: 2,
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
        quali('2026-07-24T16:00:00Z'),
        { type: 'race', label: '24 Hours of Spa', start: '2026-07-25T14:30:00Z', durationMinutes: 1440 },
      ],
    },
    {
      id: 'igtc-2026-r03',
      round: 3,
      name: 'Indianapolis 8 Hour',
      circuit: {
        name: 'Indianapolis Motor Speedway',
        city: 'Indianapolis',
        country: 'United States',
        countryCode: 'US',
        timezone: 'America/Indiana/Indianapolis',
      },
      sessions: [
        fp1('2026-09-18T17:00:00Z'),
        fp2('2026-09-19T17:00:00Z'),
        quali('2026-09-19T20:00:00Z'),
        { type: 'race', label: 'Indianapolis 8 Hour', start: '2026-09-20T16:00:00Z', durationMinutes: 480 },
      ],
    },
    {
      id: 'igtc-2026-r04',
      round: 4,
      name: 'Gulf 12 Hours',
      circuit: {
        name: 'Yas Marina Circuit',
        city: 'Abu Dhabi',
        country: 'United Arab Emirates',
        countryCode: 'AE',
        timezone: 'Asia/Dubai',
      },
      sessions: [
        fp1('2026-12-11T08:00:00Z'),
        fp2('2026-12-12T07:00:00Z'),
        quali('2026-12-12T11:00:00Z'),
        { type: 'race', label: 'Gulf 12 Hours', start: '2026-12-13T08:00:00Z', durationMinutes: 720 },
      ],
    },
  ],
}

