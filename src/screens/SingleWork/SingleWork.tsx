'use client'

import { FC } from 'react'
import { NextWork } from './NextWork/NextWork'
import WorkTemplate from './work-templates'
import { Container, CustomLink, Typography } from '@/components/ui'
import { Page } from '@/components/Page'
import { IWork } from '@/shared/types'
import { imgPath, isEmpty } from '@/shared/libs/helper'
import s from './single-work.module.scss'

interface SingleWorkProps {
	work: IWork
	nextWork: IWork | null
}

export const SingleWork: FC<SingleWorkProps> = ({ work, nextWork }) => {
	const Content = WorkTemplate[work.slug]

	return (
		<Page>
			<div className={s.work} data-scroll-section>
				<div className={s.bgWrapper}>
					<div className={s.bg} style={{ backgroundImage: `url(${imgPath(work.preview)})` }}>
						<div
							className={s.blurBg}
							style={{ backgroundImage: `url(${imgPath(work.preview)})` }}
						/>
					</div>
				</div>

				<Container>
					<Typography className={s.title} level='h1' data-scroll data-scroll-speed='2'>
						{work.name}
					</Typography>

					<div className={s.info}>
						<div className={s.line}>
							{work.role?.length && (
								<div className={s.list}>
									<Typography level='h3'>Роль</Typography>
									{work.role.map((roleName) => (
										<span key={roleName}>{roleName}</span>
									))}
								</div>
							)}
							{work.stack?.length && (
								<div className={s.list}>
									<Typography level='h3'>Технологии</Typography>
									{work.stack.map((tech) => (
										<span key={tech}>{tech}</span>
									))}
								</div>
							)}
						</div>

						<p className={s.desc}>{work.desc}</p>

						{work.links && !isEmpty(work.links) && (
							<div className={s.links}>
								{Object.entries(work.links).map(([name, url]) => (
									<CustomLink className={s.link} key={name + url} href={url} blank showArrow>
										{name}
									</CustomLink>
								))}
							</div>
						)}
					</div>

					<div className={s.content}>{Content && <Content />}</div>
				</Container>

				<NextWork work={nextWork} />
			</div>
		</Page>
	)
}
