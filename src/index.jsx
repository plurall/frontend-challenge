import 'babel-polyfill'
import 'react-app-polyfill/ie9'

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import {Provider} from "react-redux"
import { LoginCallback } from 'views'
import { Artista } from 'views'
import {Search} from 'views'
import { PrivateRoute } from 'components'
import App from 'App'
import registerServiceWorker from 'registerServiceWorker'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from "./rootReducer"

const customHistory = createBrowserHistory()
customHistory.listen(() => window.tracker.pageView())

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

ReactDOM.render(
  <Provider store={store}>
    <Router history={customHistory}>
      <Switch>
        <Route path="/login/callback" component={LoginCallback} />
        <Route path="/artista" component={Artista} />
        <Route path="/serarch" component={Search} />
        <PrivateRoute path="/" component={App} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
)

registerServiceWorker()
