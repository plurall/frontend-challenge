import React from 'react'

import { Layout, PrivateRoute } from 'components'
import { Artist, Home, LoginCallback, Search } from 'views'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.module.css'

const App = () => (
  <Router>
    <Layout>
      <Switch>
        <PrivateRoute path="/artista/:id" component={Artist} />
        <PrivateRoute path="/busca" component={Search} />
        <Route path="/login/callback" component={LoginCallback} />
        <PrivateRoute path="/" component={Home} />
      </Switch>
    </Layout>
  </Router>
)

export default App
