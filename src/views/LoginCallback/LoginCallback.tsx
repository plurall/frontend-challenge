import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import queryString from 'query-string'

import { useSpotifyAuthentication } from 'hooks/useSpotifyAuthentication'

interface ISearchQuery {
  redirectTo?: string
}

const LoginCallback = () => {
  const [redirect, setRedirect] = useState(false)

  const location = useLocation()
  const navigate = useNavigate()
  const { getToken, error } = useSpotifyAuthentication()

  useEffect(() => {
    getToken().then(() => {
      setRedirect(true)
    })
  }, [location])

  if (redirect) {
    const search: ISearchQuery = queryString.parse(location.search)
    navigate(search.redirectTo || '/')
    return
  }

  if (error) {
    return <div data-test-id='unauthenticated-message'>{error}</div>
  }

  return (
    <div data-test-id='unauthenticated-message'>
      Você tem que estar logado para acessar esta página
    </div>
  )
}

export default LoginCallback
