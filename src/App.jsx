import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import PlurallTracker from 'plurall-tracker'

import { Layout, PrivateRoute } from 'components'
import { Home, Search, Artista } from 'views'

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
           <Route path="/home" component={Home} />
           <Route path="/artists" component={Artista} />
           <Route path="/search" component={Search} />
        </Switch>
      </Layout>
    )
  }
}

export default App
