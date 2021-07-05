import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import history from './history';

// Routers
import Public from './redirectingRoutes/public';
import Private from './redirectingRoutes/private';

// Public Routes
import SignIn from '~/pages/SignIn';
import NotFound from '~/pages/NotFound';

// Admin Routes
import Home from '~/pages/Home';

const Routes: React.FC = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route component={NotFound} exact path="/not-found" />
      <Public component={SignIn} exact path="/login" />
      <Private component={Home} exact path="/" />
      <Redirect to="/not-found" />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
