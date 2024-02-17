import { Metadata } from 'next'
import { About } from '@/screens/About'

export const metadata: Metadata = {
	title: 'Обо мне | Максим Засс',
	description: 'Обо мне | Максим Засс',
}

const AboutPage = () => {
	return <About />
}

export default AboutPage
