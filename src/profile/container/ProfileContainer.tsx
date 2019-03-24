import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import { ApplicationStore } from 'src/main/store/store';
import { getProfile, getSpecificProfile } from 'src/profile/selector';

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

function mapStateToProps(state: ApplicationStore, ownProps: any) {
  const { id } = ownProps.match.params;
  let profile = null;

  if (!id) {
    profile = getProfile(state);
  } else {
    profile = getSpecificProfile(state, id);
  }

  console.log('profile', profile);
  if (!profile) {
    ownProps.history.push('/');
    return {};
  }

  return {
    profile,
  };
}

const componentWithRedux = connect(mapStateToProps)(ProfileContainer);
const componentWithRouter = withRouter(componentWithRedux);

export default componentWithRouter;
