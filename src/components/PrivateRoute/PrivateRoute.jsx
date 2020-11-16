import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import React from 'react'

import { getOauthClient, getToken } from 'utils'

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

const handleNotAuthenticated = path => {
  const OAuth = getOauthClient(path)
  window.location.href = OAuth.token.getUri()
  return null
}

export default PrivateRoute
