import 'babel-polyfill'
import 'react-app-polyfill/ie9'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'

import { LoginCallback } from 'views'
import { PrivateRoute } from 'components'
import App from 'App'
import Busca from 'views/Busca/Busca'
import registerServiceWorker from 'registerServiceWorker'

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/login/callback" component={LoginCallback} />
      <PrivateRoute path="/" exact component={App} />
      <PrivateRoute path="/busca" component={Busca} />
      <PrivateRoute path="/artista/:id" component={App} />
    </Switch>
  </Router>,
  document.getElementById('root'),
)

registerServiceWorker()
