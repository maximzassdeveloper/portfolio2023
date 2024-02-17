import { PointLight, Vector3 } from 'three'

export interface Sizes {
  width: number
  height: number
}

type LightsKey = 'primary' | 'primary2' | 'red' | 'yellow'

export type Lights = {
  [key in LightsKey]: PointLight
}

export interface AnimationOptions {
  time: number
  noiseAmount: number
  sphereVerticesArray: Vector3[]
  sphereVerticesNormArray: Vector3[]
}

export interface FpsOptions {
  fpsInterval: number
  startTime: number
  now: number
  then: number
  elapsed: number
}
