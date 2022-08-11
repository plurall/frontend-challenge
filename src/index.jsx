import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'

import { Artist, LoginCallback, Search } from 'views'
import { PrivateRoute } from 'components'
import App from 'App'
import registerServiceWorker from 'registerServiceWorker'

ReactDOM.render(
  <Router>
    <Switch>
      <PrivateRoute path="/artista/:id" component={Artist} />
      <Route path="/login/callback" component={LoginCallback} />
      <PrivateRoute path="/busca" component={Search} />
      <PrivateRoute path="/" component={App} />
    </Switch>
  </Router>,
  document.getElementById('root'),
)

registerServiceWorker()
