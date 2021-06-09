import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'

import { Layout, PrivateRoute } from 'components'
import { Artist, Home, Search } from 'views'

import './App.module.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Layout>
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute path="/search" component={Search} />
        <PrivateRoute path="/artist/:id" component={Artist} />
      </Layout>
    </Switch>
  </BrowserRouter>
)

export default App
