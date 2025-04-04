import { Route, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import React from 'react'

import { getOauthClient, getToken } from 'utils'

const handleNotAuthenticated = path => {
  const OAuth = getOauthClient(path)
  window.location.href = OAuth.token.getUri()
  return null
}

const PrivateRouteComponent = ({ component: Component, history, ...rest }) => (
  <Route
    {...rest}
    render={props => getToken() ? (
      <Component {...props} />
        ) : (
          handleNotAuthenticated(props.match.path)
        )}
  />
  )

PrivateRouteComponent.propTypes = {
  component: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  match: PropTypes.object,
}

const PrivateRoute = withRouter(PrivateRouteComponent)

export default PrivateRoute
