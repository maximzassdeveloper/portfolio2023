import { FC, useRef } from 'react'
import Image, { ImageProps } from 'next/image'
import { imageAnimation } from './imageAnimation'
import { useAnimation } from '@/shared/hooks/useAnimation'
import { classNames } from '@/shared/libs/classNames'
import s from './image.module.scss'

interface CustomImageProps extends ImageProps {
	src: string
	animate?: boolean
	dataScroll?: boolean
	dataScrollSpeed?: string
}

export const CustomImage: FC<CustomImageProps> = ({
	className,
	dataScroll = true,
	animate = true,
	dataScrollSpeed,
	alt = '',
	style,
	...rest
}) => {
	const ref = useRef<HTMLDivElement>(null)

	useAnimation(() => imageAnimation(ref), animate)

	return (
		<span
			ref={ref}
			className={classNames(s.image, className)}
			data-scroll={dataScroll}
			data-scroll-speed={dataScrollSpeed}
			style={style}
		>
			<Image {...rest} alt={alt} />
		</span>
	)
}
