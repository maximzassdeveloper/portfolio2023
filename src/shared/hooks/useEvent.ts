import { useCallback } from 'react'
import { useLatest } from './useLatest'

export const useEvent = <T extends (...args: any[]) => any>(callback: T) => {
  const cashedCallback = useLatest(callback)

  const resultCallback = useCallback(
    (...args: Parameters<T>) => {
      cashedCallback.current.apply(null, args)
    },
    [cashedCallback]
  )

  return resultCallback
}
