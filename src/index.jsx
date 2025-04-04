import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'

import { LoginCallback, Busca } from 'views'
import { PrivateRoute } from 'components'
import App from 'App'
import registerServiceWorker from 'registerServiceWorker'

window.renderBusca = () => {
  const root = createRoot(document.getElementById('root'))
  root.render(
    <Router>
      <Busca />
    </Router>,
  )
}

const rootElement = document.getElementById('root')
if (createRoot) {
  const root = createRoot(rootElement)
  root.render(
    <Router>
      <Switch>
        <Route path="/login/callback" component={LoginCallback} />
        <PrivateRoute path="/" component={App} />
      </Switch>
    </Router>,
  )
} else {
  ReactDOM.render(
    <Router>
      <Switch>
        <Route path="/login/callback" component={LoginCallback} />
        <PrivateRoute path="/" component={App} />
      </Switch>
    </Router>,
    rootElement,
  )
}

registerServiceWorker()
