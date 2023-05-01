import { FC, MouseEventHandler } from 'react'
import { Typography, CustomLink, Container, CustomImage } from '@/components/ui'
import { IWork } from '@/shared/types'
import { imgPath } from '@/shared/libs/helper'
import s from './work.module.scss'

interface WorkProps {
  work: IWork
  onMouseEnter?: MouseEventHandler<HTMLDivElement>
  onMouseLeave?: MouseEventHandler<HTMLDivElement>
}

export const Work: FC<WorkProps> = (props) => {
  const { work, onMouseEnter, onMouseLeave } = props

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <CustomLink
        className={s.work}
        href={`/work/${work.slug}`}
        animateOnHover={false}
      >
        <Container>
          <Typography
            className={s.title}
            animate
            level='h3'
          >
            {work.name}
          </Typography>
          <CustomImage
            className={s.image}
            src={imgPath(work.preview)}
            alt={work.name + 'Image'}
          />
        </Container>
      </CustomLink>
    </div>
  )
}
