import 'babel-polyfill'
import 'react-app-polyfill/ie9'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from 'registerServiceWorker'

import { LoginCallback, Search, Home, Artist } from 'views'
import { PrivateRoute } from 'components'
import App from 'App'

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/login/callback" component={LoginCallback} />
      <PrivateRoute path="/" exact={true} component={Home} />
      <PrivateRoute path="/busca" component={Search} />
      <PrivateRoute path="/artista/:id?" component={Artist} />
    </Switch>
  </Router>,
  document.getElementById('root'),
)

registerServiceWorker()
