import { FC } from 'react'
import { motion } from 'framer-motion'
import { NextWork } from './NextWork/NextWork'
import WorkTemplate from './work-templates'
import { Container, CustomLink, Typography, Main, CustomImage } from '@/components/ui'
import { IWork } from '@/shared/types'
import { imgPath, isEmpty } from '@/shared/libs/helper'
import s from './single-work.module.scss'

interface SingleWorkProps {
  work: IWork
  nextWork?: IWork
}

export const SingleWork: FC<SingleWorkProps> = ({ work, nextWork }) => {
  const renderTemplate = () => {
    const Content = WorkTemplate[work.slug]
    return Content ? <Content /> : null
  }

  return (
    <Main>
      <div
        className={s.work}
        data-scroll-section
      >
        <div className={s.bgWrapper}>
          <motion.img
            layoutId={work.slug}
            src={imgPath(work.preview)}
            alt={work.name}
          />
          {/* <div
            className={s.bg}
            style={{ backgroundImage: `url(${imgPath(work.preview)})` }}
          >
            <div
              className={s.blurBg}
              style={{ backgroundImage: `url(${imgPath(work.preview)})` }}
            />
          </div> */}
        </div>

        <Container>
          <Typography
            className={s.title}
            level='h1'
            animate
            data-scroll
            data-scroll-speed='2'
          >
            {work.name}
          </Typography>

          <div className={s.info}>
            <div className={s.line}>
              {work.role?.length && (
                <div className={s.list}>
                  <Typography level='h3'>Роль</Typography>
                  {work.role.map((roleName) => (
                    <span key={roleName}>{roleName}</span>
                  ))}
                </div>
              )}
              {work.stack?.length && (
                <div className={s.list}>
                  <Typography level='h3'>Технологии</Typography>
                  {work.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              )}
            </div>

            <p className={s.desc}>{work.desc}</p>

            {work.links && !isEmpty(work.links) && (
              <div className={s.links}>
                {Object.entries(work.links).map(([name, url]) => (
                  <CustomLink
                    className={s.link}
                    key={name + url}
                    href={url}
                    blank
                    showArrow
                  >
                    {name}
                  </CustomLink>
                ))}
              </div>
            )}
          </div>

          <div className={s.content}>{renderTemplate()}</div>
        </Container>

        <NextWork work={nextWork} />
      </div>
    </Main>
  )
}
