import { Metadata } from 'next'
import { Contact } from '@/screens/Contact'

export const metadata: Metadata = {
	title: 'Контакты | Максим Засс',
	description: 'Контакты | Максим Засс',
}

const ContactPage = () => {
	return <Contact />
}

export default ContactPage
