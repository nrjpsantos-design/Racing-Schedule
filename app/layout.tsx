import type { Metadata } from 'next'
import { Space_Grotesk, DM_Sans } from 'next/font/google'
import { ClockProvider } from '@/lib/use-clock'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'RaceGrid — Agenda Global de Corridas',
  description: 'Calendário de corridas de Fórmula 1, MotoGP, Formula E, IndyCar e mais. Horários no seu fuso, onde assistir, links de transmissão.',
  keywords: 'formula 1, motogp, corridas, calendário, horários, transmissão, f1, moto',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${spaceGrotesk.variable} ${dmSans.variable} font-body antialiased bg-gray-950 text-gray-100`}>
        {/* Skip-to-content link — first focusable element */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-gray-900 focus:text-white focus:rounded-lg focus:ring-2 focus:ring-blue-400 focus:text-sm focus:font-semibold"
        >
          Skip to content
        </a>

        <ClockProvider>
          {children}
        </ClockProvider>
      </body>
    </html>
  )
}
