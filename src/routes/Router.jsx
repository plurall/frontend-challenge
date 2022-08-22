import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Home, SearchArtist, LoginCallback, Artist } from 'views'
import { PrivateRoute } from 'components'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login/callback" component={LoginCallback} />
      <PrivateRoute exact path="/" component={Home} />
      <PrivateRoute path="/busca" component={SearchArtist} />
      <PrivateRoute path="/artista/:id" component={Artist} />
    </Switch>
  </BrowserRouter>
)

export default Router
