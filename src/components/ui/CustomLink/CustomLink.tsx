import { FC, PropsWithChildren, ReactNode, useRef } from 'react'
import Link, { LinkProps } from 'next/link'
import Image from 'next/image'
import { useCursorHover } from '@/components/ui/CustomCursor/useCursorHover'
import { classNames } from '@/shared/libs/classNames'
import { imgPath } from '@/shared/libs/helper'
import s from './link.module.scss'

interface CustomLinkProps extends LinkProps {
	href: string
	animateOnHover?: boolean
	showArrow?: boolean
	arrowSize?: number
	blank?: boolean
	className?: string
	containerClassName?: string
	children?: ReactNode
}

export const CustomLink: FC<CustomLinkProps> = ({
	children,
	href,
	animateOnHover = true,
	blank,
	className,
	containerClassName,
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
			className={containerClassName}
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
					<span className={s.arrow} style={{ marginLeft: `${arrowSize / 2}px` }}>
						<Image src={imgPath('/blank-arrow.svg')} alt='' width={arrowSize} height={arrowSize} />
					</span>
				)}
			</span>
		</Link>
	)
}
