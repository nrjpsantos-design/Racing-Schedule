import type { Championship, Session } from '@/types'

const fp = (start: string): Session => ({ type: 'fp1', label: 'Free Practice', start, durationMinutes: 45 })
const superpole = (start: string): Session => ({ type: 'quali', label: 'Superpole', start, durationMinutes: 30 })
const race1 = (start: string): Session => ({ type: 'race', label: 'Race 1', start, durationMinutes: 40 })
const sprintRace = (start: string): Session => ({ type: 'sprint', label: 'Superpole Race', start, durationMinutes: 25 })
const race2 = (start: string): Session => ({ type: 'race', label: 'Race 2', start, durationMinutes: 40 })

const VP = { channel: 'WorldSBK VideoPass', type: 'paid-streaming' as const, url: 'https://www.worldsbk.com/en/videopass' }

export const WSBK_2026: Championship = {
  id: 'wsbk',
  name: 'World Superbike',
  shortName: 'WorldSBK',
  vehicleType: 'motorcycle',
  category: 'moto',
  color: '#0096DB',
  textColor: '#FFFFFF',
  season: 2026,
  broadcasts: {
    UK: [
      { channel: 'Eurosport', type: 'cable-tv' },
      { channel: 'discovery+', type: 'paid-streaming', url: 'https://www.discoveryplus.com' },
      VP,
    ],
    IT: [
      { channel: 'Sky Italia', type: 'cable-tv' },
      VP,
    ],
    DE: [
      { channel: 'Eurosport', type: 'cable-tv' },
      VP,
    ],
    GLOBAL: [VP],
  },
  events: [
    {
      id: 'wsbk-2026-r01',
      round: 1,
      name: 'Round 1 — Australia',
      circuit: { name: 'Phillip Island Grand Prix Circuit', city: 'Phillip Island', country: 'Australia', countryCode: 'AU', timezone: 'Australia/Melbourne' },
      sessions: [fp('2026-02-20T01:00:00Z'), superpole('2026-02-21T02:00:00Z'), race1('2026-02-21T05:00:00Z'), sprintRace('2026-02-22T03:00:00Z'), race2('2026-02-22T05:00:00Z')],
    },
    {
      id: 'wsbk-2026-r02',
      round: 2,
      name: 'Round 2 — Spain (Jerez)',
      circuit: { name: 'Circuito de Jerez - Ángel Nieto', city: 'Jerez de la Frontera', country: 'Spain', countryCode: 'ES', timezone: 'Europe/Madrid' },
      sessions: [fp('2026-03-06T10:00:00Z'), superpole('2026-03-07T10:00:00Z'), race1('2026-03-07T13:00:00Z'), sprintRace('2026-03-08T11:00:00Z'), race2('2026-03-08T13:00:00Z')],
    },
    {
      id: 'wsbk-2026-r03',
      round: 3,
      name: 'Round 3 — Netherlands',
      circuit: { name: 'TT Circuit Assen', city: 'Assen', country: 'Netherlands', countryCode: 'NL', timezone: 'Europe/Amsterdam' },
      sessions: [fp('2026-04-17T10:00:00Z'), superpole('2026-04-18T10:00:00Z'), race1('2026-04-18T13:00:00Z'), sprintRace('2026-04-19T11:00:00Z'), race2('2026-04-19T13:00:00Z')],
    },
    {
      id: 'wsbk-2026-r04',
      round: 4,
      name: 'Round 4 — Italy (Misano)',
      circuit: { name: 'Misano World Circuit Marco Simoncelli', city: 'Misano Adriatico', country: 'Italy', countryCode: 'IT', timezone: 'Europe/Rome' },
      sessions: [fp('2026-05-08T10:00:00Z'), superpole('2026-05-09T10:00:00Z'), race1('2026-05-09T13:00:00Z'), sprintRace('2026-05-10T10:30:00Z'), race2('2026-05-10T13:00:00Z')],
    },
    {
      id: 'wsbk-2026-r05',
      round: 5,
      name: 'Round 5 — Czech Republic (Most)',
      circuit: { name: 'Autodrom Most', city: 'Most', country: 'Czech Republic', countryCode: 'CZ', timezone: 'Europe/Prague' },
      sessions: [fp('2026-06-05T10:00:00Z'), superpole('2026-06-06T10:00:00Z'), race1('2026-06-06T13:00:00Z'), sprintRace('2026-06-07T11:00:00Z'), race2('2026-06-07T13:00:00Z')],
    },
    {
      id: 'wsbk-2026-r06',
      round: 6,
      name: 'Round 6 — Italy (Cremona)',
      circuit: { name: 'Cremona Circuit', city: 'Cremona', country: 'Italy', countryCode: 'IT', timezone: 'Europe/Rome' },
      sessions: [fp('2026-06-26T10:00:00Z'), superpole('2026-06-27T10:00:00Z'), race1('2026-06-27T13:00:00Z'), sprintRace('2026-06-28T10:30:00Z'), race2('2026-06-28T13:00:00Z')],
    },
    {
      id: 'wsbk-2026-r07',
      round: 7,
      name: 'Round 7 — Germany (Lausitzring)',
      circuit: { name: 'Lausitzring', city: 'Klettwitz', country: 'Germany', countryCode: 'DE', timezone: 'Europe/Berlin' },
      sessions: [fp('2026-07-31T10:00:00Z'), superpole('2026-08-01T10:00:00Z'), race1('2026-08-01T13:00:00Z'), sprintRace('2026-08-02T10:30:00Z'), race2('2026-08-02T13:00:00Z')],
    },
    {
      id: 'wsbk-2026-r08',
      round: 8,
      name: 'Round 8 — Portugal (Portimão)',
      circuit: { name: 'Algarve International Circuit', city: 'Portimão', country: 'Portugal', countryCode: 'PT', timezone: 'Europe/Lisbon' },
      sessions: [fp('2026-08-14T10:00:00Z'), superpole('2026-08-15T10:00:00Z'), race1('2026-08-15T13:00:00Z'), sprintRace('2026-08-16T10:30:00Z'), race2('2026-08-16T13:00:00Z')],
    },
    {
      id: 'wsbk-2026-r09',
      round: 9,
      name: 'Round 9 — France (Magny-Cours)',
      circuit: { name: 'Circuit de Nevers Magny-Cours', city: 'Magny-Cours', country: 'France', countryCode: 'FR', timezone: 'Europe/Paris' },
      sessions: [fp('2026-09-11T10:00:00Z'), superpole('2026-09-12T10:00:00Z'), race1('2026-09-12T13:00:00Z'), sprintRace('2026-09-13T10:30:00Z'), race2('2026-09-13T13:00:00Z')],
    },
    {
      id: 'wsbk-2026-r10',
      round: 10,
      name: 'Round 10 — Spain (Jerez II)',
      circuit: { name: 'Circuito de Jerez - Ángel Nieto', city: 'Jerez de la Frontera', country: 'Spain', countryCode: 'ES', timezone: 'Europe/Madrid' },
      sessions: [fp('2026-09-25T10:00:00Z'), superpole('2026-09-26T10:00:00Z'), race1('2026-09-26T13:00:00Z'), sprintRace('2026-09-27T10:30:00Z'), race2('2026-09-27T13:00:00Z')],
    },
    {
      id: 'wsbk-2026-r11',
      round: 11,
      name: 'Round 11 — Italy (Misano II)',
      circuit: { name: 'Misano World Circuit Marco Simoncelli', city: 'Misano Adriatico', country: 'Italy', countryCode: 'IT', timezone: 'Europe/Rome' },
      sessions: [fp('2026-10-09T10:00:00Z'), superpole('2026-10-10T10:00:00Z'), race1('2026-10-10T13:00:00Z'), sprintRace('2026-10-11T10:30:00Z'), race2('2026-10-11T13:00:00Z')],
    },
    {
      id: 'wsbk-2026-r12',
      round: 12,
      name: 'Round 12 — Indonesia',
      circuit: { name: 'Pertamina Mandalika Circuit', city: 'Lombok', country: 'Indonesia', countryCode: 'ID', timezone: 'Asia/Makassar' },
      sessions: [fp('2026-10-30T04:00:00Z'), superpole('2026-10-31T04:00:00Z'), race1('2026-10-31T07:00:00Z'), sprintRace('2026-11-01T03:00:00Z'), race2('2026-11-01T06:00:00Z')],
    },
  ],
}
