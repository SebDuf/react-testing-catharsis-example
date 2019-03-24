import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import { Signup } from 'src/authentication/component';
import { authenticate, signupAction } from 'src/authentication/action';
import { getAuthenticated } from 'src/authentication/selector';
import { ApplicationStore } from 'src/main/store/store';

interface Props {
  actions: {
    authenticate: () => void;
    signup: (username: any, password: string, profile: any) => void;
  };
  isAuthenticated: boolean;
}

type AllProps = Props & RouteComponentProps;

class SignupContainer extends Component<AllProps> {

  public componentDidMount(): void {
    // this.props.actions.authenticate();
  }

  public componentDidUpdate(): void {
    if (this.props.isAuthenticated) {
      this.props.history.push('/');
    }
  }

  private handleSignup = (username: string, password: string, profile: any) => {
    const { actions: { signup } } = this.props;

    signup(username, password, profile);

    this.props.history.push('/');
  };

  public render(): JSX.Element {
    return (
      <>
        <Signup onSignup={this.handleSignup} />
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
      signup: (username: string, password: string, profile: any) => dispatch(signupAction(username, password, profile)),
    },
  };
}

const componentWithRedux = connect(mapStateToProps, mapDispatchToProps)(SignupContainer);
const componentWithRouter = withRouter(componentWithRedux);

export default componentWithRouter;
