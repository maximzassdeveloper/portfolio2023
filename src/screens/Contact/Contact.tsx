<<<<<<< HEAD
import { FC } from 'react'
import { ContactSection } from '@/components/sections'
import { Main } from '@/components/ui'

export const Contact: FC = () => {
  return (
    <Main title='Контакты'>
      <ContactSection />
    </Main>
  )
=======
'use client'
import { FC } from 'react'
import { ContactSection } from '@/components/sections'
import { Page } from '@/components/Page'
import s from './contact.module.scss'

export const Contact: FC = () => {
	return (
		<Page>
			<ContactSection className={s.contact} />
		</Page>
	)
>>>>>>> next13
}
