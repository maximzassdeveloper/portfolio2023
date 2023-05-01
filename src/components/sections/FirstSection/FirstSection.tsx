import { FC, useEffect, useRef } from 'react'
import { Typography, Section } from '@/components/ui'
import { initThreeJsScene } from './threejs/scene'
import { classNames } from '@/shared/libs/classNames'
import s from './first.module.scss'

export const FirstSection: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    // init webgl sphere
    if (canvasRef.current) {
      initThreeJsScene(canvasRef.current)
    }
  }, [])

  return (
    <>
      <Section
        id='first'
        className={s.first}
      >
        <div className={s.content}>
          <Typography
            level='h1'
            className={classNames(s.title, s.firstPart)}
            animate={{ splitText: false }}
            lineClassName={s.line}
            data-scroll
          >
            <div className={s.line}>Максим</div>
            <div className={s.line}>Засс</div>
          </Typography>
          <Typography
            level='h1'
            className={classNames(s.title, s.secondPart)}
            animate={{ splitText: false }}
            lineClassName={s.line}
            data-scroll
          >
            <div className={s.line}>Фронтенд</div>
            <div className={s.line}>Разработчик</div>
          </Typography>
        </div>
      </Section>
      <canvas
        ref={canvasRef}
        className={s.webgl}
      />
    </>
  )
}
