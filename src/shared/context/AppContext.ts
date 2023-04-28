import LocomotiveScroll from 'locomotive-scroll'
import { createContext, useContext, RefObject } from 'react'

export type CustomLocomotiveScroll = LocomotiveScroll & {
  off: (eventName: string, callback: (...args: any[]) => void) => void
}

export interface AppContextValue {
  locoScroll: CustomLocomotiveScroll | null
  setLocoScroll: (locoScroll: CustomLocomotiveScroll | null) => void
  cursorRef: RefObject<HTMLDivElement>
}

export const AppContext = createContext({} as AppContextValue)
export const useAppContext = () => useContext(AppContext)
