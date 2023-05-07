import { useEffect, useRef } from 'react'

export const useLatest = <Value>(value: Value) => {
  const valueRef = useRef(value)

  useEffect(() => {
    valueRef.current = value
  })

  return valueRef
}
