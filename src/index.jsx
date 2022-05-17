import 'babel-polyfill'
import 'react-app-polyfill/ie9'

import React from 'react'
import ReactDOM from 'react-dom'
import { Layout } from 'components'

import './App.module.css'
import registerServiceWorker from 'registerServiceWorker'
import { Routes } from 'routes'

ReactDOM.render(
  <Layout>
    <Routes/>
  </Layout>,
  document.getElementById('root'),
)

registerServiceWorker()
