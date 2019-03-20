import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { DashboardContainer } from 'src/dashboard/container/DashboardContainer';

import { LoginContainer } from '../../authentication/container';

import PrivateRoute from './PrivateRoute';

function Router(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={LoginContainer} exact path="/login" />
        <PrivateRoute component={DashboardContainer} path="/" />
        <Redirect to="/login" />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
