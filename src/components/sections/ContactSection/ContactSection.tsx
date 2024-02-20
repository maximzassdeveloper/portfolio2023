'use client'

import { FC, useEffect, useState } from 'react'
import { Typography, SocialList, Section } from '@/components/ui'
import s from './contact.module.scss'
import { classNames } from '@/shared/libs/classNames'

interface ContactSectionProps {
	className?: string
}

export const ContactSection: FC<ContactSectionProps> = (props) => {
	const { className } = props
	const [linkArrowSize, setLinkArrowSize] = useState(20)

	useEffect(() => {
		if (window.innerWidth < 600) {
			setLinkArrowSize(14)
		}
	}, [])

	return (
		<Section
			id='contact'
			className={classNames(s.contact, className)}
			containerClassName={s.container}
		>
			<div className={s.info}>
				<Typography className={s.title} animate data-scroll>
					Контакты
				</Typography>

				<SocialList linkClassName={s.link} showLinkArrow linkArrowSize={linkArrowSize} />
			</div>
		</Section>
	)
}
