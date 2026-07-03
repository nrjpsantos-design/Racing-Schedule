'use client'

import { format, parseISO } from 'date-fns'
import { toZonedTime } from 'date-fns-tz'

export const COMMON_TIMEZONES = [
  { label: 'Brasília (BRT -3)', value: 'America/Sao_Paulo' },
  { label: 'New York (ET)', value: 'America/New_York' },
  { label: 'Chicago (CT)', value: 'America/Chicago' },
  { label: 'Denver (MT)', value: 'America/Denver' },
  { label: 'Los Angeles (PT)', value: 'America/Los_Angeles' },
  { label: 'London (BST/GMT)', value: 'Europe/London' },
  { label: 'Lisbon (WET/WEST)', value: 'Europe/Lisbon' },
  { label: 'Paris / Berlin (CET)', value: 'Europe/Paris' },
  { label: 'Moscow (MSK +3)', value: 'Europe/Moscow' },
  { label: 'Dubai (GST +4)', value: 'Asia/Dubai' },
  { label: 'Mumbai (IST +5:30)', value: 'Asia/Kolkata' },
  { label: 'Singapore (SGT +8)', value: 'Asia/Singapore' },
  { label: 'Tokyo (JST +9)', value: 'Asia/Tokyo' },
  { label: 'Sydney (AEST)', value: 'Australia/Sydney' },
  { label: 'Auckland (NZST)', value: 'Pacific/Auckland' },
  { label: 'UTC', value: 'UTC' },
]

export function getBrowserTimezone(): string {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone
  } catch {
    return 'UTC'
  }
}

export function getBrowserRegion(): string {
  try {
    const lang = navigator.language || navigator.languages?.[0] || 'en'
    const parts = lang.split('-')
    if (parts.length >= 2) return parts[parts.length - 1].toUpperCase()
    // Fallback by timezone
    const tz = getBrowserTimezone()
    if (tz.startsWith('America/Sao_Paulo') || tz.startsWith('America/Manaus')) return 'BR'
    if (tz.startsWith('America/New_York') || tz.startsWith('America/Chicago') || tz.startsWith('America/Los_Angeles')) return 'US'
    if (tz.startsWith('Europe/London')) return 'UK'
    if (tz.startsWith('Europe/Berlin')) return 'DE'
    if (tz.startsWith('Europe/Rome')) return 'IT'
    if (tz.startsWith('Europe/Amsterdam')) return 'NL'
    return 'GLOBAL'
  } catch {
    return 'GLOBAL'
  }
}

export function formatInTimezone(utcDateStr: string, timezone: string, fmt: string): string {
  const date = parseISO(utcDateStr)
  const zonedDate = toZonedTime(date, timezone)
  return format(zonedDate, fmt)
}

export function formatSessionTime(utcDateStr: string, timezone: string): string {
  return formatInTimezone(utcDateStr, timezone, 'HH:mm')
}

export function formatSessionDate(utcDateStr: string, timezone: string): string {
  return formatInTimezone(utcDateStr, timezone, 'EEE, MMM d')
}

export function formatSessionDateTime(utcDateStr: string, timezone: string): string {
  return formatInTimezone(utcDateStr, timezone, "EEE MMM d · HH:mm")
}

export function getTimezoneAbbr(timezone: string): string {
  try {
    const now = new Date()
    const formatter = new Intl.DateTimeFormat('en', { timeZone: timezone, timeZoneName: 'short' })
    const parts = formatter.formatToParts(now)
    return parts.find(p => p.type === 'timeZoneName')?.value ?? timezone
  } catch {
    return timezone
  }
}

export function getLocalDateFromUTC(utcDateStr: string, timezone: string): Date {
  return toZonedTime(parseISO(utcDateStr), timezone)
}
