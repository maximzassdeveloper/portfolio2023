import { FC } from 'react'
import { Collapse, Typography } from '@/components/ui'
import { IExperience } from '../experienceData'
import { blocks } from '../experienceData'
import s from './experience-item.module.scss'

interface ExperienceItemProps {
  item: IExperience
  index: number
}

export const ExperienceItem: FC<ExperienceItemProps> = (props) => {
  const { item, index } = props

  return (
    <div
      className={s.item}
      data-index={index}
    >
      <div className={s.number}>0{index}/</div>
      {index !== blocks.length - 1 && (
        <div
          className={s.line}
          data-index={index}
        />
      )}
      <div className={s.content}>
        <Typography
          animate
          className={s.name}
          level='h3'
        >
          {item.name}
        </Typography>

        <span className={s.date}>{item.date}</span>
        <span className={s.position}>{item.position}</span>

        <div className={s.desc}>{item.desc}</div>
        {/* <Collapse>
          <div className={s.desc}>{item.desc}</div>
        </Collapse> */}
      </div>
    </div>
  )
}
