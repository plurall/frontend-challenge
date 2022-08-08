import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Layout } from 'components'
import { Home, Busca, Artista } from 'views'

import './App.module.scss'

const App = () => (
  <Layout>
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/busca" component={Busca} />
        <Route path="/artista/:id" component={Artista} />
      </Switch>
    </Router>
  </Layout>
)

export default App
