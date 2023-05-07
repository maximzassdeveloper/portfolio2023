import { NextPage, GetServerSideProps } from 'next'
import { SingleWork } from '@/screens/SingleWork'
import { workService } from '@/shared/services/workService'
import { IWork } from '@/shared/types'

interface WorkPageProps {
  work: IWork
  nextWork: IWork | null
}

const WorkPage: NextPage<WorkPageProps> = ({ work, nextWork }) => {
  return (
    <SingleWork
      work={work}
      nextWork={nextWork}
    />
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const slug = `${params?.slug}`
    const response = await workService.getWork(slug)
    const { work, nextWork } = response.data

    if (!work) {
      return { notFound: true }
    }

    return {
      props: {
        work,
        nextWork,
      },
    }
  } catch {
    return { notFound: true }
  }
}

export default WorkPage
