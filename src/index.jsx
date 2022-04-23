import App from 'App'
import 'babel-polyfill'
import { PrivateRoute } from 'components'
import React from 'react'
import 'react-app-polyfill/ie9'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import registerServiceWorker from 'registerServiceWorker'
import { LoginCallback } from 'views'
import { Artist } from 'views/Artist'
import { SearchArtists } from 'views/SearchArtists'

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/login/callback" component={LoginCallback} />
      <PrivateRoute exact path="/" component={App} />
      <PrivateRoute path="/search/artists" component={SearchArtists} />
      <PrivateRoute path="/artist" component={Artist} />
    </Switch>
  </Router>,
  document.getElementById('root'),
)

registerServiceWorker()
