import { FC } from 'react'
import { Section, Typography } from '@/components/ui'
import { WorkList } from './WorkList/WorkList'
import s from './works.module.scss'
import { classNames } from '@/shared/libs/classNames'

interface WorkSectionProps {
  className?: string
}

export const WorksSection: FC<WorkSectionProps> = ({ className }) => {
  return (
    <Section
      id='works'
      className={classNames(s.works, className)}
      addonAfterContainer={<WorkList />}
    >
      <Typography
        level='h2'
        animate
        data-scroll
        data-scroll-speed='-0.5'
      >
        /Некоторые из моих работ
      </Typography>
    </Section>
  )
}
