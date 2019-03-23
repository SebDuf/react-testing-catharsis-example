import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import { ApplicationStore } from 'src/main/store/store';
import { getProfile } from 'src/profile/selector';

import User from '../component/User';

interface Props {
  profile: any;
}

type AllProps = Props & RouteComponentProps;

class ProfileContainer extends Component<AllProps> {

  public render(): JSX.Element {
    return (
      <User profile={this.props.profile} />
    );
  }

}

function mapStateToProps(state: ApplicationStore) {
  return {
    profile: getProfile(state),
  };
}

const componentWithRedux = connect(mapStateToProps)(ProfileContainer);
const componentWithRouter = withRouter(componentWithRedux);

export default componentWithRouter;
