'use client'

import { ReactNode, useMemo, useRef, useState } from 'react'
import { AppContext, AppContextValue } from './AppContext'

interface AppContextProviderProps {
  children: ReactNode
}

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [smoothScroll, setSmoothScroll] = useState<AppContextValue['smoothScroll']>(null)
  const cursorRef = useRef<HTMLDivElement>(null)

  const defaultValue: AppContextValue = useMemo(
    () => ({
      smoothScroll,
      setSmoothScroll,
      cursorRef,
    }),
    [smoothScroll]
  )

  return <AppContext.Provider value={defaultValue}>{children}</AppContext.Provider>
}
