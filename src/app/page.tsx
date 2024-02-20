import { Home } from '@/screens/Home'
import { workService } from '@/shared/services/workService'

const HomePage = async () => {
	const result = await workService.getWorks()
	return <Home works={result.data} />
}

export default HomePage
