import { FC } from 'react'
import { Typography, Section } from '@/components/ui'
import { classNames } from '@/shared/libs/classNames'
import s from './first.module.scss'

export const FirstSection: FC = () => {
	return (
		<>
			<Section id='first' className={s.first}>
				<div className={s.content}>
					<Typography
						level='h1'
						className={classNames(s.title, s.firstPart)}
						animate={{ splitText: false }}
						lineClassName={s.line}
						data-scroll
					>
						<div className={s.line}>Максим</div>
						<div className={s.line}>Засс</div>
					</Typography>
					<Typography
						level='h1'
						className={classNames(s.title, s.secondPart)}
						animate={{ splitText: false }}
						lineClassName={s.line}
						data-scroll
					>
						<div className={s.line}>Фронтенд</div>
						<div className={s.line}>Разработчик</div>
					</Typography>
				</div>
			</Section>
		</>
	)
}
