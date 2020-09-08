import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Layout } from 'components'
import { Home } from 'views'

import './App.module.css'

const App = () => (
  <Layout>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  </Layout>
)

export default App
