import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import { Login } from 'src/authentication/component';
import { authenticate, loginAction } from 'src/authentication/action';
import { getAuthenticated } from 'src/authentication/selector';
import { ApplicationStore } from 'src/main/store/store';
import {WithTranslation, withTranslation} from 'react-i18next';

interface Props {
  actions: {
    authenticate: () => void;
    login: (username: any, password: string) => void;
  };
  isAuthenticated: boolean;
}

type AllProps = Props & RouteComponentProps & WithTranslation;

class LoginContainer extends Component<AllProps> {

  public componentDidMount(): void {
    // this.props.actions.authenticate();
  }

  public componentDidUpdate(): void {
    if (this.props.isAuthenticated) {
      this.props.history.push('/');
    }
  }

  private handleLogin = (username: string, password: string) => {
    const { actions: { login } } = this.props;

    login(username, password);

    this.props.history.push('/');
  };

  public render(): JSX.Element {
    return (
      <>
        <Login onLogin={this.handleLogin} />
      </>
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
      login: (username: string, password: string) => dispatch(loginAction(username, password)),
    },
  };
}

const componentWithTranslation = withTranslation('authentication')(LoginContainer);
const componentWithRedux = connect(mapStateToProps, mapDispatchToProps)(componentWithTranslation);
const componentWithRouter = withRouter(componentWithRedux);

export default componentWithRouter;
