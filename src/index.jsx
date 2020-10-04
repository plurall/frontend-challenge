import 'babel-polyfill'
import 'react-app-polyfill/ie9'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'

import { LoginCallback, SearchArtists, Artist } from 'views'
import { PrivateRoute } from 'components'
import App from 'App'
import registerServiceWorker from 'registerServiceWorker'

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/login/callback" component={LoginCallback} />
      <PrivateRoute path="/" exact component={App} />
      <PrivateRoute path="/search-artists" component={SearchArtists} />
      <PrivateRoute path="/artist/:id" component={Artist} />
    </Switch>
  </Router>,
  document.getElementById('root'),
)

registerServiceWorker()
