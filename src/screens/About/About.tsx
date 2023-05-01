import { FC } from 'react'
import { AboutSection, ExperienceSection } from '@/components/sections'
import { Main } from '@/components/ui'

export const About: FC = () => {
  return (
    <Main title='Обо мне'>
      <AboutSection />
      <ExperienceSection />
    </Main>
  )
}
