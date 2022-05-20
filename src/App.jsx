import { Layout } from 'components'
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from 'views'
import './App.module.css'
import { SearchInput } from './components'
import ProfileArtist from './components/ProfileArtist'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={SearchInput} />
        <Route path="/artist/:id" component={ProfileArtist} />
      </Layout>
    </Switch>
  </BrowserRouter>
)

export default App
