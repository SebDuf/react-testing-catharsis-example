import React, { Component } from 'react';
import { connect } from 'react-redux';

class AppliedContainer extends Component {

  public render(): JSX.Element {
    return (
      <div>
       applied
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

const componentWithRedux = connect(mapStateToProps, mapDispatchToProps)(AppliedContainer);

export { componentWithRedux as AppliedContainer };
