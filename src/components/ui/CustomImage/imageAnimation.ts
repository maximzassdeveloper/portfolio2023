import { gsap } from 'gsap'
import { RefObject } from 'react'

export const imageAnimation = (ref: RefObject<HTMLDivElement>) => {
  if (!ref.current) return

  gsap.to(ref.current, {
    scrollTrigger: {
      trigger: ref.current,
      start: 'top 60%'
    },
    duration: .2,
    opacity: 1,
    y: 0,
  })

  const imgs = ref.current.querySelectorAll('img')
  if (!imgs?.length) return

  gsap.to(imgs, {
    scrollTrigger: {
      trigger: ref.current,
      start: 'top 60%'
    },
    duration: .2,
    scale: 1
  })
}