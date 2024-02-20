import { FC } from 'react'
import { Button, Container, Typography } from '@/components/ui'
import s from './error-page.module.scss'

interface ErrorPageProps {
	title: string
	buttonText: string
	onButtonClick?: () => void
}

export const ErrorPage: FC<ErrorPageProps> = (props) => {
	const { title, buttonText, onButtonClick } = props

	return (
		<Container className={s.errorPage}>
			<Typography className={s.title} level='h1'>
				{title}
			</Typography>
			<Button onClick={onButtonClick}>{buttonText}</Button>
		</Container>
	)
}
