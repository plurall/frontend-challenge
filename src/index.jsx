import 'babel-polyfill'
import 'react-app-polyfill/ie9'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'

import { LoginCallback } from 'views'
import { Busca } from 'views'
import { Artista } from 'views'
import { PrivateRoute } from 'components'
import App from 'App'
import registerServiceWorker from 'registerServiceWorker'

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/login/callback" component={LoginCallback} />
      <PrivateRoute exact path="/" component={App} />
      <Route path="/busca" component={Busca} />
      <Route path="/artista/:idArtista" exact component={Artista} />
    </Switch>
  </Router>,
  document.getElementById('root'),
)


registerServiceWorker()
