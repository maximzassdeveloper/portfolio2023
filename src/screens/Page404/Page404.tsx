'use client'

import { FC } from 'react'
import { Button, CustomLink, Section } from '@/components/ui'
import { Page } from '@/components/Page'
import s from './page404.module.scss'

export const Page404: FC = () => {
	return (
		<Page>
			<Section className={s.notFound}>
				<h1 className={s.title}>404</h1>
				<h2 className={s.subtitle}>Страница не найдена ((0(</h2>

				<Button className={s.button} size='small'>
					<CustomLink href='/'>На главную</CustomLink>
				</Button>
			</Section>
		</Page>
	)
}
