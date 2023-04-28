import { CSSProperties, ReactNode, useEffect, useRef, useState } from 'react'
import { classNames } from '@/shared/libs/classNames'
import PlusIcon from '@/shared/assets/icons/plus.svg'
import s from './collapse.module.scss'

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

  const togglerHandler = () => {
    setIsOpen((prev) => !prev)
  }

  useEffect(() => {
    if (!contentRef.current) return

    const { height } = contentRef.current.getBoundingClientRect()
    setContentHeight(height)
    contentRef.current.style.position = 'static'
    contentRef.current.style.visibility = 'visible'
    contentRef.current.style.zIndex = '1'
  }, [])

  const customHeight = contentHeight ? (isOpen ? contentHeight + 'px' : 0 + 'px') : undefined

  const cssForHide: CSSProperties = {
    visibility: !defaultIsOpen ? 'hidden' : undefined,
    position: !defaultIsOpen ? 'absolute' : undefined,
    zIndex: !defaultIsOpen ? '-100' : undefined,
  }

  return (
    <div className={classNames(s.collapse, className, { [s.isOpen]: isOpen })}>
      <div className={s.header}>
        {title}
        <div
          className={s.toggler}
          onClick={togglerHandler}
        >
          <PlusIcon />
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
