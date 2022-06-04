import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { PrivateRoute } from 'components'
import { Home, LoginCallback, Search, ArtistDetails } from 'views'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login/callback" component={LoginCallback} />
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute exact path="/search" component={Search} />
        <PrivateRoute exact path="/artists/:id" component={ArtistDetails} />
      </Switch>
    </Router>
  )
}

export default Routes
