import { FC, RefObject, useEffect } from 'react'
import Scrollbar from 'smooth-scrollbar'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { CustomEase } from 'gsap/dist/CustomEase'
import { useAppContext } from '@/shared/context'
import { useWindowSize } from '@/shared/hooks/useWindowSize'
import { usePathname } from 'next/navigation'

gsap.registerPlugin(ScrollTrigger, CustomEase)

interface SmoothScrollbarProps {
  scrollContainer: RefObject<HTMLDivElement>
}

export const SmoothScrollbar: FC<SmoothScrollbarProps> = (props) => {
  const { scrollContainer } = props
  const { setSmoothScroll } = useAppContext()
  const windowSize = useWindowSize()
  const pathname = usePathname()

  useEffect(() => {
    const container = scrollContainer.current
    if (!container) return

    const scrollbar = Scrollbar.init(container, {
      damping: window.innerWidth < 1200 ? 1 : 0.05,
      delegateTo: document,
    })

    // Connect gsap scrollTrigger
    ScrollTrigger.scrollerProxy(container, {
      scrollTop(value) {
        if (arguments.length) {
          scrollbar.scrollTop = value ?? 0
        }
        return scrollbar.scrollTop
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        }
      },
      pinType: scrollContainer.current?.style.transform ? 'transform' : 'fixed',
    })
    const onSmoothcroll = () => ScrollTrigger.update()
    const smoothScrollUpdate = () => scrollbar.update()

    scrollbar.addListener(onSmoothcroll)
    ScrollTrigger.defaults({ scroller: container })
    ScrollTrigger.addEventListener('refresh', smoothScrollUpdate)
    ScrollTrigger.refresh()

    setSmoothScroll(scrollbar)

    return () => {
      scrollbar.destroy()
      scrollbar.removeListener(onSmoothcroll)
      ScrollTrigger.removeEventListener('refresh', smoothScrollUpdate)
      ScrollTrigger.scrollerProxy(container)
    }
  }, [windowSize, pathname, scrollContainer, setSmoothScroll])

  return <></>
}
