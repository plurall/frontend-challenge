import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Layout } from 'components'
import { Home, Artist, Search } from 'views'

import './App.module.css'

const App = () => (
  <Layout>
    <Router>
      <Switch>
        <Route path="/artist/:id" component={Artist} />
        <Route path="/search/" component={Search} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  </Layout>
)

export default App
