import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { LoginCallback, SearchArtist, Artist, Home } from 'views'
import { PrivateRoute, Layout } from 'components'

import './App.module.css'

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/login/callback" component={LoginCallback} />
        <Layout>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/busca" component={SearchArtist} />
          <PrivateRoute exact path="/artista/:id" component={Artist} />
        </Layout>
      </Switch>
    </Router>
  )
}
