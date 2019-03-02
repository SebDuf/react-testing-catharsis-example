import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { connect } from 'react-redux';

import { getAuthenticated } from '../../authentication/selector';
import { ApplicationStore } from '../store/store';

interface Props {
  isAuthenticated: boolean;
}

type AllProps = Props & RouteProps;

function PrivateRoute(props: AllProps): JSX.Element {
  const { isAuthenticated } = props;

  if (isAuthenticated) {
    return (
      <Route {...props} />
    );
  }

  return <Redirect to="/login" />;
}

function mapStateToProps(state: ApplicationStore): Props {
  return {
    isAuthenticated: getAuthenticated(state),
  };
}

const componentWithRedux = connect(mapStateToProps)(PrivateRoute);

export default componentWithRedux;
