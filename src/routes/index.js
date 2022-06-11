import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

// import { Home, Busca, Artista, NotFound } from 'views'
import { Home, Search, Artist } from 'views'

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/busca" exact component={Search} />
        <Route path="/artista/:id" exact component={Artist} />
        {/* <Route path="*" component={NotFound} /> */}
      </Switch>
    </Router>
  )
}
