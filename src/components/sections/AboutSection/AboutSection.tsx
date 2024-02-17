'use client'

import { FC } from 'react'
import { Section, Typography } from '@/components/ui'
import { classNames } from '@/shared/libs/classNames'
import { skills } from '@/shared/data'
import s from './about.module.scss'

interface AboutSectionProps {
  className?: string
}

export const AboutSection: FC<AboutSectionProps> = ({ className }) => {
  return (
    <Section
      id='about'
      className={classNames(s.about, className)}
    >
      <div className={s.content}>
        <div
          id='textBlock1'
          className={s.textBlock}
        >
          <div className={s.left}>
            <Typography
              level='h2'
              className={s.title}
              animate
              data-scroll
            >
              /Обо мне
            </Typography>
          </div>
          <div className={s.right}>
            <Typography
              level='p'
              className={s.text}
              animate
              data-scroll
            >
              Я всегда хотел создавать что-то новое и интересное. Занятие веб-разработкой многое
              изменило для меня, и с тех пор я стараюсь продвигать свою работу к новым горизонтам и
              с каждым проектом повышать их качество и свои навыки.
            </Typography>

            <Typography
              level='p'
              className={s.text}
              animate
              data-scroll
            >
              Для меня важно, чтобы сайт был максимально удобным, лёгким и эстетичным. Сайт должен
              приносить пользу и помогать решать проблемы пользователей.
            </Typography>

            <Typography
              level='p'
              className={s.text}
              animate
              data-scroll
            >
              Я занимаюсь веб-разработкой более 3-х лет и успел поработать с разными технологиями.
            </Typography>
          </div>
        </div>

        {/* <div
          id='skills'
          className={s.skills}
        >
          {skills.map((skill, index) => (
            <div
              key={skill.title + index}
              className={s.skillItem}
            >
              <h4>{skill.title}</h4>
              <p>{skill.list}</p>
            </div>
          ))}
        </div> */}
      </div>
    </Section>
  )
}
