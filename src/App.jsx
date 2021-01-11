import React from 'react'
import { Router } from '@reach/router'

import { Layout } from 'components'
import { Home, Search, Artist } from 'views'

import './App.module.css'


const App = () => (
  <Layout>
    <Router>
      <Home path="/" />
      <Search path="busca" />
      <Artist path="artista/:id" />
    </Router>
  </Layout>
)

export default App
