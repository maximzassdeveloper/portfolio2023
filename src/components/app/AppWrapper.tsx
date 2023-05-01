import { ReactNode, useRef } from 'react'
import { AppContextProvider } from '@/shared/context'
import { LocoScroll } from './LocoScroll'
import { CustomCursor } from '../ui/CustomCursor'

interface AppWrapperProps {
  children: ReactNode
}

export const AppWrapper = ({ children }: AppWrapperProps) => {
  const scrollContainer = useRef<HTMLDivElement>(null)

  return (
    <AppContextProvider>
      <div
        className='main'
        ref={scrollContainer}
        data-scroll-container
      >
        <CustomCursor />
        <LocoScroll scrollContainer={scrollContainer} />
        {children}
      </div>
    </AppContextProvider>
  )
}
