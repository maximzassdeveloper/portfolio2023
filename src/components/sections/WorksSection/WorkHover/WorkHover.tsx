import { FC } from 'react'
import { createPortal } from 'react-dom'
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
    <>
      {workIndex !== -1 && (
        <div className={s.hoverImages}>
          <div
            className={s.hoverImagesContainer}
            style={{ top: `${-workIndex * 100}%` }}
          >
            {works.map((work) => (
              <img
                key={work.id}
                className={s.hoverImage}
                src={imgPath(work.preview)}
                alt={work.name}
              />
            ))}
          </div>
        </div>
      )}
    </>,
    cursorRef.current
  )
}
