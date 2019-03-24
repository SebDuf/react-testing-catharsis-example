import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchContainer extends Component {

  public render(): JSX.Element {
    return (
      <div>
       search
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

const componentWithRedux = connect(mapStateToProps, mapDispatchToProps)(SearchContainer);

export { componentWithRedux as SearchContainer };
