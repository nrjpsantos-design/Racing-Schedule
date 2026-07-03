'use client'

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

const ClockContext = createContext<Date>(new Date())

export function ClockProvider({ children }: { children: ReactNode }) {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1_000)
    return () => clearInterval(id)
  }, [])

  return <ClockContext.Provider value={now}>{children}</ClockContext.Provider>
}

export function useClock(): Date {
  return useContext(ClockContext)
}
