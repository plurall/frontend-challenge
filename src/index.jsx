import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'

import { Artist, LoginCallback, Search } from 'views'
import { PrivateRoute } from 'components'
import App from 'App'
import registerServiceWorker from 'registerServiceWorker'

ReactDOM.render(
  <Router >
    <Switch>
      <Route path="/login/callback" component={LoginCallback} />
      <Route path="/search" component={Search} />
      <Route path="/artista/:id" component={Artist} />
      <PrivateRoute path="/" component={App} />
    </Switch>
  </Router>,
  document.getElementById('root'),
)

registerServiceWorker()
