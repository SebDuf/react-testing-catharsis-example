import React, { Component } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import { RouteComponentProps, withRouter } from 'react-router';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Root = styled.div`
    justify-content: center;
    display:flex;
    flex-direction: column;
    align-items: center;
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
  profile: any;
}

type AllProps = Props & WithTranslation & RouteComponentProps

class User extends Component<AllProps> {

  public render(): JSX.Element {
    const { profile } = this.props;

    return (
      <Root>
        <Names>
          <FirstName>{profile.name}</FirstName>
          <Name>{profile.lastName}</Name>
        </Names>

        <Description>{profile.description}</Description>
        {JSON.stringify(profile, null, 2)}
      </Root>
    );
  }

}

function mapStateToProps() {
  return {
  };
}

const componentWithRedux = connect(mapStateToProps)(User);
const componentWithTranslation = withTranslation('profile')(componentWithRedux);
const componentWithRouter = withRouter(componentWithTranslation);

export default componentWithRouter;
