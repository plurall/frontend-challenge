import React from 'react'
import { Layout } from 'components'

import './App.module.scss'
import { Outlet } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const App = () => (
  <Layout>
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  </Layout>
)

export default App
