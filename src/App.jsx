import React, { Component } from 'react'
import { Switch } from 'react-router-dom'

import PlurallTracker from 'plurall-tracker'

import { Layout, PrivateRoute } from 'components'
import { Home } from 'views'

import './App.module.css'

window.tracker = new PlurallTracker({
  env: 'staging',
  clientId: 'frontEndChallenge',
})

class App extends Component {
  async componentDidMount() {
    window.tracker.pageView()
  }

  render() {
    return (
      <Layout>
        <Home />
      </Layout>
    )
  }
}

export default App
