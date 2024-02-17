'use client'

import { FC } from 'react'
import { Section, Typography } from '@/components/ui'
import { WorkList } from './WorkList/WorkList'
import { classNames } from '@/shared/libs/classNames'
import { IWork } from '@/shared/types'
import s from './works.module.scss'

interface WorkSectionProps {
  works: IWork[]
  className?: string
}

export const WorksSection: FC<WorkSectionProps> = (props) => {
  const { works, className } = props

  return (
    <Section
      id='works'
      className={classNames(s.works, className)}
      addonAfterContainer={<WorkList works={works} />}
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
