import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Home, Search, Artist } from 'views'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/busca" component={Search} />
      <Route path="/artista/:id" component={Artist} />
    </Switch>
  )
}
