import React, { Component } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import { RouteComponentProps, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { logoutAction } from 'src/authentication/action';
import { getAuthenticated } from 'src/authentication/selector';
import { ApplicationStore } from 'src/main/store/store';

interface Props {
  profile: any;
}

type AllProps = Props & WithTranslation & RouteComponentProps

class TopNavigationBar extends Component<AllProps> {

  public render(): JSX.Element {
    const { profile } = this.props;

    return (
      <pre>
        {JSON.stringify(profile, null, 2)}
      </pre>
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
      logout: () => dispatch(logoutAction()),
    },
  };
}

const componentWithRedux = connect(mapStateToProps, mapDispatchToProps)(TopNavigationBar);
const componentWithTranslation = withTranslation('dashboard')(componentWithRedux);
const componentWithRouter = withRouter(componentWithTranslation);

export default componentWithRouter;
