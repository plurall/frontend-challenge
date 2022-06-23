import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import React from 'react'
// import ReactDOM from 'react-dom'

import { StrictMode, React } from 'react'
import { createRoot } from 'react-dom/client'

import { LoginCallback } from 'views'
import { PrivateRoute } from 'components'
import App from 'App'
import registerServiceWorker from 'registerServiceWorker'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
  <Router>
    <StrictMode>
      <Switch>
        <Route path="/login/callback" component={LoginCallback} />
        <PrivateRoute path="/" component={App} />
      </Switch>
    </StrictMode>
  </Router>,

  document.getElementById('root'),
)

registerServiceWorker()
