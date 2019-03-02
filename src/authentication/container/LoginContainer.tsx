import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';

import { Login } from '../component';
import { loginAction } from '../action';

interface Props {
  actions: {
    login: () => void;
  };
}

type AllProps = Props & RouteComponentProps;

class LoginContainer extends Component<AllProps> {

  private handleLogin = () => {
    const { actions: { login } } = this.props;

    login();

    this.props.history.push('/');
  };

  public render(): JSX.Element {
    return (
      <Login onLogin={this.handleLogin} />
    );
  }

}

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch: Function): Props {
  return {
    actions: {
      login: () => dispatch(loginAction()),
    },
  };
}

const componentWithRedux = connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
const componentWithRouter = withRouter(componentWithRedux);

export default componentWithRouter;
