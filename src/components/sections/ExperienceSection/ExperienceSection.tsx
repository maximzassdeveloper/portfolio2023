import { FC } from 'react'
import { Collapse, Section, Typography } from '@/components/ui'
import { classNames } from '@/shared/libs/classNames'
import { useExperienceAnimations } from './experienceAnimations'
import s from './experience.module.scss'

interface IExperience {
  name: string
  date: string
  desc: string
}

const blocks: IExperience[] = [
  {
    name: 'Osmi cards',
    date: 'Октябрь 2022 - настоящее время',
    desc: `Разработка новых проектов: построение  архитектуры, настройка сборки\n\nПоддержка основных продуктов компании:
    обновление функционала, фиксы\n\nРазработка админ-панели`,
  },
  {
    name: 'Gemma Cosmetics',
    date: 'Апрель 2022 - Июль 2022',
    desc: 'Описание',
  },
  {
    name: 'Фриланс: стек React',
    date: 'Август 2021 - Март 2022',
    desc: 'Описание',
  },
  {
    name: 'Фриланс: стек WordPress',
    date: 'Август 2019 - Июнь 2021',
    desc: 'Описание',
  },
]

interface ExperienceSectionProps {
  className?: string
}

export const ExperienceSection: FC<ExperienceSectionProps> = ({ className }) => {
  useExperienceAnimations()

  return (
    <Section
      id='experience'
      className={classNames(s.experience, className)}
    >
      <Typography
        level='h2'
        animate
        data-scroll
        data-scroll-speed='-0.5'
      >
        /Опыт работы
      </Typography>
      {blocks.map((item, index) => (
        <div
          key={index}
          className={s.item}
        >
          <div className={s.itemNumber}>0{index}/</div>
          {index !== blocks.length - 1 && (
            <div
              className={s.itemLine}
              data-index={index}
            />
          )}
          <div className={s.itemContent}>
            <Typography
              animate
              className={s.itemTitle}
              level='h3'
            >
              {item.name}
            </Typography>
            <span className={s.itemDate}>{item.date}</span>
            <Collapse defaultIsOpen={index === 0}>
              <Typography level='p'>{item.desc}</Typography>
            </Collapse>
          </div>
        </div>
      ))}
    </Section>
  )
}
