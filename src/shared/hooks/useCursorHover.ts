import { useCallback, useEffect } from 'react'
import { useAppContext } from '../context'
import { useLatest } from './useLatest'
import styles from '@/components/ui/CustomCursor/cursor.module.scss'

interface HookProps {
  el: HTMLElement | null
  cursorClass?: string
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
