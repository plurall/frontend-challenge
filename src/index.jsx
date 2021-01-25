import 'babel-polyfill'
import 'react-app-polyfill/ie9'

import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'

import { Home, Busca, Artista, PageNotFound } from 'views'
import { LoginCallback } from 'views'

import App from 'App'
import registerServiceWorker from 'registerServiceWorker'
import PrivateRoute from 'components/PrivateRoute/PrivateRoute'

ReactDOM.render(
  <Router>
    <App>
      <Switch>
        <Route path="/login/callback" component={LoginCallback} />
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute exact path="/busca" component={Busca} />
        <PrivateRoute exact path="/artista/:id" component={Artista} />
        <PrivateRoute component={PageNotFound} />
      </Switch>
    </App>
  </Router>,
  document.getElementById('root'),
)

registerServiceWorker()
