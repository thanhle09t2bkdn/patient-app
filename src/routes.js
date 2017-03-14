// src/routes.js
import React from 'react';
import { Router, Route } from 'react-router';
import Auth from './utils/Auth';
import Home from './components/home/home';
import Detail from './components/detail/detail';
import Login from './components/auth/login';

const Routes = (props) => (
  <Router {...props}>
      {/* onEnter={Auth.requireAuth}*/}
      <Route path="/" component={ Home } />
      <Route path="/home" component={ Home }/>
      <Route path="/login" component={ Login } />
      <Route path="/:id" component={ Detail } />
  </Router>
);

export default Routes;


