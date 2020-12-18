import 'babel-polyfill'
import 'react-app-polyfill/ie9'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'

import { SEARCH, HOME } from 'routes'
import { LoginCallback, Search, Artist } from 'views'
import { PrivateRoute } from 'components'
import App from 'App'
import registerServiceWorker from 'registerServiceWorker'

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/login/callback" component={LoginCallback} />
      <PrivateRoute path={SEARCH} component={Search} />
      <PrivateRoute path="/artista/:id" component={Artist} />
      <PrivateRoute path={HOME} component={App} />
    </Switch>
  </Router>,
  document.getElementById('root'),
)

registerServiceWorker()
