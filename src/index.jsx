import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { LoginCallback, SearchArtists, Artist, Home } from 'views'
import { PrivateRoute } from 'components'
import registerServiceWorker from 'registerServiceWorker'

import './global.module.scss'

const root = createRoot(document.getElementById('root'))

root.render(
  <Router>
    <Switch>
      <Route path="/login/callback" component={LoginCallback} />
      <PrivateRoute path="/busca" component={SearchArtists} />
      <PrivateRoute path="/artista/:id" component={Artist} />
      <PrivateRoute path="/" component={Home} />
    </Switch>
  </Router>,
)

registerServiceWorker()
