import { ReactNode } from 'react'
import { useSpotifyAuthentication } from 'hooks/useSpotifyAuthentication'

import { getToken } from 'utils'

interface IPrivateRoute {
  children: ReactNode
}

const PrivateRoute = ({ children }: IPrivateRoute): ReactNode => {
  const { login } = useSpotifyAuthentication()

  const handleNotAuthenticated = () => {
    login()
    return null
  }

  return getToken() ? children : handleNotAuthenticated()
}

export default PrivateRoute
