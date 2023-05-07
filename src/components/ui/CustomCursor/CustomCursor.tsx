import { useRouter } from 'next/router'
import { FC, useCallback, useEffect } from 'react'
import { useAppContext } from '@/shared/context/AppContext'
import s from './cursor.module.scss'

export const CustomCursor: FC = () => {
  const router = useRouter()
  const { cursorRef: cursor } = useAppContext()

  const onDocumentMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!cursor.current) return
      cursor.current.style.left = e.pageX + 'px'
      cursor.current.style.top = e.pageY + 'px'
    },
    [cursor]
  )

  const onDocumentMouseDown = useCallback(() => {
    cursor.current?.classList.add(s.click)
  }, [cursor])

  const onDocumentMouseUp = useCallback(() => {
    cursor.current?.classList.remove(s.click)
  }, [cursor])

  useEffect(() => {
    // Clean classes on change page
    if (!cursor.current) return
    cursor.current.className = s.cursor
    cursor.current.style.background = '#fff'
  }, [router.pathname, cursor])

  useEffect(() => {
    document.addEventListener('mousemove', onDocumentMouseMove)
    document.addEventListener('mousedown', onDocumentMouseDown)
    document.addEventListener('mouseup', onDocumentMouseUp)

    return () => {
      document.removeEventListener('mousemove', onDocumentMouseMove)
      document.removeEventListener('mousedown', onDocumentMouseDown)
      document.removeEventListener('mouseup', onDocumentMouseUp)
    }
  }, [onDocumentMouseMove, onDocumentMouseDown, onDocumentMouseUp])

  return (
    <div
      className={s.cursor}
      ref={cursor}
    >
      <div className={s.cursorInner} />
    </div>
  )
}
