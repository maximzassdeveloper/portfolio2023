import { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import { AppWrapper } from '@/components/AppWrapper'
import { imgPath } from '@/shared/libs/helper'

import '@/styles/global.scss'

const manrope = Manrope({
	subsets: ['latin', 'cyrillic'],
	weight: ['400'],
	variable: '--font-manrope',
})

export const mainMetadata: Metadata = {
	title: 'Максим Засс',
	description: 'Личный сайт Максима Засс, frontend-разработчика',
	robots: {
		index: true,
		follow: true,
	},
	icons: [
		{
			rel: 'icon',
			sizes: '32x32',
			type: 'image/png',
			url: imgPath('/favicons/favicon32.png'),
		},
		{
			rel: 'icon',
			sizes: '16x16',
			type: 'image/png',
			url: imgPath('/favicons/favicon16.png'),
		},
		{
			rel: 'icon',
			sizes: '120x120',
			type: 'image/png',
			url: imgPath('/favicons/favicon120.png'),
		},
		{
			rel: 'apple-touch-icon',
			sizes: '180x180',
			url: imgPath('/favicons/favicon120.png'),
		},
	],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		/** suppressHydrationWarning - чтобы не ругалось на атрибуты расширений браузера  */
		<html lang='ru' suppressHydrationWarning>
			<body className={`overflow-hidden ${manrope.variable}`} suppressHydrationWarning>
				<AppWrapper>{children}</AppWrapper>
			</body>
		</html>
	)
}
