import type { Championship, Session } from '@/types'

const fp1 = (start: string): Session => ({ type: 'fp1', label: 'Free Practice 1', start, durationMinutes: 90 })
const fp2 = (start: string): Session => ({ type: 'fp2', label: 'Free Practice 2', start, durationMinutes: 90 })
const fp3 = (start: string): Session => ({ type: 'fp3', label: 'Free Practice 3', start, durationMinutes: 60 })
const qualifying = (start: string): Session => ({ type: 'quali', label: 'Qualifying & Hyperpole', start, durationMinutes: 75 })
const race = (start: string, durationMinutes: number): Session => ({ type: 'race', label: 'Race', start, durationMinutes })

const h6 = (start: string) => race(start, 360)
const h8 = (start: string) => race(start, 480)
const h12 = (start: string) => race(start, 720)
const h24 = (start: string) => race(start, 1440)

export const WEC_2026: Championship = {
  id: 'wec',
  name: 'FIA World Endurance Championship',
  shortName: 'WEC',
  vehicleType: 'car',
  category: 'endurance',
  color: '#003A70',
  textColor: '#FFFFFF',
  season: 2026,
  broadcasts: {
    BR: [
      { channel: 'ESPN', type: 'cable-tv' },
      { channel: 'WEC+ App', type: 'free-streaming', url: 'https://wec.tv', note: 'Free in select regions' },
    ],
    FR: [
      { channel: 'France TV', type: 'free-tv', note: 'Le Mans + selected rounds' },
      { channel: 'Canal+', type: 'cable-tv' },
      { channel: 'Eurosport', type: 'cable-tv' },
      { channel: 'WEC+ App', type: 'free-streaming', url: 'https://wec.tv' },
    ],
    UK: [
      { channel: 'Eurosport', type: 'cable-tv' },
      { channel: 'discovery+', type: 'paid-streaming', url: 'https://www.discoveryplus.com' },
      { channel: 'WEC+ App', type: 'free-streaming', url: 'https://wec.tv' },
    ],
    DE: [
      { channel: 'Eurosport', type: 'cable-tv' },
      { channel: 'WEC+ App', type: 'free-streaming', url: 'https://wec.tv' },
    ],
    US: [
      { channel: 'MotorTrend', type: 'paid-streaming', url: 'https://www.motortrend.com' },
      { channel: 'WEC+ App', type: 'free-streaming', url: 'https://wec.tv' },
    ],
    GLOBAL: [
      { channel: 'WEC+ App', type: 'free-streaming', url: 'https://wec.tv', note: 'Free live timing & audio, some video' },
      { channel: 'Eurosport', type: 'cable-tv' },
    ],
  },
  events: [
    {
      id: 'wec-2026-r01',
      round: 1,
      name: '6 Hours of Imola',
      circuit: { name: 'Autodromo Enzo e Dino Ferrari', city: 'Imola', country: 'Italy', countryCode: 'IT', timezone: 'Europe/Rome' },
      sessions: [
        fp1('2026-04-17T08:15:00Z'),
        fp2('2026-04-17T13:15:00Z'),
        fp3('2026-04-18T08:30:00Z'),
        qualifying('2026-04-18T12:30:00Z'),
        h6('2026-04-19T11:00:00Z'),
      ],
    },
    {
      id: 'wec-2026-r02',
      round: 2,
      name: 'TotalEnergies 6 Hours of Spa-Francorchamps',
      circuit: { name: 'Circuit de Spa-Francorchamps', city: 'Stavelot', country: 'Belgium', countryCode: 'BE', timezone: 'Europe/Brussels' },
      sessions: [
        fp1('2026-05-07T09:00:00Z'),
        fp2('2026-05-07T13:40:00Z'),
        fp3('2026-05-08T08:10:00Z'),
        qualifying('2026-05-08T12:30:00Z'),
        h6('2026-05-09T12:00:00Z'),
      ],
    },
    {
      id: 'wec-2026-r03',
      round: 3,
      name: '24 Hours of Le Mans',
      circuit: { name: 'Circuit de la Sarthe', city: 'Le Mans', country: 'France', countryCode: 'FR', timezone: 'Europe/Paris' },
      sessions: [
        fp1('2026-06-10T12:00:00Z'),
        { type: 'quali', label: 'Qualifying', start: '2026-06-10T16:45:00Z', durationMinutes: 60 },
        fp2('2026-06-10T20:00:00Z'),
        fp3('2026-06-11T12:45:00Z'),
        { type: 'quali', label: 'Hyperpole', start: '2026-06-11T18:00:00Z', durationMinutes: 120 },
        { type: 'fp3', label: 'Free Practice 4', start: '2026-06-11T21:00:00Z', durationMinutes: 60 },
        { type: 'race', label: 'Warmup', start: '2026-06-13T10:00:00Z', durationMinutes: 15 },
        h24('2026-06-13T14:00:00Z'),
      ],
    },
    {
      id: 'wec-2026-r04',
      round: 4,
      name: '6 Hours of São Paulo',
      circuit: { name: 'Autodromo José Carlos Pace', city: 'São Paulo', country: 'Brazil', countryCode: 'BR', timezone: 'America/Sao_Paulo' },
      sessions: [
        fp1('2026-07-10T14:00:00Z'),
        fp2('2026-07-10T18:50:00Z'),
        fp3('2026-07-11T13:10:00Z'),
        qualifying('2026-07-11T17:30:00Z'),
        h6('2026-07-12T14:30:00Z'),
      ],
    },
    {
      id: 'wec-2026-r05',
      round: 5,
      name: 'Lone Star Le Mans',
      circuit: { name: 'Circuit of the Americas', city: 'Austin', country: 'United States', countryCode: 'US', timezone: 'America/Chicago' },
      sessions: [
        fp1('2026-09-04T15:30:00Z'),
        fp2('2026-09-04T20:10:00Z'),
        fp3('2026-09-05T14:30:00Z'),
        qualifying('2026-09-05T18:30:00Z'),
        h6('2026-09-06T17:00:00Z'),
      ],
    },
    {
      id: 'wec-2026-r06',
      round: 6,
      name: '6 Hours of Fuji',
      circuit: { name: 'Fuji Speedway', city: 'Oyama', country: 'Japan', countryCode: 'JP', timezone: 'Asia/Tokyo' },
      sessions: [
        fp1('2026-09-25T01:00:00Z'),
        fp2('2026-09-25T05:40:00Z'),
        fp3('2026-09-26T01:00:00Z'),
        qualifying('2026-09-26T05:30:00Z'),
        h6('2026-09-27T03:00:00Z'),
      ],
    },
    {
      id: 'wec-2026-r07',
      round: 7,
      name: 'Qatar 1812km',
      circuit: { name: 'Lusail International Circuit', city: 'Lusail', country: 'Qatar', countryCode: 'QA', timezone: 'Asia/Qatar' },
      sessions: [
        fp1('2026-10-22T08:00:00Z'),
        fp2('2026-10-22T12:40:00Z'),
        fp3('2026-10-23T08:00:00Z'),
        qualifying('2026-10-23T11:30:00Z'),
        h12('2026-10-24T09:00:00Z'),
      ],
    },
    {
      id: 'wec-2026-r08',
      round: 8,
      name: 'Bapco Energies 8 Hours of Bahrain',
      circuit: { name: 'Bahrain International Circuit', city: 'Sakhir', country: 'Bahrain', countryCode: 'BH', timezone: 'Asia/Bahrain' },
      sessions: [
        fp1('2026-11-05T08:00:00Z'),
        fp2('2026-11-05T12:40:00Z'),
        fp3('2026-11-06T08:00:00Z'),
        qualifying('2026-11-06T11:30:00Z'),
        h8('2026-11-07T10:00:00Z'),
      ],
    },
  ],
}
