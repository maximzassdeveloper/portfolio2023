import { FC, PropsWithChildren, useRef } from 'react'
import Link, { LinkProps } from 'next/link'
import { useCursorHover } from '@/shared/hooks/useCursorHover'
import { classNames } from '@/shared/libs/classNames'
import BlankArrowIcon from '@/shared/assets/icons/blank-arrow.svg'
import s from './link.module.scss'

interface CustomLinkProps extends LinkProps {
  href: string
  animateOnHover?: boolean
  showArrow?: boolean
  arrowSize?: number
  blank?: boolean
  className?: string
}

export const CustomLink: FC<PropsWithChildren<CustomLinkProps>> = ({
  children,
  href,
  animateOnHover = true,
  blank,
  className,
  showArrow = false,
  arrowSize = 14,
  onClick,
  ...rest
}) => {
  const link = useRef<HTMLAnchorElement>(null)
  useCursorHover({ el: link.current, cursorClass: 'hoverLink', active: animateOnHover })

  return (
    <Link
      href={href}
      passHref={blank}
      target={blank ? '_blank' : '_self'}
      {...rest}
    >
      <span
        ref={link}
        className={classNames(s.link, className)}
        rel={blank ? 'noopener' : undefined}
        onClick={onClick}
      >
        {children}
        {showArrow && blank && (
          <div
            className={s.arrow}
            style={{ marginLeft: `${arrowSize / 2}px` }}
          >
            <BlankArrowIcon
              height={arrowSize}
              width={arrowSize}
            />
          </div>
        )}
      </span>
    </Link>
  )
}
