import { FC } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useAppContext } from '@/shared/context'
import { IWork } from '@/shared/types'
import { imgPath } from '@/shared/libs/helper'
import s from './work-hover.module.scss'

interface WorkHoverProps {
  works: IWork[]
  workIndex: number
}

export const WorkHover: FC<WorkHoverProps> = (props) => {
  const { works, workIndex } = props
  const { cursorRef } = useAppContext()

  if (!cursorRef.current) {
    return null
  }

  return createPortal(
    <AnimatePresence>
      {workIndex !== -1 && (
        <div className={s.hoverImages}>
          <motion.div
            className={s.hoverImagesContainer}
            style={{ top: `${-workIndex * 100}%` }}
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // exit={{ opacity: 0 }}
            transition={{
              type: 'spring',
              duration: 0.3,
            }}
          >
            {works.map((work) => (
              <motion.img
                layoutId={work.slug}
                key={work.id}
                className={s.hoverImage}
                src={imgPath(work.preview)}
                alt={work.name}
              />
            ))}
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    cursorRef.current
  )
}
