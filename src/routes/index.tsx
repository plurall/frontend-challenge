import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../views/Home';
import Search from '../views/Search';
import Artist from '../views/Artist';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/busca" component={Search} />
    <Route path="/artista" component={Artist} />
  </Switch>
);

export default Routes;
