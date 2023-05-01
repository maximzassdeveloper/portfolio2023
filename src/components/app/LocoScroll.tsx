import { FC, useEffect, RefObject, memo, useCallback } from 'react'
import { useRouter } from 'next/router'
import { gsap } from 'gsap'

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { CustomEase } from 'gsap/dist/CustomEase'
import { useAppContext } from '@/shared/context'

gsap.registerPlugin(ScrollTrigger, CustomEase)

interface LocoScrollProps {
  scrollContainer: RefObject<HTMLDivElement>
}

export const LocoScroll: FC<LocoScrollProps> = memo(({ scrollContainer }) => {
  const { setLocoScroll, locoScroll: locoScrollFromContext } = useAppContext()
  const { asPath } = useRouter()

  const locoScrollInit = useCallback(() => {
    const LocomotiveScroll = require('locomotive-scroll').default
    const locoScroll = new LocomotiveScroll({
      el: scrollContainer.current,
      smooth: true,
      multiplier: 0.7,
      touchMultiplier: 6,
      tablet: {
        smooth: true,
        breakpoint: 992,
      },
      smartphone: {
        smooth: true,
      },
      // tablet: {
      //   breakpoint: 992,
      // },
    } as LocomotiveScroll.InstanceOptions)

    return { locoScroll, scrollContainer }
  }, [scrollContainer])

  useEffect(() => {
    const { locoScroll } = locoScrollInit()
    if (!locoScroll) return

    ScrollTrigger.scrollerProxy(scrollContainer.current, {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }
      },
      pinType: scrollContainer.current?.style.transform ? 'transform' : 'fixed',
    })

    const onLocoScroll = () => ScrollTrigger.update()
    const locoUpdate = () => locoScroll.update()

    locoScroll.on('scroll', onLocoScroll)
    ScrollTrigger.defaults({ scroller: scrollContainer.current })
    ScrollTrigger.addEventListener('refresh', locoUpdate)
    ScrollTrigger.refresh()

    setLocoScroll(locoScroll)

    return () => {
      locoScroll.off('scroll', onLocoScroll)
      ScrollTrigger.removeEventListener('refresh', locoUpdate)
      locoScroll.destroy()
      setLocoScroll(null)
    }
  }, [asPath, setLocoScroll, scrollContainer, locoScrollInit])

  useEffect(() => {
    locoScrollFromContext && locoScrollFromContext.scrollTo(0, { duration: 0 })
  }, [locoScrollFromContext])

  return <></>
})
