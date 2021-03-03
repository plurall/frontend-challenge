import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home, LoginCallback } from '../pages'
import PrivateRouter from './PrivateRoute'
import SearchArtists from '../pages/SearchArtists'
import SingleArtist from '../pages/SingleArtist'

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
