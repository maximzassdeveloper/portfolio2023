import { FC, ReactNode } from 'react'
import { classNames } from '@/shared/libs/classNames'
import s from './container.module.scss'

interface ContaineProps {
  className?: string
  children?: ReactNode
}

export const Container: FC<ContaineProps> = (props) => {
  const { children, className } = props

  return <div className={classNames(s.container, className)}>{children}</div>
}
