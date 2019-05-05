import 'babel-polyfill'
import 'react-app-polyfill/ie9'

import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import React from 'react'
import ReactDOM from 'react-dom'

import { LoginCallback } from 'views'
import { PrivateRoute } from 'components'
import App from 'App'
import registerServiceWorker from 'registerServiceWorker'

const customHistory = createBrowserHistory()
customHistory.listen(() => window.tracker.pageView())

ReactDOM.render(
  <Router history={customHistory}>
    <Switch>
      <Route path="/login/callback" component={LoginCallback} />
      <PrivateRoute path="/" component={App} />
    </Switch>
  </Router>,
  document.getElementById('root'),
)

registerServiceWorker()
