import React, { useEffect, useState } from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import queryString from 'query-string'

import { getOauthClient, setToken } from '../../utils'

const LoginCallback = () => {
  const [redirect, setRedirect] = useState(false)
  const history = useHistory()

  useEffect(() => {
    const oauth = getOauthClient()
    const location = history.location
    const fullPath = `${location.pathname}${location.search}${location.hash}`

    oauth.token.getToken(fullPath).then(({ accessToken }) => {
      setToken(accessToken)
      setRedirect(true)
    })
  }, [history])

  if (redirect) {
    const search: any = queryString.parse(history.location.search)
    return <Redirect to={search.redirectTo || '/'} />
  }

  return <div>Você tem que estar logado para acessar esta página</div>
}

export default LoginCallback
