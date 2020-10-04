import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Home, Search, Artist } from 'views'

const App = () => (
    <Router>
      <Switch>
        <Route exact path="/busca" component={Search} />
        <Route exact path="/artista/:id" component={Artist} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
)

export default App
