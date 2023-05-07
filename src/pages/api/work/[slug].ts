import { works } from '@/shared/data'
import { IWork } from '@/shared/types'
import { NextApiRequest, NextApiResponse } from 'next'

export default function getWork(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query

  if (!slug || Array.isArray(slug)) {
    return res.status(400).json({ message: 'Work nout found' })
  }

  const foundedIndex = works.findIndex((work) => work.slug === slug)
  const foundedWork = works[foundedIndex]
  if (!foundedWork) {
    return res.status(400).json({ message: 'Work nout found' })
  }

  let nextWork: IWork | null = null

  switch (foundedIndex) {
    case works.length - 1:
      nextWork = works[0]
      break
    default:
      nextWork = works[foundedIndex + 1]
      break
  }

  res.status(200).json({ work: foundedWork, nextWork })
}
