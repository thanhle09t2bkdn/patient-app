// src/routes.js
import React from 'react';
import { Router, Route } from 'react-router';
import Auth from './utils/Auth';
import Home from './components/home/home';
import Detail from './components/detail/detail';
import Login from './components/auth/login';

const Routes = (props) => (
  <Router {...props}>
      <Route path="/" component={ Home } onEnter={Auth.requireAuth}/>
      <Route path="/home" component={ Home } onEnter={Auth.requireAuth}/>
      <Route path="/login" component={ Login } />
      <Route path="/:id" component={ Detail } onEnter={Auth.requireAuth}/>
  </Router>
);

export default Routes;


