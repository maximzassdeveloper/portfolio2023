import { FC, useRef } from 'react'
import { ImageProps } from 'next/image'
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
  src,
  style,
  ...rest
}) => {
  const ref = useRef<HTMLDivElement>(null)

  useAnimation(() => imageAnimation(ref), animate)

  return (
    <div
      ref={ref}
      className={classNames(s.image, className)}
      data-scroll={dataScroll}
      data-scroll-speed={dataScrollSpeed}
      style={style}
    >
      <img
        alt={alt}
        src={src}
        {...rest}
      />
      {/* 
        Not Next Image, because bad work with locomotive scroll
        <Image {...rest} alt={alt} /> 
      */}
    </div>
  )
}
