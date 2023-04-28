import { useEffect } from 'react'
import { useAppContext } from '../context'

export const useAnimation = (animation: () => void, animate: boolean = true) => {
  const { locoScroll } = useAppContext()

  useEffect(() => {
    if (!!locoScroll && animate) {
      animation()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locoScroll, animate])
}
