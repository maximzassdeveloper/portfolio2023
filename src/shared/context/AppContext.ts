'use client'

import { createContext, useContext, RefObject } from 'react'
import { Scrollbar } from 'smooth-scrollbar/scrollbar'

export interface AppContextValue {
  smoothScroll: Scrollbar | null
  setSmoothScroll: (smoothScroll: Scrollbar | null) => void
  cursorRef: RefObject<HTMLDivElement>
}

export const AppContext = createContext({} as AppContextValue)
export const useAppContext = () => useContext(AppContext)
