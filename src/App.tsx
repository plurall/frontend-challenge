import React from 'react'

import './App.module.css'

import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'

function App () {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}

export default App
