import { FC, ReactNode } from 'react'
import { Container } from './Container/Container'

interface SectionProps {
  id?: string
  className?: string
  containerClassName?: string
  addonAfterContainer?: ReactNode
  children?: ReactNode
}

export const Section: FC<SectionProps> = (props) => {
  const { children, id, className, containerClassName, addonAfterContainer } = props

  return (
    <section
      id={id}
      className={className}
      data-scroll-section
    >
      <Container className={containerClassName}>{children}</Container>
      {addonAfterContainer}
    </section>
  )
}
