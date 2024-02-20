import { CSSProperties, ReactNode, useEffect, useRef, useState } from 'react'
import { classNames } from '@/shared/libs/classNames'
import { imgPath } from '@/shared/libs/helper'
import s from './collapse.module.scss'
import { useCursorHover } from '@/components/ui/CustomCursor/useCursorHover'

interface CollapseProps {
  title?: string
  defaultIsOpen?: boolean
  children: ReactNode
  className?: string
}

export const Collapse = (props: CollapseProps) => {
  const { title, children, defaultIsOpen = false, className } = props

  const [isOpen, setIsOpen] = useState(defaultIsOpen)
  const [contentHeight, setContentHeight] = useState(0)
  const contentRef = useRef<HTMLDivElement>(null)
  const togglerRef = useRef<HTMLDivElement>(null)
  useCursorHover({ el: togglerRef.current, cursorClass: 'hoverLink' })

  const togglerHandler = () => {
    setIsOpen((prev) => !prev)
  }

  useEffect(() => {
    if (!contentRef.current) return

    const { height } = contentRef.current.getBoundingClientRect()
    setContentHeight(height)

    setTimeout(() => {
      if (!contentRef.current) return
      contentRef.current.style.position = 'static'
      contentRef.current.style.visibility = 'visible'
      contentRef.current.style.opacity = '1'
      contentRef.current.style.zIndex = '1'
    }, 0)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const customHeight = contentHeight ? (isOpen ? contentHeight + 'px' : 0 + 'px') : undefined

  const cssForHide: CSSProperties = {
    visibility: !defaultIsOpen ? 'hidden' : undefined,
    position: !defaultIsOpen ? 'absolute' : undefined,
    opacity: !defaultIsOpen ? '0' : undefined,
    zIndex: !defaultIsOpen ? '-100' : undefined,
  }

  return (
    <div className={classNames(s.collapse, className, { [s.isOpen]: isOpen })}>
      <div className={s.header}>
        {title}
        <div
          ref={togglerRef}
          className={s.toggler}
          onClick={togglerHandler}
        >
          <img
            src={imgPath('/plus.svg')}
            alt=''
          />
          Подробнее
        </div>
      </div>
      <div
        ref={contentRef}
        className={s.content}
        style={{
          height: customHeight,
          ...cssForHide,
        }}
      >
        {children}
      </div>
    </div>
  )
}
