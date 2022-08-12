import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

import { getOauthClient, getToken } from 'utils'

const handleNotAuthenticated = path => {
  const OAuth = getOauthClient(path)
  window.location.href = OAuth.token.getUri()
  return null
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      getToken() ? (
        <Component {...props} />
      ) : (
        handleNotAuthenticated(props.match.path)
      )
    }
  />
)

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  match: PropTypes.object,
}

export default PrivateRoute
