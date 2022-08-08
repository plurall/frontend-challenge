import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'
import { createRoot } from 'react-dom/client'

import { LoginCallback, Artists } from 'views'
import { PrivateRoute } from 'components'
import App from 'App'
import registerServiceWorker from 'registerServiceWorker'

const root = createRoot(document.getElementById('root'))

root.render(
  <Router>
    <Switch>
      <Route path="/login/callback" component={LoginCallback} />
      <PrivateRoute path="/artistas" component={Artists} />
      <PrivateRoute path="/" component={App} />
    </Switch>
  </Router>,
)

registerServiceWorker()
