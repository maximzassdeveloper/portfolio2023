import { useCallback, useEffect } from 'react'
import { useAppContext } from '../../../shared/context'
import { useLatest } from '../../../shared/hooks/useLatest'
import styles from './cursor.module.scss'

interface HookProps {
	el: HTMLElement | null
	cursorClass?: 'hoverLink' | 'hoverWork' | 'hoverInput'
	onMouseEnter?: (event: MouseEvent) => void
	onMouseLeave?: (event: MouseEvent) => void
	active?: boolean
}

export const useCursorHover = (props: HookProps) => {
	const { el, active = true } = props
	const { cursorRef } = useAppContext()
	const latestProps = useLatest(props)

	const mouseEnterHandler = useCallback(
		(e: MouseEvent) => {
			const { cursorClass, onMouseEnter } = latestProps.current

			if (cursorClass && styles[cursorClass]) {
				cursorRef.current?.classList.add(styles[cursorClass])
			}
			onMouseEnter?.(e)
		},
		[latestProps, cursorRef]
	)

	const mouseLeaveHandler = useCallback(
		(e: MouseEvent) => {
			const { cursorClass, onMouseLeave } = latestProps.current

			if (cursorClass && styles[cursorClass]) {
				cursorRef.current?.classList.remove(styles[cursorClass])
			}
			onMouseLeave?.(e)
		},
		[latestProps, cursorRef]
	)

	useEffect(() => {
		if (active) {
			el?.addEventListener('mouseenter', mouseEnterHandler)
			el?.addEventListener('mouseleave', mouseLeaveHandler)
		}

		return () => {
			el?.removeEventListener('mouseenter', mouseEnterHandler)
			el?.removeEventListener('mouseleave', mouseLeaveHandler)
		}
	}, [el, active, mouseEnterHandler, mouseLeaveHandler])
}
