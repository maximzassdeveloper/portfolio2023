import { useEffect } from 'react'
import { useAppContext } from '../context'
import { useLatest } from './useLatest'

export const useAnimation = (callback: (...args: any[]) => void, animate: boolean = true) => {
  const { smoothScroll } = useAppContext()
  const latestCallback = useLatest(callback)

  useEffect(() => {
    const handler = () => {
      if (animate && smoothScroll) {
        latestCallback.current()
      }
    }

    handler()

    window.addEventListener('resize', handler)

    return () => {
      window.removeEventListener('resize', handler)
    }
  }, [latestCallback, smoothScroll, animate])
}
