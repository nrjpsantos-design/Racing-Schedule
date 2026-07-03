import type { Championship, Session } from '@/types'

const fp1 = (start: string): Session => ({ type: 'fp1', label: 'Free Practice 1', start, durationMinutes: 45 })
const fp2 = (start: string): Session => ({ type: 'fp2', label: 'Free Practice 2', start, durationMinutes: 45 })
const quali = (start: string): Session => ({ type: 'quali', label: 'Qualifying', start, durationMinutes: 30 })
const race1 = (start: string): Session => ({ type: 'race', label: 'Race 1', start, durationMinutes: 60 })
const race2 = (start: string): Session => ({ type: 'race', label: 'Race 2', start, durationMinutes: 60 })

export const DTM_2026: Championship = {
  id: 'dtm',
  name: 'Deutsche Tourenwagen Masters',
  shortName: 'DTM',
  vehicleType: 'car',
  category: 'touring',
  color: '#EA1F1F',
  textColor: '#FFFFFF',
  season: 2026,
  broadcasts: {
    DE: [
      { channel: 'SAT.1', type: 'free-tv' },
      { channel: 'ProSieben', type: 'free-tv', note: 'Selected rounds' },
      { channel: 'ran.de', type: 'free-streaming', url: 'https://www.ran.de/motorsport/dtm' },
    ],
    AT: [
      { channel: 'ServusTV', type: 'free-tv' },
      { channel: 'DTM.com', type: 'paid-streaming', url: 'https://www.dtm.com/en/live' },
    ],
    UK: [
      { channel: 'DTM.com', type: 'paid-streaming', url: 'https://www.dtm.com/en/live' },
    ],
    GLOBAL: [
      { channel: 'DTM.com', type: 'paid-streaming', url: 'https://www.dtm.com/en/live' },
    ],
  },
  events: [
    {
      id: 'dtm-2026-r01',
      round: 1,
      name: 'DTM Oschersleben',
      circuit: { name: 'Motorsport Arena Oschersleben', city: 'Oschersleben', country: 'Germany', countryCode: 'DE', timezone: 'Europe/Berlin' },
      sessions: [fp1('2026-05-02T09:00:00Z'), fp2('2026-05-02T13:00:00Z'), quali('2026-05-03T09:00:00Z'), race1('2026-05-03T12:00:00Z'), race2('2026-05-04T11:30:00Z')],
    },
    {
      id: 'dtm-2026-r02',
      round: 2,
      name: 'DTM Red Bull Ring',
      circuit: { name: 'Red Bull Ring', city: 'Spielberg', country: 'Austria', countryCode: 'AT', timezone: 'Europe/Vienna' },
      sessions: [fp1('2026-05-30T09:00:00Z'), fp2('2026-05-30T13:00:00Z'), quali('2026-05-31T09:00:00Z'), race1('2026-05-31T12:00:00Z'), race2('2026-06-01T11:30:00Z')],
    },
    {
      id: 'dtm-2026-r03',
      round: 3,
      name: 'DTM Norisring',
      circuit: { name: 'Norisring', city: 'Nuremberg', country: 'Germany', countryCode: 'DE', timezone: 'Europe/Berlin' },
      sessions: [fp1('2026-06-27T09:00:00Z'), fp2('2026-06-27T13:00:00Z'), quali('2026-06-28T09:00:00Z'), race1('2026-06-28T12:00:00Z'), race2('2026-06-29T11:30:00Z')],
    },
    {
      id: 'dtm-2026-r04',
      round: 4,
      name: 'DTM Nürburgring',
      circuit: { name: 'Nürburgring GP-Strecke', city: 'Nürburg', country: 'Germany', countryCode: 'DE', timezone: 'Europe/Berlin' },
      sessions: [fp1('2026-07-18T09:00:00Z'), fp2('2026-07-18T13:00:00Z'), quali('2026-07-19T09:00:00Z'), race1('2026-07-19T12:00:00Z'), race2('2026-07-20T11:30:00Z')],
    },
    {
      id: 'dtm-2026-r05',
      round: 5,
      name: 'DTM Lausitzring',
      circuit: { name: 'Lausitzring', city: 'Klettwitz', country: 'Germany', countryCode: 'DE', timezone: 'Europe/Berlin' },
      sessions: [fp1('2026-08-01T09:00:00Z'), fp2('2026-08-01T13:00:00Z'), quali('2026-08-02T09:00:00Z'), race1('2026-08-02T12:00:00Z'), race2('2026-08-03T11:30:00Z')],
    },
    {
      id: 'dtm-2026-r06',
      round: 6,
      name: 'DTM Sachsenring',
      circuit: { name: 'Sachsenring', city: 'Hohenstein-Ernstthal', country: 'Germany', countryCode: 'DE', timezone: 'Europe/Berlin' },
      sessions: [fp1('2026-08-22T09:00:00Z'), fp2('2026-08-22T13:00:00Z'), quali('2026-08-23T09:00:00Z'), race1('2026-08-23T12:00:00Z'), race2('2026-08-24T11:30:00Z')],
    },
    {
      id: 'dtm-2026-r07',
      round: 7,
      name: 'DTM Brands Hatch',
      circuit: { name: 'Brands Hatch', city: 'Longfield', country: 'Great Britain', countryCode: 'GB', timezone: 'Europe/London' },
      sessions: [fp1('2026-09-12T10:00:00Z'), fp2('2026-09-12T14:00:00Z'), quali('2026-09-13T10:00:00Z'), race1('2026-09-13T13:30:00Z'), race2('2026-09-14T12:30:00Z')],
    },
    {
      id: 'dtm-2026-r08',
      round: 8,
      name: 'DTM Hockenheim — Finale',
      circuit: { name: 'Hockenheimring Baden-Württemberg', city: 'Hockenheim', country: 'Germany', countryCode: 'DE', timezone: 'Europe/Berlin' },
      sessions: [fp1('2026-10-17T09:00:00Z'), fp2('2026-10-17T13:00:00Z'), quali('2026-10-18T09:00:00Z'), race1('2026-10-18T12:00:00Z'), race2('2026-10-19T11:30:00Z')],
    },
  ],
}
