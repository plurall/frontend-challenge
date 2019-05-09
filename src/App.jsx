import React, { Component } from 'react'
import PlurallTracker from 'plurall-tracker'

import { Layout } from 'components'
import { Home } from 'views'

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
        <Home />
      </Layout>
    )
  }
}

export default App
