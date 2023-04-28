import { ReactNode, useMemo, useRef, useState } from 'react'
import { AppContext, AppContextValue, CustomLocomotiveScroll } from './AppContext'

interface AppContextProviderProps {
  children: ReactNode
}

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [locoScroll, setLocoScroll] = useState<CustomLocomotiveScroll | null>(null)
  const cursorRef = useRef<HTMLDivElement>(null)

  const defaultValue: AppContextValue = useMemo(
    () => ({
      locoScroll,
      setLocoScroll,
      cursorRef,
    }),
    [locoScroll]
  )

  return <AppContext.Provider value={defaultValue}>{children}</AppContext.Provider>
}
