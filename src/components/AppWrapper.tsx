'use client'

import { ReactNode, useRef } from 'react'
import { AppContextProvider } from '@/shared/context'
import { CustomCursor } from './ui/CustomCursor'
import { SmoothScrollbar } from './SmoothScrollbar'
import { Header } from './widgets/Header/Header'
import { Footer } from './widgets/Footer/Footer'
import { usePathname } from 'next/navigation'
import { ThreeJsSection } from './sections'

interface AppWrapperProps {
	children: ReactNode
}

export const AppWrapper = (props: AppWrapperProps) => {
	const { children } = props
	const scrollContainer = useRef<HTMLDivElement>(null)
	const pathname = usePathname()

	const isHome = pathname === '/'

	return (
		<AppContextProvider>
			<div className='wrapper'>
				<CustomCursor />
				<SmoothScrollbar scrollContainer={scrollContainer} />

				<Header />
				{isHome && <ThreeJsSection />}
				<div ref={scrollContainer}>
					<div>
						{children}
						<Footer />
					</div>
				</div>
			</div>
		</AppContextProvider>
	)
}
