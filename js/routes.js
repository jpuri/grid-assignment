/* @flow */

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import {
    App,
    About,
    Grid,
    Home,
} from './components';

const routes = (
  <Route path="/" component={App}>
    <Route path="/home" component={Home} />
    <Route path="/grid" component={Grid} />
    <Route path="/about" component={About} />
    <IndexRoute component={Home} />
  </Route>
);

module.exports = routes;
