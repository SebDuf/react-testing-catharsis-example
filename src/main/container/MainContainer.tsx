import React from 'react';
import TopNavigationBar from 'src/dashboard/component/TopNavigationBar';
import Router from 'src/main/router/Router';

export enum Tabs {
  HOME = 'home',
  JOBS = 'jobs',
  APPLIED = 'applied'
}

interface State {
  selectedTab: string;
}

class MainContainer extends React.Component<{}, State> {

  public state = {
    selectedTab: Tabs.HOME,
  };

  public render() {
    const { selectedTab } = this.state;

    return (
      <div>
        <TopNavigationBar
          active={selectedTab}
          onChange={(tab: string) => this.setState({ selectedTab: tab })}
        />
        <Router />
      </div>
    );
  }

}

export default MainContainer;
