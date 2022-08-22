import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import queryString from 'query-string'

import { getOauthClient, setToken } from 'utils'

const LoginCallback = ({ location }) => {
  const [redirect, setRedirect] = useState()

  useEffect(() => {
    const oauth = getOauthClient()
    const fullPath = `${location.pathname}${location.search}${location.hash}`

    oauth.token.getToken(fullPath).then(({ accessToken }) => {
      setToken(accessToken)
      setRedirect(true)
    })
    // eslint-disable-next-line
  }, [])


  if (redirect) {
    const search = queryString.parse(this.props.location.search)
    return (<Redirect to={search.redirectTo || '/'} />)
  }

  return (<div>Você tem que estar logado para acessar esta página</div>)
}

export default LoginCallback

LoginCallback.propTypes = {
  location: PropTypes.object.isRequired,
}
