import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home, LoginCallback } from '../views'
import { PrivateRoute } from '../components'

const Routes = () => {
  return (
      <Switch>
        <Route path="/login/callback" component={LoginCallback} />
        <PrivateRoute path="/" component={Home} />
      </Switch>
  )
}

export default Routes
