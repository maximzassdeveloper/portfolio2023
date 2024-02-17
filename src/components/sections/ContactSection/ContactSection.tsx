'use client'

import { FC, useEffect, useState } from 'react'
import { Typography, SocialList, Section } from '@/components/ui'
import s from './contact.module.scss'

export const ContactSection: FC = () => {
  const [linkArrowSize, setLinkArrowSize] = useState(20)

  useEffect(() => {
    if (window.innerWidth < 600) {
      setLinkArrowSize(14)
    }
  }, [])

  return (
    <Section
      id='contact'
      className={s.contact}
      containerClassName={s.container}
    >
      <div className={s.info}>
        <Typography
          className={s.title}
          animate
          data-scroll
        >
          Контакты
        </Typography>

        <SocialList
          linkClassName={s.link}
          showLinkArrow
          linkArrowSize={linkArrowSize}
        />
      </div>
    </Section>
  )
}
