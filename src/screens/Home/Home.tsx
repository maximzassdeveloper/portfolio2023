'use client'

import { FC } from 'react'
import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  FirstSection,
  WorksSection,
} from '@/components/sections'
import { Page } from '@/components/Page'
import { IWork } from '@/shared/types'
import { works } from '@/shared/data'

interface HomeProps {
  works: IWork[]
}

export const Home: FC<HomeProps> = () => {
  return (
    <Page>
      <FirstSection />
      <AboutSection />
      <ExperienceSection />
      <WorksSection works={works} />
      <ContactSection />
    </Page>
  )
}
