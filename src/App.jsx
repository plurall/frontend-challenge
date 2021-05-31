import React from 'react'

import { Layout, PrivateRoute } from 'components'
import { Artist, Home, LoginCallback, Search } from 'views'

import './App.module.css'
import { Route, Switch } from 'react-router'

const App = () => (
  <Layout>
    <Switch>
      <Route path="/login/callback" component={LoginCallback} />
      <PrivateRoute exact path="/" component={Home} />
      <PrivateRoute path="/busca" component={Search} />
      <PrivateRoute path="/artista/:id" component={Artist} />
    </Switch>
  </Layout>
)

export default App
