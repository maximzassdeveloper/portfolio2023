import { works } from '@/shared/data'

export const workService = {
  getWorks() {
    return works
  },
  getWork(slug: string) {
    return works.find((i) => i.slug === slug)
  },
  getNextWork(slug: string) {
    const currentIndex = works.findIndex((i) => i.slug === slug)

    switch (currentIndex) {
      case -1:
        return undefined
      case works.length - 1:
        return works[0]
      default:
        return works[currentIndex + 1]
    }
  },
}
