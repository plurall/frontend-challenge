import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Layout } from 'components'
import { Home, Search, Artist } from 'views'

import './App.module.css'

const App = () => (
  <Layout>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route exact path="/busca" component={Search} />
        <Route exact path="/artista/:id" component={Artist} />
      </Switch>
    </BrowserRouter>
  </Layout>
)

export default App
