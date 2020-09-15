import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import React from 'react'

import { getOauthClient, getToken } from 'utils'

import Layout from '../Layout'

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
        <Layout>
          <Component {...props} />
        </Layout>
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
