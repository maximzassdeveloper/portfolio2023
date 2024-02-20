import { FC } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
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
            style={{ transform: `translateY(${-workIndex * 300}px)` }}
          >
            {works.map((work) => (
              <img
                key={work.id}
                className={s.hoverImage}
                width={500}
                height={300}
                src={imgPath(work.preview)}
                alt={`${work.name} preview on link`}
              />
            ))}
          </div>
        </div>
      )}
    </>,
    cursorRef.current
  )
}
