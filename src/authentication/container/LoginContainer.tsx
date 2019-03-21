import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import { Login } from 'src/authentication/component';
import { authenticate, loginAction } from 'src/authentication/action';
import { getAuthenticated } from 'src/authentication/selector';
import { ApplicationStore } from 'src/main/store/store';

interface Props {
  actions: {
    authenticate: () => void;
    login: () => void;
  };
  isAuthenticated: boolean;
}

type AllProps = Props & RouteComponentProps;

class LoginContainer extends Component<AllProps> {

  public componentDidMount(): void {
    this.props.actions.authenticate();
  }

  public componentDidUpdate(): void {
    if (this.props.isAuthenticated) {
      this.props.history.push('/');
    }
  }

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

function mapStateToProps(state: ApplicationStore) {
  return {
    isAuthenticated: getAuthenticated(state),
  };
}

function mapDispatchToProps(dispatch: Function) {
  return {
    actions: {
      authenticate: () => dispatch(authenticate()),
      login: () => dispatch(loginAction()),
    },
  };
}

const componentWithRedux = connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
const componentWithRouter = withRouter(componentWithRedux);

export default componentWithRouter;
