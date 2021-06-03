import 'babel-polyfill'
import 'react-app-polyfill/ie9'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'

import { LoginCallback, Search, ArtistDetails } from 'views'
import { PrivateRoute } from 'components'
import App from 'App'
import registerServiceWorker from 'registerServiceWorker'

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/artist/:id" component={ArtistDetails} />
      <Route path="/search" component={Search} />
      <Route path="/login/callback" component={LoginCallback} />
      <PrivateRoute path="/" component={App} />
    </Switch>
  </Router>,
  document.getElementById('root'),
)

registerServiceWorker()
