import { Metadata } from 'next'
import { Works } from '@/screens/Works'
import { workService } from '@/shared/services/workService'

export const metadata: Metadata = {
	title: 'Проекты | Максим Засс',
	description: 'Проекты | Максим Засс',
}

const WorksPage = async () => {
	const result = await workService.getWorks()
	
	return <Works works={result.data} />
}

export default WorksPage
