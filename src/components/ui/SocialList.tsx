import { FC } from 'react'
import { CustomLink } from '@/components/ui'
import { links } from '@/shared/data'

interface SocialListProps {
  className?: string
  linkClassName?: string
  showLinkArrow?: boolean
  linkArrowSize?: number
}

export const SocialList: FC<SocialListProps> = ({
  className,
  linkClassName,
  showLinkArrow,
  linkArrowSize,
}) => {
  return (
    <div className={className}>
      {Object.entries(links).map(([name, url]) => (
        <CustomLink
          key={name}
          href={url as string}
          className={linkClassName}
          showArrow={showLinkArrow}
          arrowSize={linkArrowSize}
          blank
        >
          {name}
        </CustomLink>
      ))}
    </div>
  )
}
