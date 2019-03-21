import React, { Component } from 'react';
import { connect } from 'react-redux';

class JobsContainer extends Component {

  public render(): JSX.Element {
    return (
      <div>
        jobs
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

const componentWithRedux = connect(mapStateToProps, mapDispatchToProps)(JobsContainer);

export { componentWithRedux as JobsContainer };
