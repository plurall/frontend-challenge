import 'babel-polyfill'
import 'react-app-polyfill/ie9'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'

import { LoginCallback } from 'views'
import { PrivateRoute } from 'components'
import App from 'App'
import registerServiceWorker from 'registerServiceWorker'
import SearchArtists from 'views/SearchArtists'
import './styles/global.css'

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/login/callback" component={LoginCallback} />
      <PrivateRoute exact path="/search-artists" component={SearchArtists} />
      <PrivateRoute path="/" component={App} />
    </Switch>
  </Router>,
  document.getElementById('root'),
)

registerServiceWorker()
