import React, { Component } from 'react';
import { Button, Icon, Menu } from 'antd';
import { SelectParam } from 'antd/lib/menu';
import styled from 'styled-components';
import { withTranslation, WithTranslation } from 'react-i18next';
import { LanguagePicker } from 'src/dashboard/component/LanguagePicker';
import { Tabs } from 'src/main/container/MainContainer';
import { RouteComponentProps, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { logoutAction } from 'src/authentication/action';
import { getAuthenticated } from 'src/authentication/selector';
import { ApplicationStore } from 'src/main/store/store';

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

const ProfileButton = styled(Button)`
    margin-left: 10px;
`;

const LogoutButton = styled(Button)`
    margin-left: 10px;
`;

const LoginButtons = styled(Button)`
    margin-left: 10px;
`;

interface Props {
  actions: {
    logout: () => void;
  };
  active: string;
  isAuthenticated: boolean;
  onChange: (param: string) => void;
}

type AllProps = Props & WithTranslation & RouteComponentProps

class TopNavigationBar extends Component<AllProps> {

  private onTabChange = (params: SelectParam) => {
    this.props.onChange(params.key);
  };

  private goToLogin = () => {
    this.props.history.push('/login');
  }

  private goToProfile = () => {
    this.props.history.push('/profile');
  }

  private onLogout = () => {
    this.props.actions.logout();
    this.props.history.push('/');
  }

  public render(): JSX.Element {
    const { isAuthenticated, t } = this.props;

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
          {isAuthenticated ?
            <>
              <ProfileButton icon="user" onClick={this.goToProfile} shape="circle" />
              <LogoutButton icon="logout" onClick={this.onLogout} shape="circle" />
            </>
            :
            <>
              <LoginButtons onClick={this.goToLogin}>
                {t('login')}
              </LoginButtons>
            </>
          }
        </Secondary>
      </MainMenu>
    );
  }

}

function mapStateToProps(state: ApplicationStore) {
  return {
    isAuthenticated: getAuthenticated(state),
  };
}

function mapDispatchToProps(dispatch: Function) {
  return {
    actions: {
      logout: () => dispatch(logoutAction()),
    },
  };
}

const componentWithRedux = connect(mapStateToProps, mapDispatchToProps)(TopNavigationBar);
const componentWithTranslation = withTranslation('dashboard')(componentWithRedux);
const componentWithRouter = withRouter(componentWithTranslation);

export default componentWithRouter;
