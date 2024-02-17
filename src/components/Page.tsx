'use client'

import { FC, PropsWithChildren } from 'react'
import { Header } from '@/components/widgets/Header/Header'
import { Footer } from '@/components/widgets/Footer/Footer'

interface PageProps {
	className?: string
}

export const Page: FC<PropsWithChildren<PageProps>> = ({ children, className }) => {
	return <>{children}</>
}
