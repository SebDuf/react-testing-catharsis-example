import React, { Component } from 'react';
import { Button, Icon, Menu } from 'antd';
import { SelectParam } from 'antd/lib/menu';
import styled from 'styled-components';

const MainMenu = styled(Menu)`
    display: flex;
    align-items: center;
`;

const Secondary = styled.li`
    display: flex;
    flex: 1;
    justify-content: flex-end;
    height: 100%;
    margin-right: 20px;
`;

const LanguageButton = styled(Button)`
    box-shadow: none;
`;

interface Props {
  active: string;
  onChange: (param: string) => void;
}

export class TopNavigationBar extends Component<Props> {

  private onTabChange = (params: SelectParam) => {
    this.props.onChange(params.key);
  };

  public render(): JSX.Element {
    return (
      <MainMenu
        mode="horizontal"
        onSelect={this.onTabChange}
        selectedKeys={[this.props.active]}
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

        <Secondary>
          <LanguageButton icon="global" shape="circle" />
        </Secondary>
      </MainMenu>
    );
  }

}
