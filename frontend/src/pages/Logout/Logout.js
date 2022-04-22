import { useAuth } from '/src/hooks'
import { useEffect } from 'react'
import { Spinner } from '/src/components'

const Logout = () => {
  const { signOut, loading } = useAuth()

  useEffect(() => {
    signOut()
  }, [])

  return loading
    ? <Spinner size="36px" />
    : <div>Logging you out...</div>
}

export default Logout