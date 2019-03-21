import React, { Component } from 'react';
import { connect } from 'react-redux';
import TopNavigationBar from 'src/dashboard/component/TopNavigationBar';

interface State {
  selectedTab: string;
}

class DashboardContainer extends Component<{}, State> {

  public state = {
    selectedTab: 'home',
  };

  public render(): JSX.Element {
    return (
      <div>
        <TopNavigationBar
          active={this.state.selectedTab}
          onChange={(tab: string) => this.setState({ selectedTab: tab })}
        />
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
