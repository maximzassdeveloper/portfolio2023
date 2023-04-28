import { FC } from 'react'
import { Button, CustomLink, Main, Section } from '@/components/ui'
import s from './page404.module.scss'

export const Page404: FC = () => {
  return (
    <Main title='Страница не найдена'>
      <Section className={s.notFound}>
        <h1 className={s.title}>404</h1>
        <h2 className={s.subtitle}>Страница не найдена ((0(</h2>

        <Button
          className={s.button}
          size='small'
        >
          <CustomLink href='/'>На главную</CustomLink>
        </Button>
      </Section>
    </Main>
  )
}
