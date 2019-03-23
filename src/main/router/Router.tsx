import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { DashboardContainer } from 'src/dashboard/container/DashboardContainer';
import { JobsContainer } from 'src/jobs/container/JobsContainer';
import { AppliedContainer } from 'src/applied/container/DashboardContainer';

import { LoginContainer } from '../../authentication/container';
import { ProfileContainer } from '../../profile/container';

import DefaultPrivateRoute from './DefaultPrivateRoute';
import DefaultRoute from './DefaultRoute';

function Router(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={LoginContainer} exact path="/login" />
        <DefaultRoute component={DashboardContainer} exact path="/" />
        <DefaultRoute component={JobsContainer} exact path="/jobs" />
        <DefaultPrivateRoute component={ProfileContainer} exact path="/profile" />
        <DefaultPrivateRoute component={AppliedContainer} exact path="/applied" />
        <Redirect to="/login" />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
