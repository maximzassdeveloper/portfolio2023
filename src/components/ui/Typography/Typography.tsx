import { HTMLAttributes, ReactNode, useEffect, useRef } from 'react'
import SplitType from 'split-type'
import { typographyAnimation } from './typographyAnimation'
import { LocoScrollAttrs } from '@/shared/types'
import { useAnimation } from '@/shared/hooks/useAnimation'
import { classNames } from '@/shared/libs/classNames'
import s from './typography.module.scss'

interface TypographyProps extends LocoScrollAttrs, HTMLAttributes<HTMLElement> {
  level?: 'h1' | 'h2' | 'h3' | 'p'
  animate?: boolean | { splitText?: boolean }
  lineClassName?: string
  className?: string
  children?: ReactNode
}

export const Typography = (props: TypographyProps) => {
  const { children, level, animate, className, lineClassName, ...rest } = props
  const ref = useRef<HTMLHeadingElement>(null)
  const Tag = level ?? 'h2'

  useAnimation(() => setTimeout(() => typographyAnimation(ref, lineClassName, !!animate), 0))

  useEffect(() => {
    if (!animate || !ref.current) return
    if (typeof animate === 'object' && !animate.splitText) return

    const text = new SplitType(ref.current, {
      types: 'lines',
      lineClass: classNames('line', lineClassName),
    })

    const onResize = () => {
      text.split({
        types: 'lines',
        lineClass: classNames('line', lineClassName),
      })
    }

    document.body.addEventListener('resize', onResize)
    return () => {
      document.body.removeEventListener('resize', onResize)
    }
  }, [animate, lineClassName])

  const classes = classNames(className, {
    [s.splitText]: !!animate,
    [s.title]: level !== 'p',
  })

  return (
    <Tag
      ref={ref}
      className={classes}
      {...rest}
    >
      {children}
    </Tag>
  )
}
