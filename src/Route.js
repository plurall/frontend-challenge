import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App'
import Busca from './views/Busca'
import Artista from './views/Artista'

export default function Routes() {
  return (
    <Router>
      <Route exact path="/" component={App} />
      <Route exact path="/busca" component={Busca} />
      <Route exact path="/artista/:id" component={Artista} />
    </Router>
  )
}
