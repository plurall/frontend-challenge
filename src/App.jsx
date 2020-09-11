import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { LoginCallback, Home, Busca, Artista } from 'views'
import { PrivateRoute } from 'components'

import './App.module.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login/callback" component={LoginCallback} />
      <PrivateRoute exact path="/" component={Home} />
      <PrivateRoute path="/artista/:id" component={Artista} />
      <PrivateRoute path="/busca" component={Busca} />
    </Switch>
  </BrowserRouter>
)

export default App
