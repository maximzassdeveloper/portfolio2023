import { FC, useState } from 'react'
import { Work } from '../Work/Work'
import { useAppContext } from '@/shared/context'
import { workService } from '@/shared/services/workService'
import { WorkHover } from '../WorkHover/WorkHover'
import s from './work-list.module.scss'

const works = workService.getWorks()

export const WorkList: FC = () => {
  const { cursorRef } = useAppContext()
  const [workIndex, setWorkIndex] = useState<number>(-1)

  const onMouseEnterWork = (index: number) => {
    setWorkIndex(index)
    if (!cursorRef.current) return
    cursorRef.current.style.mixBlendMode = 'normal'
  }

  const onMouseLeaveWorks = () => {
    setWorkIndex(-1)
    if (!cursorRef.current) return
    cursorRef.current.style.mixBlendMode = 'difference'
  }

  return (
    <div
      className={s.worksList}
      onMouseLeave={onMouseLeaveWorks}
    >
      <WorkHover
        workIndex={workIndex}
        works={works}
      />

      {works.map((work, index) => (
        <Work
          key={work.id}
          work={work}
          onMouseEnter={() => onMouseEnterWork(index)}
        />
      ))}
    </div>
  )
}
