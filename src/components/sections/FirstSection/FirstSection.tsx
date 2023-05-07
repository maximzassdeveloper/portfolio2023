import { FC, useEffect, useRef } from 'react'
import { Typography, Section } from '@/components/ui'
import { classNames } from '@/shared/libs/classNames'
import { useWindowSize } from '@/shared/hooks/useWindowSize'
import { ThreeInit } from './threejs/ThreeInit'
import s from './first.module.scss'

export const FirstSection: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const threeInit = useRef<ThreeInit | null>(null)
  const windowSize = useWindowSize()

  useEffect(() => {
    // init webgl sphere
    if (canvasRef.current) {
      threeInit.current = new ThreeInit(canvasRef.current)
    }
  }, [])

  useEffect(() => {
    threeInit.current?.gsapAnimations()
  }, [windowSize])

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
