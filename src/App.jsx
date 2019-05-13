import React, { Component } from 'react'
import { Switch } from 'react-router-dom'

import PlurallTracker from 'plurall-tracker'

import { Layout, PrivateRoute } from 'components'
import { Home, Artista, Busca } from 'views'

import './App.module.css'

window.tracker = new PlurallTracker({
  env: 'staging',
  clientId: 'frontEndChallange',
})

class App extends Component {
  async componentDidMount() {
    window.tracker.pageView()
  }

  render() {
    return (
      <Layout>
        <Switch>
          <PrivateRoute path="/" exact={true} component={Home} />
          <PrivateRoute path="/busca" exact={true} component={Busca} />
          <PrivateRoute path="/artista/:id" exact={true} component={Artista} />
        </Switch>
      </Layout>
    )
  }
}

export default App
