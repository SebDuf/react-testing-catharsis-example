import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { DashboardContainer } from 'src/dashboard/container/DashboardContainer';
import { JobsContainer } from 'src/jobs/container/JobsContainer';
import { ResumeContainer } from 'src/resume/container/ResumeContainer';

import { LoginContainer } from '../../authentication/container';
import { ProfileContainer } from '../../profile/container';
import { SearchContainer } from '../../search/container/SearchContainer';

import DefaultPrivateRoute from './DefaultPrivateRoute';
import DefaultRoute from './DefaultRoute';

function Router(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={LoginContainer} exact path="/login" />
        <DefaultRoute component={DashboardContainer} exact path="/" />
        <DefaultRoute component={JobsContainer} exact path="/jobs" />
        <DefaultRoute component={SearchContainer} exact path="/search" />
        <DefaultPrivateRoute component={ProfileContainer} exact path="/profile" />
        <DefaultPrivateRoute component={ProfileContainer} exact path="/profile/:id" />
        <DefaultPrivateRoute component={ResumeContainer} exact path="/resume" />
        <Redirect to="/login" />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
