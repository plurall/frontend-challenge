import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Layout, PrivateRoute } from 'components'
import { Home, LoginCallback, Search, ArtistInfo } from 'views'

import './App.module.css'

const App = () => (
  <Router>
    <Switch>
      <Route path="/login/callback" component={LoginCallback} />
      <Layout>
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute path="/busca" component={Search} />
        <PrivateRoute path="/artista/:id" component={ArtistInfo} />
      </Layout>
    </Switch>
  </Router>
)

export default App
