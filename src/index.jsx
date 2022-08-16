import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ReactDOM from 'react-dom'
import Artist from 'views/Artist'
import Search from 'views/Search'

import { LoginCallback } from 'views'
import { PrivateRoute } from 'components'
import App from 'App'
import registerServiceWorker from 'registerServiceWorker'
import { UserProvider } from './contexts/UserContext'

ReactDOM.render(
  <UserProvider>
    <Router>
      <Switch>
        <Route path="/login/callback" component={LoginCallback} />
        <PrivateRoute exact path="/" component={App} />
        <Route path="/artista/:id" component={Artist} />
        <Route path="/busca" component={Search} />
      </Switch>
    </Router>
  </UserProvider>,
  document.getElementById('root'),
)

registerServiceWorker()
