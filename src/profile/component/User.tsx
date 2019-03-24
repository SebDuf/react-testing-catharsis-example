import React, { Component } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import { RouteComponentProps, withRouter } from 'react-router';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { saveProfile } from 'src/profile/action';
import { Input, Button } from 'antd';

const Root = styled.div`
    justify-content: center;
    display:flex;
    flex-direction: column;
    align-items: center;
    max-width: 400px;
    margin: auto;
`;

const Names = styled.div`
    display: flex;
`;

const Name = styled.p`
    font-size: 16px;
`;

const FirstName = styled(Name)`
    margin-right: 5px;
    font-weight: bold;
`;

const Description = styled.p`
  font-size: 14px;
`;

interface Props {
  actions: {
    saveProfile: (profile: any) => void;
  };
  profile: any;
}

interface State {
  description: string;
  edit: boolean;
}

type AllProps = Props & WithTranslation & RouteComponentProps

class User extends Component<AllProps, State> {

  public state = {
    description: '',
    edit: false,
  }

  public componentDidMount(): void {
    this.setState({
      description: this.props.profile.description,
    });
  }

  public enableEdit = () => {
    this.setState({ edit: true });
  }

  private saveProfile = () => {
    const oldProfile = this.props.profile;

    const newProfile = {
      ...oldProfile,
      description: this.state.description,
    };

    this.props.actions.saveProfile(newProfile);

    this.setState({ edit: false });
  }

  private handleDescriptionChange(description: string) {
    this.setState({ description });
  }

  public render(): JSX.Element {
    const { profile, t } = this.props;

    return (
      <Root>
        <Names>
          <FirstName>{profile.name}</FirstName>
          <Name>{profile.lastName}</Name>
        </Names>

        {this.state.edit ?
          <Input onChange={(event) => this.handleDescriptionChange(event.target.value)} value={this.state.description} />
          :
          <Description>{profile.description}</Description>
        }

        <Description>
          {t('preferences')}
:
          {' '}
          {profile.preferences}
        </Description>

        {this.state.edit ?
          <Button icon="save" onClick={() => this.saveProfile()}>{t('save')}</Button>
          :
          <Button icon="edit" onClick={() => this.setState({ edit: true })}>{t('edit')}</Button>
        }

        {JSON.stringify(profile, null, 2)}
      </Root>
    );
  }

}

function mapStateToProps() {
  return {
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    actions: {
      saveProfile: (profile: any) => dispatch(saveProfile(profile)),
    },
  };
}

const componentWithRedux = connect(mapStateToProps, mapDispatchToProps)(User);
const componentWithTranslation = withTranslation('profile')(componentWithRedux);
const componentWithRouter = withRouter(componentWithTranslation);

export default componentWithRouter;
