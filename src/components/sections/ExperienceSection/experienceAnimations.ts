import { useEffect } from 'react'
import { gsap } from 'gsap'
import s from './experience.module.scss'

export const useExperienceAnimations = () => {
  useEffect(() => {
    const blocks = document.querySelectorAll('.' + s.item)

    // glow first block
    gsap.to(blocks[0], {
      scrollTrigger: {
        trigger: blocks[0],
        start: 'top 80%',
      },
      onStart() {
        blocks[0].classList.add(s.itemAnimated)
      },
    })

    // glow blocks when the line reached them
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#experience',
        start: 'top 40%',
        end: 'bottom 90%',
        scrub: true,
      },
    })

    for (let i = 0; i < blocks.length - 1; i++) {
      const block = blocks[i]

      const line = block.querySelector('.' + s.itemLine)
      tl.to(line, {
        height: '100%',
        onComplete() {
          const nextBlock = blocks[i + 1]
          nextBlock?.classList.add(s.itemAnimated)
        },
      })
    }
  }, [])
}
