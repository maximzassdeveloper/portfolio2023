import { useCallback, useEffect } from 'react'

export const useMagnetic = (el: HTMLElement | null, power = 8) => {
  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!el) return

      const target = e.currentTarget as HTMLElement
      const hWidth = target.offsetWidth / 2
      const hHeight = target.offsetHeight / 2
      const x = e.offsetX > hWidth ? e.offsetX - hWidth : -(hWidth - e.offsetX)
      const y = e.offsetY > hHeight ? e.offsetY - hHeight : -(hHeight - e.offsetY)

      el.style.transform = `translate(${x / power}px, ${y / power}px)`
    },
    [el, power]
  )

  const onMouseLeave = useCallback(() => {
    if (!el) return

    el.style.transform = `translate(0, 0)`
  }, [el])

  useEffect(() => {
    el?.addEventListener('mousemove', onMouseMove)
    el?.addEventListener('mouseleave', onMouseLeave)

    return () => {
      el?.removeEventListener('mousemove', onMouseMove)
      el?.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [el, onMouseMove, onMouseLeave])
}
