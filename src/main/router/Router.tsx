import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { DashboardContainer } from 'src/dashboard/container/DashboardContainer';
import { JobsContainer } from 'src/jobs/container/JobsContainer';
import { AppliedContainer } from 'src/applied/container/DashboardContainer';

import { LoginContainer } from '../../authentication/container';

import DefaultPrivateRoute from './DefaultPrivateRoute';

function Router(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={LoginContainer} exact path="/login" />
        <DefaultPrivateRoute component={DashboardContainer} exact path="/" />
        <DefaultPrivateRoute component={JobsContainer} exact path="/jobs" />
        <DefaultPrivateRoute component={AppliedContainer} exact path="/applied" />
        <Redirect to="/login" />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
