'use client'

import { forwardRef, useRef } from 'react'
import Image from 'next/image'

import s from './arrow.module.scss'
import { useAppContext } from '@/shared/context'
import { LocoScrollAttrs } from '@/shared/types'
import { useMagnetic } from '@/shared/hooks/useMagnetic'
import { useCursorHover } from '@/components/ui/CustomCursor/useCursorHover'
import { composeRef } from '@/shared/libs/composeRef'
import { classNames } from '@/shared/libs/classNames'
import { imgPath } from '@/shared/libs/helper'

interface ArrowProps extends LocoScrollAttrs {
  className?: string
  scrollTo?: string | number
}

export const Arrow = forwardRef<HTMLDivElement, ArrowProps>((props, ref) => {
  const { className, scrollTo, ...locoAttrs } = props
  const arrow = useRef<HTMLDivElement>(null)
  const { locoScroll } = useAppContext()
  useMagnetic(arrow.current)
  useCursorHover({ el: arrow.current, cursorClass: 'hoverLink' })

  const clickHandler = () => {
    // @ts-ignore
    locoScroll.scrollTo(scrollTo)
  }

  return (
    <div
      ref={composeRef(arrow, ref)}
      className={classNames(s.arrow, className)}
      onClick={clickHandler}
      {...locoAttrs}
    >
      <Image
        src={imgPath('/arrow-icon.svg')}
        alt='Arrow'
        width={66}
        height={60}
      />
    </div>
  )
})
