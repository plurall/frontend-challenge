import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Layout,PrivateRoute } from 'components'
import { Home, LoginCallback, Artist, Search} from 'views'

import './App.module.css'

const App = () => (
  <Router>
    <Switch>
      <Route path="/login/callback" component={LoginCallback} />
      <Layout>        
        <PrivateRoute path="/Artista/:id" component={Artist} />
        <PrivateRoute exact path="/Pesquisa" component={Search} />     
        <PrivateRoute exact path="/" component={Home} /> 
      </Layout>    
    </Switch>
  </Router>
)

export default App
