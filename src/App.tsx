import React from 'react'
import { Layout } from 'components'

import './App.module.scss'
import { Outlet } from 'react-router-dom'

const App = () => (
  <Layout>
    <Outlet />
  </Layout>
)

export default App
