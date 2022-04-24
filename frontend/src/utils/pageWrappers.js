import { useLocation, Navigate } from 'react-router-dom'

import { Spinner } from '/src/components'
import { useAuth } from '/src/hooks'

export const Auth = ({ element }) => {
  const { user, loading } = useAuth()
  const location = useLocation()

  if (loading)
    return <Spinner size="36px" center />

  return user
    ? element
    : <Navigate to={'/login'} state={{ from: `${location.pathname}${location.search}` }} replace />
}


export const NoAuth = ({ element }) => {
  const { user } = useAuth()

  return !user
    ? element
    : <Navigate to={'/app/'} state={{ from: `${location.pathname}${location.search}` }} replace />
}