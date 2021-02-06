import 'babel-polyfill'
import 'react-app-polyfill/ie9'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'

import { LoginCallback, SearchArtist, Artist } from 'views'
import { PrivateRoute } from 'components'
import App from 'App'
import { Layout } from 'components'
import registerServiceWorker from 'registerServiceWorker'

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/login/callback" component={LoginCallback} />
      <Layout>
        <PrivateRoute exact path="/" component={App} />
        <PrivateRoute exact path="/busca" component={SearchArtist} />
        <PrivateRoute exact path="/artista/:id" component={Artist} />
      </Layout>
    </Switch>
  </Router>,
  document.getElementById('root'),
)

registerServiceWorker()
