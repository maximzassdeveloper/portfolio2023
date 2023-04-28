import { FC } from 'react'
import { ContactSection } from '@/components/sections'
import { Main } from '@/components/ui'

export const Contact: FC = () => {
  return (
    <Main title='Контакты'>
      <ContactSection />
    </Main>
  )
}
