import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Layout, PrivateRoute } from 'components'
import { Home, LoginCallback, Search, Artist } from 'views'

import './App.module.scss'

const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route path="/login/callback" component={LoginCallback} />
        <PrivateRoute path="/" component={Home} exact />
        <PrivateRoute path="/search" component={Search} exact />
        <PrivateRoute path="/search/:id" component={Artist} />
      </Switch>
    </Layout>
  </Router>
)

export default App
