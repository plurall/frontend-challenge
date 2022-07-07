import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import queryString from 'query-string'

import { getOauthClient, setToken } from 'utils'

const LoginCallback = ({ location }) => {
  const [redirect, setRedirect] = useState(false)

  useEffect(() => {
    async function getUserLoggedIn() {
      try {
        const oauth = getOauthClient()
        const fullPath = `${location.pathname}${location.search}${location.hash}`
        const { accessToken } = await oauth.token.getToken(fullPath)
        setToken(accessToken)
        setRedirect(true)
      } catch {}
    }

    getUserLoggedIn()
  }, [location])

  if (redirect) {
    const search = queryString.parse(location.search)
    return (
      <Redirect to={search.redirectTo || '/'} />
    )
  }

  return (
    <div>Você tem que estar logado para acessar esta página</div>
  )
}

LoginCallback.propTypes = {
  location: PropTypes.object.isRequired,
}

export default LoginCallback
