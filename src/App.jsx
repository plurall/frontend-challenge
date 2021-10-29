import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { Layout } from 'components'

import './App.module.css'
import Routes from './routes'

const App = () => (
  <Layout>
    <Router>
      <Routes />
    </Router>
  </Layout>
)

export default App
