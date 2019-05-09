import React, { Component } from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import PlurallTracker from 'plurall-tracker'

import { Layout, PrivateRoute } from 'components'
import { Home, SearchPage, ArtistPage } from 'views'

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
				<Router>
					<Switch>
						<Route exact path="/" component={Home}/>
						<Route exact path="/busca" component={SearchPage}/>
						<Route exact path="/artista/:id" component={ArtistPage}/>
					</Switch>
				</Router>
			</Layout>
		)
	}
}

export default App
