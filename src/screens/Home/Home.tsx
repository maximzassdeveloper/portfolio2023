import { FC } from 'react'
import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  FirstSection,
  WorksSection,
} from '@/components/sections'
import { Main } from '@/components/ui'
import { IWork } from '@/shared/types'
import { works } from '@/shared/data'

interface HomeProps {
  works: IWork[]
}

export const Home: FC<HomeProps> = () => {
  return (
    <Main>
      <FirstSection />
      <AboutSection />
      <ExperienceSection />
      <WorksSection works={works} />
      <ContactSection />
    </Main>
  )
}
