import { Route, RouteProps } from 'react-router-dom'
import React from 'react'

import { getOauthClient, getToken } from '../../utils'

const handleNotAuthenticated = () => {
  console.log('handleNotAuthenticated')
  const OAuth = getOauthClient()
  window.location.href = OAuth.token.getUri()
  return null
}

interface RouterProps extends RouteProps {
  component: React.ComponentType
}

const Index: React.FC<RouterProps> = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props: any) =>
      getToken()
        ? (
        <Component {...props} />
          )
        : (
            handleNotAuthenticated()
          )
    }
  />
)

export default Index
