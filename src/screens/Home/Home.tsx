import { FC } from 'react'
import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  FirstSection,
  WorksSection,
} from '@/components/sections'
import { Main } from '@/components/ui'

export const Home: FC = () => {
  return (
    <Main>
      <FirstSection />
      <AboutSection />
      <ExperienceSection />
      <WorksSection />
      <ContactSection />
    </Main>
  )
}
