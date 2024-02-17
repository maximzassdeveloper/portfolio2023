import { Metadata } from 'next'
import { Page404 } from '@/screens/Page404'

export const metadata: Metadata = {
	title: 'Page not found',
	description: 'Something went wrong',
}

export default function NotFoundPage() {
	return <Page404 />
}
