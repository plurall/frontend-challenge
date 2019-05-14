import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import _JSXStyle from 'styled-jsx/style'
import PlurallTracker from 'plurall-tracker'
import { Layout, PrivateRoute } from 'components'
import { Home } from 'views'
import { Artistas } from 'views'
import { Detalhe } from 'views'

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
        <Route path="/" exact component={Home} />
        <Route path="/artistas" exact component={Artistas} />
        <Route path="/artistas/:id" component={Detalhe} />
      </Layout>
    )
  }
}

export default App
