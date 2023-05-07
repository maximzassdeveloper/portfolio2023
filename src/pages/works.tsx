import type { GetServerSideProps, NextPage } from 'next'
import { Works } from '@/screens/Works'
import { IWork } from '@/shared/types'
import { workService } from '@/shared/services/workService'

interface WorksPageProps {
  works: IWork[]
}

const WorksPage: NextPage<WorksPageProps> = ({ works }) => {
  return <Works works={works} />
}

export default WorksPage

export const getServerSideProps: GetServerSideProps = async () => {
  let works: IWork[] = []
  try {
    const resp = await workService.getWorks()
    works = resp.data
  } catch {
    works = []
  }

  return {
    props: {
      works,
    },
  }
}
