import type { Championship, Session } from '@/types'

const fp1 = (start: string): Session => ({ type: 'fp1', label: 'Free Practice 1', start, durationMinutes: 60 })
const fp2 = (start: string): Session => ({ type: 'fp2', label: 'Free Practice 2', start, durationMinutes: 60 })
const fp3 = (start: string): Session => ({ type: 'fp3', label: 'Free Practice 3', start, durationMinutes: 60 })
const sq = (start: string): Session => ({ type: 'sprint_quali', label: 'Sprint Qualifying', start, durationMinutes: 45 })
const sprint = (start: string): Session => ({ type: 'sprint', label: 'Sprint', start, durationMinutes: 30 })
const quali = (start: string): Session => ({ type: 'quali', label: 'Qualifying', start, durationMinutes: 60 })
const race = (start: string): Session => ({ type: 'race', label: 'Race', start, durationMinutes: 120 })

export const F1_2026: Championship = {
  id: 'f1',
  name: 'Formula 1',
  shortName: 'F1',
  vehicleType: 'car',
  category: 'formula',
  color: '#E10600',
  textColor: '#FFFFFF',
  season: 2026,
  broadcasts: {
    BR: [
      { channel: 'Band', type: 'free-tv' },
      { channel: 'Globoplay', type: 'free-streaming', url: 'https://globoplay.globo.com' },
      { channel: 'SporTV', type: 'cable-tv' },
      { channel: 'F1 TV', type: 'paid-streaming', url: 'https://f1tv.formula1.com' },
    ],
    US: [
      { channel: 'ESPN', type: 'cable-tv' },
      { channel: 'ESPN+', type: 'paid-streaming', url: 'https://plus.espn.com' },
      { channel: 'F1 TV', type: 'paid-streaming', url: 'https://f1tv.formula1.com' },
    ],
    UK: [
      { channel: 'Sky Sports F1', type: 'cable-tv' },
      { channel: 'Channel 4', type: 'free-tv', note: 'Selected races' },
      { channel: 'F1 TV', type: 'paid-streaming', url: 'https://f1tv.formula1.com' },
    ],
    DE: [
      { channel: 'Sky Deutschland', type: 'cable-tv' },
      { channel: 'RTL', type: 'free-tv', note: 'Selected races' },
      { channel: 'F1 TV', type: 'paid-streaming', url: 'https://f1tv.formula1.com' },
    ],
    IT: [
      { channel: 'Sky Italia', type: 'cable-tv' },
      { channel: 'TV8', type: 'free-tv', note: 'Delayed/selected races' },
      { channel: 'F1 TV', type: 'paid-streaming', url: 'https://f1tv.formula1.com' },
    ],
    NL: [
      { channel: 'Viaplay', type: 'paid-streaming', url: 'https://viaplay.com' },
      { channel: 'F1 TV', type: 'paid-streaming', url: 'https://f1tv.formula1.com' },
    ],
    GLOBAL: [
      { channel: 'F1 TV', type: 'paid-streaming', url: 'https://f1tv.formula1.com' },
    ],
  },
  events: [
    {
      id: 'f1-2026-r01',
      round: 1,
      name: 'Bahrain Grand Prix',
      circuit: { name: 'Bahrain International Circuit', city: 'Sakhir', country: 'Bahrain', countryCode: 'BH', timezone: 'Asia/Bahrain' },
      sessions: [fp1('2026-03-06T10:30:00Z'), fp2('2026-03-06T14:00:00Z'), fp3('2026-03-07T10:30:00Z'), quali('2026-03-07T14:00:00Z'), race('2026-03-08T15:00:00Z')],
    },
    {
      id: 'f1-2026-r02',
      round: 2,
      name: 'Saudi Arabian Grand Prix',
      circuit: { name: 'Jeddah Corniche Circuit', city: 'Jeddah', country: 'Saudi Arabia', countryCode: 'SA', timezone: 'Asia/Riyadh' },
      sessions: [fp1('2026-03-20T14:30:00Z'), sq('2026-03-20T18:30:00Z'), sprint('2026-03-21T14:00:00Z'), quali('2026-03-21T18:00:00Z'), race('2026-03-22T17:00:00Z')],
    },
    {
      id: 'f1-2026-r03',
      round: 3,
      name: 'Australian Grand Prix',
      circuit: { name: 'Albert Park Circuit', city: 'Melbourne', country: 'Australia', countryCode: 'AU', timezone: 'Australia/Melbourne' },
      sessions: [fp1('2026-04-03T02:30:00Z'), fp2('2026-04-03T06:00:00Z'), fp3('2026-04-04T02:30:00Z'), quali('2026-04-04T06:00:00Z'), race('2026-04-05T05:00:00Z')],
    },
    {
      id: 'f1-2026-r04',
      round: 4,
      name: 'Japanese Grand Prix',
      circuit: { name: 'Suzuka International Racing Course', city: 'Suzuka', country: 'Japan', countryCode: 'JP', timezone: 'Asia/Tokyo' },
      sessions: [fp1('2026-04-17T02:30:00Z'), fp2('2026-04-17T06:00:00Z'), fp3('2026-04-18T02:30:00Z'), quali('2026-04-18T06:00:00Z'), race('2026-04-19T05:00:00Z')],
    },
    {
      id: 'f1-2026-r05',
      round: 5,
      name: 'Chinese Grand Prix',
      circuit: { name: 'Shanghai International Circuit', city: 'Shanghai', country: 'China', countryCode: 'CN', timezone: 'Asia/Shanghai' },
      sessions: [fp1('2026-04-24T03:30:00Z'), sq('2026-04-24T07:30:00Z'), sprint('2026-04-25T03:00:00Z'), quali('2026-04-25T07:00:00Z'), race('2026-04-26T07:00:00Z')],
    },
    {
      id: 'f1-2026-r06',
      round: 6,
      name: 'Miami Grand Prix',
      circuit: { name: 'Miami International Autodrome', city: 'Miami', country: 'United States', countryCode: 'US', timezone: 'America/New_York' },
      sessions: [fp1('2026-05-01T17:30:00Z'), sq('2026-05-01T21:30:00Z'), sprint('2026-05-02T16:30:00Z'), quali('2026-05-02T21:00:00Z'), race('2026-05-03T20:00:00Z')],
    },
    {
      id: 'f1-2026-r07',
      round: 7,
      name: 'Monaco Grand Prix',
      circuit: { name: 'Circuit de Monaco', city: 'Monte Carlo', country: 'Monaco', countryCode: 'MC', timezone: 'Europe/Monaco' },
      sessions: [fp1('2026-05-22T11:30:00Z'), fp2('2026-05-22T15:00:00Z'), fp3('2026-05-23T10:30:00Z'), quali('2026-05-23T14:00:00Z'), race('2026-05-24T13:00:00Z')],
    },
    {
      id: 'f1-2026-r08',
      round: 8,
      name: 'Spanish Grand Prix',
      circuit: { name: 'Circuit de Barcelona-Catalunya', city: 'Montmeló', country: 'Spain', countryCode: 'ES', timezone: 'Europe/Madrid' },
      sessions: [fp1('2026-06-05T11:30:00Z'), fp2('2026-06-05T15:00:00Z'), fp3('2026-06-06T10:30:00Z'), quali('2026-06-06T14:00:00Z'), race('2026-06-07T13:00:00Z')],
    },
    {
      id: 'f1-2026-r09',
      round: 9,
      name: 'Canadian Grand Prix',
      circuit: { name: 'Circuit Gilles Villeneuve', city: 'Montréal', country: 'Canada', countryCode: 'CA', timezone: 'America/Toronto' },
      sessions: [fp1('2026-06-19T17:30:00Z'), fp2('2026-06-19T21:00:00Z'), fp3('2026-06-20T17:00:00Z'), quali('2026-06-20T20:00:00Z'), race('2026-06-21T18:00:00Z')],
    },
    {
      id: 'f1-2026-r10',
      round: 10,
      name: 'Austrian Grand Prix',
      circuit: { name: 'Red Bull Ring', city: 'Spielberg', country: 'Austria', countryCode: 'AT', timezone: 'Europe/Vienna' },
      sessions: [fp1('2026-07-03T10:30:00Z'), sq('2026-07-03T15:00:00Z'), sprint('2026-07-04T10:30:00Z'), quali('2026-07-04T14:00:00Z'), race('2026-07-05T13:00:00Z')],
    },
    {
      id: 'f1-2026-r11',
      round: 11,
      name: 'British Grand Prix',
      circuit: { name: 'Silverstone Circuit', city: 'Silverstone', country: 'Great Britain', countryCode: 'GB', timezone: 'Europe/London' },
      sessions: [fp1('2026-07-17T12:30:00Z'), fp2('2026-07-17T16:00:00Z'), fp3('2026-07-18T11:30:00Z'), quali('2026-07-18T15:00:00Z'), race('2026-07-19T14:00:00Z')],
    },
    {
      id: 'f1-2026-r12',
      round: 12,
      name: 'Hungarian Grand Prix',
      circuit: { name: 'Hungaroring', city: 'Budapest', country: 'Hungary', countryCode: 'HU', timezone: 'Europe/Budapest' },
      sessions: [fp1('2026-07-31T11:30:00Z'), fp2('2026-07-31T15:00:00Z'), fp3('2026-08-01T10:30:00Z'), quali('2026-08-01T14:00:00Z'), race('2026-08-02T13:00:00Z')],
    },
    {
      id: 'f1-2026-r13',
      round: 13,
      name: 'Belgian Grand Prix',
      circuit: { name: 'Circuit de Spa-Francorchamps', city: 'Stavelot', country: 'Belgium', countryCode: 'BE', timezone: 'Europe/Brussels' },
      sessions: [fp1('2026-08-28T11:30:00Z'), fp2('2026-08-28T15:00:00Z'), fp3('2026-08-29T10:30:00Z'), quali('2026-08-29T14:00:00Z'), race('2026-08-30T13:00:00Z')],
    },
    {
      id: 'f1-2026-r14',
      round: 14,
      name: 'Dutch Grand Prix',
      circuit: { name: 'Circuit Zandvoort', city: 'Zandvoort', country: 'Netherlands', countryCode: 'NL', timezone: 'Europe/Amsterdam' },
      sessions: [fp1('2026-09-04T10:30:00Z'), fp2('2026-09-04T14:00:00Z'), fp3('2026-09-05T09:30:00Z'), quali('2026-09-05T13:00:00Z'), race('2026-09-06T13:00:00Z')],
    },
    {
      id: 'f1-2026-r15',
      round: 15,
      name: 'Italian Grand Prix',
      circuit: { name: 'Autodromo Nazionale Monza', city: 'Monza', country: 'Italy', countryCode: 'IT', timezone: 'Europe/Rome' },
      sessions: [fp1('2026-09-11T11:30:00Z'), fp2('2026-09-11T15:00:00Z'), fp3('2026-09-12T10:30:00Z'), quali('2026-09-12T14:00:00Z'), race('2026-09-13T13:00:00Z')],
    },
    {
      id: 'f1-2026-r16',
      round: 16,
      name: 'Azerbaijan Grand Prix',
      circuit: { name: 'Baku City Circuit', city: 'Baku', country: 'Azerbaijan', countryCode: 'AZ', timezone: 'Asia/Baku' },
      sessions: [fp1('2026-09-25T09:30:00Z'), fp2('2026-09-25T13:00:00Z'), fp3('2026-09-26T08:30:00Z'), quali('2026-09-26T12:00:00Z'), race('2026-09-27T11:00:00Z')],
    },
    {
      id: 'f1-2026-r17',
      round: 17,
      name: 'Singapore Grand Prix',
      circuit: { name: 'Marina Bay Street Circuit', city: 'Singapore', country: 'Singapore', countryCode: 'SG', timezone: 'Asia/Singapore' },
      sessions: [fp1('2026-10-02T09:30:00Z'), fp2('2026-10-02T13:00:00Z'), fp3('2026-10-03T09:30:00Z'), quali('2026-10-03T13:00:00Z'), race('2026-10-04T12:00:00Z')],
    },
    {
      id: 'f1-2026-r18',
      round: 18,
      name: 'United States Grand Prix',
      circuit: { name: 'Circuit of the Americas', city: 'Austin', country: 'United States', countryCode: 'US', timezone: 'America/Chicago' },
      sessions: [fp1('2026-10-16T18:30:00Z'), sq('2026-10-16T22:30:00Z'), sprint('2026-10-17T17:30:00Z'), quali('2026-10-17T22:00:00Z'), race('2026-10-18T19:00:00Z')],
    },
    {
      id: 'f1-2026-r19',
      round: 19,
      name: 'Mexico City Grand Prix',
      circuit: { name: 'Autodromo Hermanos Rodriguez', city: 'Mexico City', country: 'Mexico', countryCode: 'MX', timezone: 'America/Mexico_City' },
      sessions: [fp1('2026-10-23T18:30:00Z'), fp2('2026-10-23T22:00:00Z'), fp3('2026-10-24T17:30:00Z'), quali('2026-10-24T21:00:00Z'), race('2026-10-25T19:00:00Z')],
    },
    {
      id: 'f1-2026-r20',
      round: 20,
      name: 'São Paulo Grand Prix',
      circuit: { name: 'Autodromo José Carlos Pace', city: 'São Paulo', country: 'Brazil', countryCode: 'BR', timezone: 'America/Sao_Paulo' },
      sessions: [fp1('2026-11-06T14:30:00Z'), sq('2026-11-06T18:30:00Z'), sprint('2026-11-07T14:00:00Z'), quali('2026-11-07T17:00:00Z'), race('2026-11-08T17:00:00Z')],
    },
    {
      id: 'f1-2026-r21',
      round: 21,
      name: 'Las Vegas Grand Prix',
      circuit: { name: 'Las Vegas Strip Circuit', city: 'Las Vegas', country: 'United States', countryCode: 'US', timezone: 'America/Los_Angeles' },
      sessions: [fp1('2026-11-20T07:00:00Z'), fp2('2026-11-20T11:00:00Z'), fp3('2026-11-21T07:00:00Z'), quali('2026-11-21T10:00:00Z'), race('2026-11-22T06:00:00Z')],
    },
    {
      id: 'f1-2026-r22',
      round: 22,
      name: 'Qatar Grand Prix',
      circuit: { name: 'Lusail International Circuit', city: 'Lusail', country: 'Qatar', countryCode: 'QA', timezone: 'Asia/Qatar' },
      sessions: [fp1('2026-11-27T13:30:00Z'), sq('2026-11-27T17:30:00Z'), sprint('2026-11-28T13:00:00Z'), quali('2026-11-28T17:00:00Z'), race('2026-11-29T18:00:00Z')],
    },
    {
      id: 'f1-2026-r23',
      round: 23,
      name: 'Abu Dhabi Grand Prix',
      circuit: { name: 'Yas Marina Circuit', city: 'Abu Dhabi', country: 'United Arab Emirates', countryCode: 'AE', timezone: 'Asia/Dubai' },
      sessions: [fp1('2026-12-04T09:30:00Z'), fp2('2026-12-04T13:00:00Z'), fp3('2026-12-05T09:30:00Z'), quali('2026-12-05T13:00:00Z'), race('2026-12-06T13:00:00Z')],
    },
  ],
}
