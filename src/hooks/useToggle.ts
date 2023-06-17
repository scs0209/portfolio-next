import { useCallback, useState } from 'react'

const useToggle = (
  initialValue: boolean,
): [boolean, () => void, () => void] => {
  const [state, setState] = useState(initialValue)

  const open = useCallback(() => {
    setState(true)
  }, [])

  const close = useCallback(() => {
    setState(false)
  }, [])

  return [state, open, close]
}

export default useToggle
