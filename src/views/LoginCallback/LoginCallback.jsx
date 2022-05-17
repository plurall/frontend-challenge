import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import queryString from 'query-string'

import { getOauthClient, setToken } from 'utils'
import { BaseRoutes } from 'routes/BaseRoutes'

const LoginCallback = (props) => {
  const [redirect, setRedirect] = useState(false)

  useEffect(() => {
    const oauth = getOauthClient()
    const { location } = props
    const fullPath = `${location.pathname}${location.search}${location.hash}`

    oauth.token.getToken(fullPath).then(({ accessToken }) => {
      setToken(accessToken)
      setRedirect(true)
    })
  }, [])

  if (redirect) {
    const search = queryString.parse(props.location.search)
    return <Redirect to={search.redirectTo || BaseRoutes.login} />
  }

  return <div>Você tem que estar logado para acessar esta página</div>
}

LoginCallback.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
    hash: PropTypes.string.isRequired,
  })
}

export default LoginCallback
