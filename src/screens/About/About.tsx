import { FC } from 'react'
import { AboutSection, ExperienceSection } from '@/components/sections'
import { Main } from '@/components/ui'
import s from './about.module.scss'

export const About: FC = () => {
  return (
    <Main title='Обо мне'>
      <AboutSection className={s.about} />
      <ExperienceSection className={s.experience} />
    </Main>
  )
}
