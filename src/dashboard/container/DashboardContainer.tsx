import React, { Component } from 'react';
import { connect } from 'react-redux';

class DashboardContainer extends Component {

  public render(): JSX.Element {
    return (
      <div>
        Dashboard
      </div>
    );
  }

}

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

const componentWithRedux = connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);

export { componentWithRedux as DashboardContainer };
