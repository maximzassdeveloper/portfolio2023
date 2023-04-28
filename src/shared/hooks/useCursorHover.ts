import { useEffect } from 'react'
import styles from '@/components/ui/CustomCursor/cursor.module.scss'
import { useAppContext } from '../context'

interface HookProps {
  el: HTMLElement | null
  cursorClass?: string
  onMouseEnter?: (event: MouseEvent) => void
  onMouseLeave?: (event: MouseEvent) => void
  active?: boolean
}

export const useCursorHover = ({
  el,
  cursorClass,
  onMouseEnter,
  onMouseLeave,
  active = true,
}: HookProps) => {
  const { cursorRef } = useAppContext()

  const mouseEnterHandler = (e: MouseEvent) => {
    if (cursorClass && styles[cursorClass]) {
      cursorRef.current?.classList.add(styles[cursorClass])
    }
    onMouseEnter?.(e)
  }

  const mouseLeaveHandler = (e: MouseEvent) => {
    if (cursorClass && styles[cursorClass]) {
      cursorRef.current?.classList.remove(styles[cursorClass])
    }
    onMouseLeave?.(e)
  }

  useEffect(() => {
    if (active) {
      el?.addEventListener('mouseenter', mouseEnterHandler)
      el?.addEventListener('mouseleave', mouseLeaveHandler)
    }

    return () => {
      el?.removeEventListener('mouseenter', mouseEnterHandler)
      el?.removeEventListener('mouseleave', mouseLeaveHandler)
    }
  }, [el, active])
}
