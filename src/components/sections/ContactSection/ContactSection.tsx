import { FC, useMemo } from 'react'
import { Typography, SocialList, Section } from '@/components/ui'
import s from './contact.module.scss'

export const ContactSection: FC = () => {
  const linkArrowSize = useMemo(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth > 600 ? 20 : 14
    } else {
      return 20
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
