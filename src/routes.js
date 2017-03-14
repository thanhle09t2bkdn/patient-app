// src/routes.js
import React from 'react';
import { Router, Route } from 'react-router'

import Home from './components/home/home';
import Detail from './components/detail/detail';

const Routes = (props) => (
  <Router {...props}>
      <Route path="/" component={ Home } />
      <Route path="/home" component={ Home } />
      <Route path="/:id" component={ Detail } />
  </Router>
);

export default Routes;
