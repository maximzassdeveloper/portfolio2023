import { useEffect } from 'react'
import { gsap } from 'gsap'
import sItem from './ExperienceItem/experience-item.module.scss'

export const useExperienceAnimations = () => {
  useEffect(() => {
    const blocks = document.querySelectorAll('.' + sItem.item)

    // glow first block
    gsap.to(blocks[0], {
      scrollTrigger: {
        trigger: blocks[0],
        start: 'top 80%',
      },
      onStart() {
        blocks[0].classList.add(sItem.animated)
      },
    })

    // glow blocks when the line reached them
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#experienceBlocks',
        start: 'top 40%',
        end: 'bottom 90%',
        scrub: true,
      },
    })

    for (let i = 0; i < blocks.length - 1; i++) {
      const block = blocks[i]

      const line = block.querySelector('.' + sItem.line)
      if (!line) continue
      tl.to(line, {
        height: 'calc(100% - 40px)',
        onComplete() {
          const nextBlock = blocks[i + 1]
          nextBlock?.classList.add(sItem.animated)
        },
      })
    }
  }, [])
}
