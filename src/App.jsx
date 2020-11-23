import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import { Layout } from 'components'
import { Home } from 'views'
import { Search } from 'views'
import { Artist } from 'views'


import './App.module.css'

const App = () => (
  <Router>
    <Layout>
      <Route exact path="/" component={Home}/> 
      <Route path="/busca" component={Search}/>
      <Route path="/artista/:id" component={Artist}/>
    </Layout>
  </Router>
)

export default App
