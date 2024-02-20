import { NextResponse, NextRequest } from 'next/server'
import { notFound } from 'next/navigation'
import { IWork } from '@/shared/types'
import { works } from '@/shared/data'

interface GetProps {
  params: { slug: string }
}

export async function GET(request: NextRequest, { params }: GetProps) {
  const { slug } = params

  if (!slug || typeof slug !== 'string') {
    return notFound()
  }

  const workIndex = works.findIndex((work) => work.slug === slug)
  const work = works[workIndex]
  if (!work) {
    return notFound()
  }

  let nextWork: IWork | null = null

  switch (workIndex) {
    case works.length - 1:
      nextWork = works[0]
      break
    default:
      nextWork = works[workIndex + 1]
      break
  }

  return NextResponse.json({ work, nextWork })
}
