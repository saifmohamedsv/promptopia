import { useCallback, useState } from 'react'

interface UseFilterProps<T> {
  initial?: T
}

export type SingleFilterProp = string
export type MultiFilterProp = { [key: string]: unknown }

export function useFilter<T>({ initial }: UseFilterProps<T>) {
  const [values, setValues] = useState<T>({ ...(initial || {}) } as T)
  const set = useCallback(
    (prop: SingleFilterProp | MultiFilterProp, value?: any) => {
      if (typeof prop === 'string') {
        setValues({ ...values, [prop]: value })
      }

      if (typeof prop === 'object') {
        setValues({ ...values, ...prop })
      }
    },
    [values]
  )

  return { set, values }
}
