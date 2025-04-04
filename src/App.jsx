import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Layout } from 'components'
import { Home, Busca, Artista } from 'views'
import { SearchProvider } from './utils/SearchContext'

import './App.module.scss'

const BASE_URL = '/'

const App = () => (
  <SearchProvider>
    <Layout>
      <Switch>
        <Route
          exact
          path={BASE_URL}
          render={(props) => <Home {...props} />}
        />
        <Route
          path={`${BASE_URL}busca`}
          render={(props) => <Busca {...props} />}
        />
        <Route
          path={`${BASE_URL}artista/:id`}
          render={(props) => <Artista {...props} />}
        />
      </Switch>
    </Layout>
  </SearchProvider>
)

export default App
