import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home, LoginCallback } from '../views'
import PrivateRouter from './PrivateRoute'
import SearchArtists from '../views/SearchArtists'
import SingleArtist from '../views/SingleArtist'

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
