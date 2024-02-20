<<<<<<< HEAD
import { FC } from 'react'
import { WorksSection } from '@/components/sections'
import { Main } from '@/components/ui'
import { IWork } from '@/shared/types'
import s from './works.module.scss'
import { works } from '@/shared/data'

interface WorksProps {
  works: IWork[]
}

export const Works: FC<WorksProps> = () => {
  return (
    <Main title='Работы'>
      <WorksSection
        className={s.works}
        works={works}
      />
    </Main>
  )
=======
'use client'

import { FC } from 'react'
import { WorksSection } from '@/components/sections'
import { Page } from '@/components/Page'
import { IWork } from '@/shared/types'
import { works } from '@/shared/data'
import s from './works.module.scss'

interface WorksProps {
	works: IWork[]
}

export const Works: FC<WorksProps> = () => {
	return (
		<Page>
			<WorksSection className={s.works} works={works} />
		</Page>
	)
>>>>>>> next13
}
