import { RefObject } from 'react'
import { gsap } from 'gsap'
import { CustomEase } from 'gsap/dist/CustomEase'
import s from './typography.module.scss'

export const typographyAnimation = (
  ref: RefObject<HTMLHeadingElement>,
  lineClassName?: string,
  animate?: boolean
) => {
  if (!ref.current || !animate) return

  const lines = ref.current.querySelectorAll(`.${lineClassName ?? 'line'}`)
  if (!lines?.length) return

  gsap.to(lines, {
    scrollTrigger: {
      trigger: ref.current,
      start: 'top 70%',
    },
    duration: 0.5,
    rotateX: 0,
    x: 0,
    y: '0px',
    z: 0,
    opacity: 1,
    stagger: 0.08,
    ease: CustomEase.create('custom', 'M0,0 C0,0 0.025,0.603 0.45,0.84 0.694,0.976 1,1 1,1'),
    onComplete: () => ref.current?.classList.add(s.detect),
  })
}
