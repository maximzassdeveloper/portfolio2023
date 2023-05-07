import { BufferGeometry, Geometry } from 'three'
import { Sizes } from './types'

function numberLimit(value: number, min?: number, max?: number) {
  if (min !== undefined && value < min) {
    return min
  }

  if (max !== undefined && value > max) {
    return max
  }

  return value
}

export function getWidth() {
  return numberLimit(window.innerWidth, 600)
}

export function getHeight() {
  return numberLimit(window.innerHeight, 400)
}

export function getWindowSize(): Sizes {
  return {
    width: getWidth(),
    height: getHeight(),
  }
}

export function isSimpleGeometry(value: Geometry | BufferGeometry): value is Geometry {
  if ('vertices' in value) {
    return true
  }

  return false
}
