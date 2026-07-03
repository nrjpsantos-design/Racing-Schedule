/**
 * Converts an ISO 3166-1 alpha-2 country code to a flag emoji.
 * e.g. "BR" → "🇧🇷", "GB" → "🇬🇧"
 */
export function getFlagEmoji(code: string): string {
  return code
    .toUpperCase()
    .split('')
    .map(c => String.fromCodePoint(127397 + c.charCodeAt(0)))
    .join('')
}
