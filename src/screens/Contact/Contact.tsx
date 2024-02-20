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
}
