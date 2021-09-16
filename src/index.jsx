import 'babel-polyfill'
import 'react-app-polyfill/ie9'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'

import { LoginCallback, Artista, Busca } from 'views'
import { PrivateRoute } from 'components'
import App from 'App'
import registerServiceWorker from 'registerServiceWorker'

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/login/callback" exact component={LoginCallback} />
      <PrivateRoute path="/" exact component={App} />
      <Route path="/artista/:id" exact component={Artista} />
      <Route path="/busca" exact component={Busca} />
    </Switch>
  </Router>,
  document.getElementById('root'),
)

registerServiceWorker()
