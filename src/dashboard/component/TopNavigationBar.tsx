import React, { Component } from 'react';
import { Icon, Menu } from 'antd';
import { SelectParam } from 'antd/lib/menu';
import styled from 'styled-components';
import { withTranslation, WithTranslation } from 'react-i18next';
import { LanguagePicker } from 'src/dashboard/component/LanguagePicker';

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

interface Props {
  active: string;
  onChange: (param: string) => void;
}

type AllProps = Props & WithTranslation

class TopNavigationBar extends Component<AllProps> {

  private onTabChange = (params: SelectParam) => {
    this.props.onChange(params.key);
  };

  public render(): JSX.Element {
    const { t } = this.props;

    return (
      <MainMenu
        mode="horizontal"
        onSelect={this.onTabChange}
        selectedKeys={[this.props.active]}
      >
        <Menu.Item key="home">
          <Icon type="home" />
          {t('home')}
        </Menu.Item>
        <Menu.Item key="jobs">
          <Icon type="rocket" />
          {t('jobs')}
        </Menu.Item>
        <Menu.Item key="alipay">
          <Icon type="idcard" />
          {t('applied')}
        </Menu.Item>

        <Secondary>
          <LanguagePicker />
        </Secondary>
      </MainMenu>
    );
  }

}

const componentWithTranslation = withTranslation('dashboard')(TopNavigationBar);

export default componentWithTranslation;
