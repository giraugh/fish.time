import { useCallback, useEffect } from 'react'

const useOnClickOutside = (ref, handler) => {
  const onClick = useCallback(e => {
    if (!ref.current || ref.current.contains(e.target))
      return
    handler(e)
  }, [ref, ref?.current])

  useEffect(() => {
    document.addEventListener('mousedown', onClick)
    document.addEventListener('touchstart', onClick)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('touchstart', onClick)
    }
  }, [ref, handler])
}

export default useOnClickOutside