import { works } from '@/shared/data'
import { NextApiRequest, NextApiResponse } from 'next'

export default function getWorks(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(works)
}
