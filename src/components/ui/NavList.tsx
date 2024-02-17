import { FC, MouseEventHandler } from 'react'
import { CustomLink } from '@/components/ui'

interface NavListProps {
  className?: string
  onLinkClick?: MouseEventHandler
  linkClassName?: string
}

const menuArray = [
  { name: 'Обо мне', route: '/about' },
  { name: 'Проекты', route: '/works' },
  { name: 'Контакты', route: '/contact' },
]

export const NavList: FC<NavListProps> = (props) => {
  const { className, onLinkClick, linkClassName } = props

  return (
    <ul className={className}>
      {menuArray.map(({ name, route }) => (
        <li key={route}>
          <CustomLink
            href={route}
            onClick={onLinkClick}
            className={linkClassName}
          >
            {name}
          </CustomLink>
        </li>
      ))}
    </ul>
  )
}
