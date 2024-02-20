import { FC, MouseEventHandler } from 'react'
import Image from 'next/image'
import { Typography, CustomLink, Container } from '@/components/ui'
import { IWork } from '@/shared/types'
import { imgPath } from '@/shared/libs/helper'
import s from './work.module.scss'

interface WorkProps {
<<<<<<< HEAD
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
=======
	work: IWork
	onMouseEnter?: MouseEventHandler<HTMLDivElement>
	onMouseLeave?: MouseEventHandler<HTMLDivElement>
}

export const Work: FC<WorkProps> = (props) => {
	const { work, onMouseEnter, onMouseLeave } = props

	return (
		<div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
			<CustomLink className={s.work} href={`/works/${work.slug}`} animateOnHover={false}>
				<Container>
					<Typography className={s.title} animate level='h3'>
						{work.name}
					</Typography>

					<div className={s.imageContainer}>
						<Image
							className={s.image}
							fill
							style={{ objectFit: 'cover' }}
							src={imgPath(work.preview)}
							alt={work.name + 'preview'}
						/>
					</div>
				</Container>
			</CustomLink>
		</div>
	)
>>>>>>> next13
}
