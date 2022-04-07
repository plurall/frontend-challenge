/* eslint-disable linebreak-style */
import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

import { Home, Busca, Artista, NotFound } from 'views'

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/busca" component={Busca} />
        <Route path="/artista/:id" exact component={Artista} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  )
}
