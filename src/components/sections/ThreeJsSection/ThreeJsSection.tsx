'use client'

import { FC, memo, useEffect, useRef } from 'react'
import { useWindowSize } from '@/shared/hooks/useWindowSize'
import { ThreeInit } from './threejs/ThreeInit'
import s from './three-js-section.module.scss'
import { isMobile } from '@/shared/libs/isMobile'

export const ThreeJsSection: FC = memo(() => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const threeInit = useRef<ThreeInit | null>(null)
  const windowSize = useWindowSize()

  useEffect(() => {
    // init webgl sphere
    if (canvasRef.current && !threeInit.current) {
      threeInit.current = new ThreeInit(canvasRef.current)
      if (isMobile()) {
        threeInit.current?.gsapAnimations()
      }
    }
  }, [])

  useEffect(() => {
    if (!isMobile()) {
      threeInit.current?.gsapAnimations()
    }
  }, [windowSize])

  return (
    <canvas
      ref={canvasRef}
      className={s.webgl}
    />
  )
})
