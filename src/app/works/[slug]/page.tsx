import { SingleWork } from '@/screens/SingleWork'
import { workService } from '@/shared/services/workService'
import { notFound } from 'next/navigation'

interface SingleWorkParams {
  slug: string
}

// not build with next api
// export async function generateStaticParams() {
// 	const { data: works } = await workService.getWorks()

// 	return works.map((work) => ({
// 		slug: work.slug,
// 	}))
// }

async function SingleWorkPage({ params }: { params: SingleWorkParams }) {
  const response = await workService.getWork(params.slug)
  const { work, nextWork } = response.data

  if (!work) {
    notFound()
  }

  return (
    <SingleWork
      work={work}
      nextWork={nextWork}
    />
  )
}

export default SingleWorkPage
