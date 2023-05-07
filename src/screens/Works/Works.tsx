import { FC } from 'react'
import { WorksSection } from '@/components/sections'
import { Main } from '@/components/ui'
import { IWork } from '@/shared/types'
import s from './works.module.scss'

interface WorksProps {
  works: IWork[]
}

export const Works: FC<WorksProps> = ({ works }) => {
  return (
    <Main title='Работы'>
      <WorksSection
        className={s.works}
        works={works}
      />
    </Main>
  )
}
