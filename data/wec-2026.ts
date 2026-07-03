import type { Championship, Session } from '@/types'

const fp1 = (start: string): Session => ({ type: 'fp1', label: 'Free Practice 1', start, durationMinutes: 60 })
const fp2 = (start: string): Session => ({ type: 'fp2', label: 'Free Practice 2', start, durationMinutes: 60 })
const hyperpole = (start: string): Session => ({ type: 'quali', label: 'Hyperpole', start, durationMinutes: 30 })
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
      name: 'Qatar Airways Qatar 1812km',
      circuit: { name: 'Lusail International Circuit', city: 'Lusail', country: 'Qatar', countryCode: 'QA', timezone: 'Asia/Qatar' },
      sessions: [fp1('2026-02-27T09:30:00Z'), fp2('2026-02-28T09:30:00Z'), hyperpole('2026-02-28T15:00:00Z'), h12('2026-03-01T12:00:00Z')],
    },
    {
      id: 'wec-2026-r02',
      round: 2,
      name: '6 Hours of Imola',
      circuit: { name: 'Autodromo Enzo e Dino Ferrari', city: 'Imola', country: 'Italy', countryCode: 'IT', timezone: 'Europe/Rome' },
      sessions: [fp1('2026-04-17T09:00:00Z'), fp2('2026-04-18T09:00:00Z'), hyperpole('2026-04-18T14:00:00Z'), h6('2026-04-19T11:00:00Z')],
    },
    {
      id: 'wec-2026-r03',
      round: 3,
      name: 'TotalEnergies 6 Hours of Spa-Francorchamps',
      circuit: { name: 'Circuit de Spa-Francorchamps', city: 'Stavelot', country: 'Belgium', countryCode: 'BE', timezone: 'Europe/Brussels' },
      sessions: [fp1('2026-05-08T09:00:00Z'), fp2('2026-05-09T09:00:00Z'), hyperpole('2026-05-09T14:00:00Z'), h6('2026-05-10T11:30:00Z')],
    },
    {
      id: 'wec-2026-r04',
      round: 4,
      name: '24 Hours of Le Mans',
      circuit: { name: 'Circuit de la Sarthe', city: 'Le Mans', country: 'France', countryCode: 'FR', timezone: 'Europe/Paris' },
      sessions: [
        fp1('2026-06-12T08:00:00Z'),
        fp2('2026-06-12T16:00:00Z'),
        { type: 'quali', label: 'Hyperpole (Night)', start: '2026-06-13T20:00:00Z', durationMinutes: 30 },
        h24('2026-06-14T12:00:00Z'),
      ],
    },
    {
      id: 'wec-2026-r05',
      round: 5,
      name: '6 Hours of São Paulo',
      circuit: { name: 'Autodromo José Carlos Pace', city: 'São Paulo', country: 'Brazil', countryCode: 'BR', timezone: 'America/Sao_Paulo' },
      sessions: [fp1('2026-07-10T14:00:00Z'), fp2('2026-07-11T14:00:00Z'), hyperpole('2026-07-11T18:00:00Z'), h6('2026-07-12T17:00:00Z')],
    },
    {
      id: 'wec-2026-r06',
      round: 6,
      name: '6 Hours of Fuji',
      circuit: { name: 'Fuji Speedway', city: 'Oyama', country: 'Japan', countryCode: 'JP', timezone: 'Asia/Tokyo' },
      sessions: [fp1('2026-09-11T04:00:00Z'), fp2('2026-09-12T04:00:00Z'), hyperpole('2026-09-12T09:00:00Z'), h6('2026-09-13T05:30:00Z')],
    },
    {
      id: 'wec-2026-r07',
      round: 7,
      name: 'Bapco Energies 8 Hours of Bahrain',
      circuit: { name: 'Bahrain International Circuit', city: 'Sakhir', country: 'Bahrain', countryCode: 'BH', timezone: 'Asia/Bahrain' },
      sessions: [fp1('2026-10-30T08:00:00Z'), fp2('2026-10-31T08:00:00Z'), hyperpole('2026-10-31T14:00:00Z'), h8('2026-11-01T12:00:00Z')],
    },
  ],
}
