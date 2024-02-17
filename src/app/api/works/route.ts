import { NextRequest, NextResponse } from 'next/server'
import { works } from '@/shared/data'

export async function GET(request: NextRequest) {
  return NextResponse.json(works)
}
