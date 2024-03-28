import { useEffect } from 'react'
import { useAppContext } from '../context'
import { useEvent } from './useEvent'

export const useAnimation = (callback: (...args: any[]) => void, animate: boolean = true) => {
  const { smoothScroll } = useAppContext()
  const latestCallback = useEvent(callback)

  useEffect(() => {
    const handler = () => {
      if (animate) {
        latestCallback()
      }
    }

    handler()

    window.addEventListener('resize', handler)
    return () => {
      window.removeEventListener('resize', handler)
    }
  }, [latestCallback, smoothScroll, animate])
}
