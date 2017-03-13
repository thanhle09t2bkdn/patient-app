// src/routes.js
import React from 'react';
import { Router, Route } from 'react-router'

import Home from './components/Home/home';
import Detail from './components/Detail/detail';

const Routes = (props) => (
  <Router {...props}>
      <Route path="/" component={ Home } />
      <Route path="/home" component={ Home } />
      <Route path="/detail" component={ Detail } />
  </Router>
);

export default Routes;
