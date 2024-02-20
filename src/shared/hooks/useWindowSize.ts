import { useCallback, useEffect, useState } from 'react'
import { useDebounce } from './useDebounce'

interface WindowSize {
  width: number
  height: number
}

export const useWindowSize = () => {
  const [size, setSize] = useState<WindowSize>({ width: 0, height: 0 })
  const debouncedSize = useDebounce(size, 300)

  const resizeHandler = useCallback(() => {
    setSize({ width: window.innerWidth, height: window.innerHeight })
  }, [])

  useEffect(() => {
    window.addEventListener('resize', resizeHandler)

    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, [resizeHandler])

  return debouncedSize
}
