import React, { Component } from 'react'
import { Switch } from 'react-router-dom'

import PlurallTracker from 'plurall-tracker'

import { Layout, PrivateRoute } from 'components'
import { Home, Search, Artist } from 'views'

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
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute path="/busca" component={Search} />
          <PrivateRoute path="/artista/:id?" component={Artist} />
        </Switch>
      </Layout>
    )
  }
}

export default App
