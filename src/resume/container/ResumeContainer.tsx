import React, { Component } from 'react';
import { connect } from 'react-redux';

class ResumeContainer extends Component {

  public render(): JSX.Element {
    return (
      <div>
       resumes
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

const componentWithRedux = connect(mapStateToProps, mapDispatchToProps)(ResumeContainer);

export { componentWithRedux as ResumeContainer };
