import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../views/Home';
import Search from '../views/Search';
import Artist from '../views/Artist';

/**
 * Routes is a component that returns the routes of the application
 */

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/busca" component={Search} />
    <Route path="/artista/:id" component={Artist} />
  </Switch>
);

export default Routes;
