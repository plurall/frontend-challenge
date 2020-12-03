import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Routes from './routes';

import { Layout } from 'components'

import './App.module.css'

const App = () => (
  <Layout>
    <Router>
      <Routes />
    </Router>
  </Layout>
)

export default App
