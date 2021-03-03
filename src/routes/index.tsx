import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home, LoginCallback } from '../views'
import { PrivateRoute } from '../components'
import SearchArtists from '../views/SearchArtists'
import SingleArtist from '../views/SingleArtist'

const Routes = () => {
  return (
      <Switch>
        <Route path="/login/callback" component={LoginCallback} />
        <PrivateRoute path="/artista/:id" component={SingleArtist} />
        <PrivateRoute path="/busca" component={SearchArtists} />
        <PrivateRoute path="/" component={Home} />
      </Switch>
  )
}

export default Routes
