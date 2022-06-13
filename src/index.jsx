import 'babel-polyfill'
import 'react-app-polyfill/ie9'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'

import { LoginCallback } from 'views'
import { PrivateRoute } from 'components'
import App from 'App'
import registerServiceWorker from 'registerServiceWorker'
import Search from 'views/Search/Search'
import ArtistHome from './views/Artist/ArtistHome'

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/login/callback" component={LoginCallback} />
      <PrivateRoute exact path="/" component={App} />
      <Route path="/busca" component={Search} />
      <Route exact path="/artista/:id" component={ArtistHome} />
    </Switch>
  </Router>,
  document.getElementById('root'),
)

registerServiceWorker()
