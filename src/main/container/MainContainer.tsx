import React from 'react';
import TopNavigationBar from 'src/dashboard/component/TopNavigationBar';
import Router from 'src/main/router/Router';
import styled from 'styled-components';

const Root = styled.div`
    height: 100%;
`;

export enum Tabs {
  HOME = 'home',
  JOBS = 'jobs',
  RESUME = 'applied'
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
      <Root>
        <TopNavigationBar
          active={selectedTab}
          onChange={(tab: string) => this.setState({ selectedTab: tab })}
        />
        <Router />
      </Root>
    );
  }

}

export default MainContainer;
