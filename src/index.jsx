import 'babel-polyfill'
import 'react-app-polyfill/ie9'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'

import { LoginCallback } from 'views'
import { PrivateRoute } from 'components'
import HomePage from './pages/Home/HomePage'
import BuscaPage from './pages/Busca/BuscaPage';
import ArtistPage from './pages/Artist/ArtistPage';
import registerServiceWorker from 'registerServiceWorker'

ReactDOM.render(
  <Router>
    <Switch>
      <Route  path="/login/callback" component={LoginCallback} />
      <PrivateRoute path="/artista/:id" component={ArtistPage} />      
      <PrivateRoute path="/busca" component={BuscaPage} />
      <PrivateRoute path="/" component={HomePage} />      
    </Switch>
  </Router>,
  document.getElementById('root'),
)

registerServiceWorker()
