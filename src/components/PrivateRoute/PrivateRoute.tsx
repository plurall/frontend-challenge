import { Route, RouteProps } from 'react-router-dom'
import React from 'react'

import { getOauthClient, getToken } from '../../utils'

const handleNotAuthenticated = (path: any) => {
  const OAuth = getOauthClient()
  window.location.href = OAuth.token.getUri()
  return null
}

interface RouterProps extends RouteProps {
  component: React.ComponentType
}

const PrivateRoute: React.FC<RouterProps> = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props: any) =>
      getToken()
        ? (
        <Component {...props} />
          )
        : (
            handleNotAuthenticated(props.match.path)
          )
    }
  />
)

export default PrivateRoute
