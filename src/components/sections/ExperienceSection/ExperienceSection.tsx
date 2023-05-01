import { FC } from 'react'
import { Section, Typography } from '@/components/ui'
import { classNames } from '@/shared/libs/classNames'
import { ExperienceItem } from './ExperienceItem/ExperienceItem'
import { useExperienceAnimations } from './experienceAnimations'
import { blocks } from './experienceData'
import s from './experience.module.scss'

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

      <div id='experienceBlocks'>
        {blocks.map((item, index) => (
          <ExperienceItem
            key={item.name + index}
            item={item}
            index={index}
          />
        ))}
      </div>
    </Section>
  )
}
