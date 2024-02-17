'use client'

import { FC } from 'react'
import { AboutSection, ExperienceSection } from '@/components/sections'
import { Page } from '@/components/Page'
import s from './about.module.scss'

export const About: FC = () => {
	return (
		<Page>
			<AboutSection className={s.about} />
			<ExperienceSection className={s.experience} />
		</Page>
	)
}
