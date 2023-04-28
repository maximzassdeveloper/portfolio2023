import { FC } from 'react'
import { Button, CustomLink, NavList, SocialList, Container } from '@/components/ui'
import { filePath } from '@/shared/libs/helper'
import s from './footer.module.scss'

export const Footer: FC = () => {
  return (
    <footer
      className={s.footer}
      data-scroll-section
    >
      <Container className={s.container}>
        <div className={s.col}>
          <p className={s.copyright}>{new Date().getFullYear()}© Максим Засс</p>

          <NavList
            className={s.menu}
            linkClassName={s.link}
          />
        </div>

        <div className={s.col}>
          <div className={s.button}>
            <Button size='small'>
              <CustomLink
                href={filePath('resume-maxim-zass.pdf')}
                blank
                animateOnHover={false}
              >
                Резюме
              </CustomLink>
            </Button>
          </div>

          <SocialList className={s.socials} />
        </div>
      </Container>
    </footer>
  )
}
