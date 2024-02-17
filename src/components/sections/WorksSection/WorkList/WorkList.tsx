import { FC, useRef, useState } from 'react'
import { Work } from '../Work/Work'
import { WorkHover } from '../WorkHover/WorkHover'
import { IWork } from '@/shared/types'
import { useCursorHover } from '@/components/ui/CustomCursor'
import s from './work-list.module.scss'

interface WorkListProps {
	works: IWork[]
}

export const WorkList: FC<WorkListProps> = (props) => {
	const { works } = props
	const [workIndex, setWorkIndex] = useState(-1)
	const worksListRef = useRef<HTMLDivElement>(null)

	useCursorHover({
		el: worksListRef.current,
		cursorClass: 'hoverWork',
		onMouseLeave: () => {
			setWorkIndex(-1)
		},
	})

	const onMouseEnterWork = (index: number) => {
		setWorkIndex(index)
	}

	return (
		<div ref={worksListRef} className={s.worksList}>
			<WorkHover workIndex={workIndex} works={works} />

			{works.map((work, index) => (
				<Work key={work.id} work={work} onMouseEnter={() => onMouseEnterWork(index)} />
			))}
		</div>
	)
}
