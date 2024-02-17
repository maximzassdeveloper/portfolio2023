import { FC, useEffect, useMemo, useRef, useState } from 'react'
import { Button, CustomLink, NavList, Container } from '@/components/ui'

import { headerAnimations } from './headerAnimation'

import { useAppContext } from '@/shared/context'
import { filePath } from '@/shared/libs/helper'
import { classNames } from '@/shared/libs/classNames'
import { useAnimation } from '@/shared/hooks/useAnimation'
import s from './header.module.scss'
import { ScrollStatus } from 'smooth-scrollbar/interfaces'

export const Header: FC = () => {
	const header = useRef<HTMLDivElement>(null)
	const oldY = useRef(0)
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const { smoothScroll } = useAppContext()

	const animations = useMemo(() => headerAnimations(), [])
	useAnimation(() => {
		animations.logo()
		if (window.innerWidth > 768) {
			animations.navLinks()
			animations.button()
		}
		animations.burger()
	})

	const burgerHandler = () => {
		if (isMobileMenuOpen) {
			animations.closeMobileMenu()
			// document.documentElement.style.overflowY = 'auto'
		} else {
			animations.openMobileMenu()
			header.current?.classList.remove(s.hidden)
			// document.documentElement.style.overflowY = 'hidden'
		}
		setIsMobileMenuOpen((prev) => !prev)
	}

	// Show header on scroll up
	const onScroll = (status: ScrollStatus) => {
		if (!header.current) return
		if (status.offset.y > header.current.offsetHeight && status.offset.y > oldY.current) {
			header.current.classList.add(s.hidden)
		} else {
			header.current.classList.remove(s.hidden)
		}
		oldY.current = status.offset.y
	}

	useEffect(() => {
		smoothScroll?.addListener(onScroll)
		header.current?.classList.remove(s.hidden)

		return () => {
			smoothScroll?.removeListener(onScroll)
		}
	}, [smoothScroll])

	return (
		<>
			<header className={s.header} ref={header}>
				<Container className={s.container}>
					<div className={s.logo}>
						<CustomLink className={s.link} href='/'>
							М. Засс
						</CustomLink>
					</div>

					<nav className={s.menu}>
						<NavList linkClassName={s.link} />
					</nav>

					<Button className={s.button} size='small'>
						<CustomLink href={filePath('resume-maxim-zass.pdf')} blank animateOnHover={false}>
							Резюме
						</CustomLink>
					</Button>

					<span className={s.burger} onClick={burgerHandler} />
				</Container>
			</header>

			<div className={classNames(s.mobile, { [s.active]: isMobileMenuOpen })}>
				<Container className={s.container}>
					<nav className={s.menu}>
						<NavList onLinkClick={burgerHandler} linkClassName={s.link} />
					</nav>

					<Button className={s.button} size='small'>
						<CustomLink href={filePath('resume-maxim-zass.pdf')} blank animateOnHover={false}>
							Резюме
						</CustomLink>
					</Button>
				</Container>
			</div>
		</>
	)
}
