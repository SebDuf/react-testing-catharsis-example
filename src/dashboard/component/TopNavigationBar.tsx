import React, { Component } from 'react';
import { Icon, Menu } from 'antd';
import { SelectParam } from 'antd/lib/menu';
import styled from 'styled-components';
import { withTranslation, WithTranslation } from 'react-i18next';
import { LanguagePicker } from 'src/dashboard/component/LanguagePicker';
import { Tabs } from 'src/main/container/MainContainer';
import { RouteComponentProps, withRouter } from 'react-router';

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

type AllProps = Props & WithTranslation & RouteComponentProps

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
        <Menu.Item key={Tabs.HOME} onClick={() => this.props.history.push('/')}>
          <Icon type="home" />
          {t('home')}
        </Menu.Item>
        <Menu.Item key={Tabs.JOBS} onClick={() => this.props.history.push('/jobs')}>
          <Icon type="rocket" />
          {t('jobs')}
        </Menu.Item>
        <Menu.Item key={Tabs.APPLIED} onClick={() => this.props.history.push('/applied')}>
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
const componentWithRouter = withRouter(componentWithTranslation);

export default componentWithRouter;
