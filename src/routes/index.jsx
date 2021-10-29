import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Artists, Home, Search } from 'views'

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/busca" exact component={Search} />
    <Route path="/artista/:id" exact component={Artists} />
  </Switch>
)

export default Routes
