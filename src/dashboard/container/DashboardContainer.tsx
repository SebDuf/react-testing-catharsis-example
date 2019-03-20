import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon, Menu } from 'antd';

interface State {
  selectedTabs: string[];
}

class DashboardContainer extends Component<{}, State> {

  public state = {
    selectedTabs: ['home'],
  };

  public render(): JSX.Element {
    return (
      <div>
        <Menu
          mode="horizontal"
          selectedKeys={this.state.selectedTabs}
        >
          <Menu.Item key="home">
            <Icon type="home" />
            Home
          </Menu.Item>
          <Menu.Item key="jobs">
            <Icon type="rocket" />
            Jobs
          </Menu.Item>
          <Menu.Item key="alipay">
            <Icon type="idcard" />
            Applied
          </Menu.Item>
        </Menu>
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
