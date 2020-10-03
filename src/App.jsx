import React from 'react'

import { Layout } from 'components'
import { Home, SearchArtists } from 'views'

import './App.module.css'

const App = () => (
  <Layout>
    <SearchArtists />
  </Layout>
)

export default App
