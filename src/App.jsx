import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Layout, PrivateRoute } from 'components'
import { Home,  Search, Artist, LoginCallback } from 'views'
import './App.module.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Layout>
        <Route path="/login/callback" component={LoginCallback} />
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute path="/busca" component={Search}/>
        <PrivateRoute path="/artista/:id" component={Artist} />
      </Layout>
    </Switch>
  </BrowserRouter>
)

export default App
