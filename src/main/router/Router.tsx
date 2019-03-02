import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { LoginContainer } from '../../authentication/container';

import PrivateRoute from './PrivateRoute';

function LoggedIn(): JSX.Element {
  return <div>Logged in</div>;
}

function Router(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={LoginContainer} exact path="/login" />
        <PrivateRoute component={LoggedIn} path="/" />
        <Redirect to="/login" />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
