import React from 'react';
import { Route, Switch } from 'react-router';
import Trade from './Trade';
import Posts from './Posts';
import NoMatch from '../components/NoMatch';
import NavBar from '../components/NavBar';

const routes = (
  <div>
    <NavBar />
    <Switch>
      <Route path="/" component={Posts} />
      <Route path="/trade/:direction" component={Trade} />
      <Route component={NoMatch} />
    </Switch>
  </div>
);

export default routes;
