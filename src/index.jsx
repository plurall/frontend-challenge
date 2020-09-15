import 'babel-polyfill'
import 'react-app-polyfill/ie9'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'

import { LoginCallback } from 'views'
import { PrivateRoute } from 'components'

// pages
import App from './views/Home'
import Artista from './views/Artista'
import Busca from './views/Busca'

// service worker
import registerServiceWorker from 'registerServiceWorker'

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/login/callback" component={LoginCallback} />
      <PrivateRoute exact path="/" component={App} />
      <PrivateRoute exact path="/artista/:id" component={Artista} />
      <PrivateRoute exact path="/busca" component={Busca} />
    </Switch>
  </Router>,
  document.getElementById('root'),
)

registerServiceWorker()
