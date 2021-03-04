import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home, LoginCallback, SearchArtists, SingleArtist } from 'pages'
import PrivateRouter from './PrivateRoute'

const Routes = () => {
  return (
      <Switch>
        <Route path="/login/callback" component={LoginCallback} />
        <PrivateRouter path="/artista/:id" component={SingleArtist} />
        <PrivateRouter path="/busca" component={SearchArtists} />
        <PrivateRouter path="/" component={Home} />
      </Switch>
  )
}

export default Routes
