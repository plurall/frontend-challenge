import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { PrivateRoute } from 'components'
import { ArtistDetails, Home, LoginCallback, SearchArtists } from 'views'

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login/callback" component={LoginCallback} />
        <PrivateRoute exact path="/buscar" component={SearchArtists} />
        <PrivateRoute exact path="/artista/:id" component={ArtistDetails} />
        <PrivateRoute path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}
