import type { GetServerSideProps, NextPage } from 'next'
import { Home } from '@/screens/Home'
import { workService } from '@/shared/services/workService'
import { IWork } from '@/shared/types'

interface HomeProps {
  works: IWork[]
}

const HomePage: NextPage<HomeProps> = ({ works }) => {
  return <Home works={works} />
}

export default HomePage

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

