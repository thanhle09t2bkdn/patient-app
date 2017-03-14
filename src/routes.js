// src/routes.js
import React from 'react';
import { Router, Route } from 'react-router';
import Auth from './utils/Auth';

import Home from './components/Home/home';
import Detail from './components/Detail/detail';
import Login from './components/Auth/login';

const Routes = (props) => (
  <Router {...props}>
      <Route path="/" component={ Home } onEnter={Auth.requireAuth} />
      <Route path="/home" component={ Home } onEnter={Auth.requireAuth}/>
      <Route path="/detail" component={ Detail } onEnter={Auth.requireAuth}/>
      <Route path="/login" component={ Login } />
  </Router>
);

export default Routes;


