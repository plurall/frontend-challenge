import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import PlurallTracker from 'plurall-tracker'

import { Layout, PrivateRoute } from 'components'
import { Home, Search, About } from 'views'

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
        <Router>
          <React.Fragment>
            <Route exact path="/" component={Home} />
            <PrivateRoute path="/search" component={Search}/>
            <PrivateRoute path="/artist/:id" component={About} />
          </React.Fragment>
        </Router>
      </Layout>
    )
  }
}

export default App
