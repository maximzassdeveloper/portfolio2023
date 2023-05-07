import { useEffect } from 'react'
import { useAppContext } from '../context'
import { useLatest } from './useLatest'

export const useAnimation = (callback: (...args: any[]) => void, animate: boolean = true) => {
  const { locoScroll } = useAppContext()
  const latestCallback = useLatest(callback)

  useEffect(() => {
    const handler = () => {
      latestCallback.current()
    }

    if (!!locoScroll && animate) {
      handler()
    }

    window.addEventListener('resize', handler)

    return () => {
      window.removeEventListener('resize', handler)
    }
  }, [latestCallback, locoScroll, animate])
}
