import { Form, Icon, Input, Button } from 'antd';
import React from 'react';
import { FormComponentProps } from 'antd/lib/form';
import styled from 'styled-components';
import { withTranslation, WithTranslation } from 'react-i18next';

const StyledForm = styled(Form)`
    max-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Root = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
`;

const InputIcon = styled(Icon)`
  color: rgba(0,0,0,.25);
`;

interface Props {
  onSignup: (username: string, password: string, profile: any) => void;
}

type AllProps = Props & FormComponentProps & WithTranslation

export class Signup extends React.Component<AllProps> {

  private handleSubmit = (e: any) => {
    e.preventDefault();

    this.props.form.validateFields((err) => {
      if (!err) {
        const { onSignup } = this.props;

        onSignup(
          this.props.form.getFieldValue('username'),
          this.props.form.getFieldValue('password'),
          {
            firstName: this.props.form.getFieldValue('firstName'),
            lastName: this.props.form.getFieldValue('lastName'),
          },
        );
      }
    });
  };

  public render(): JSX.Element {
    const { t } = this.props;
    const { getFieldDecorator } = this.props.form;

    const passwordFormRule = getFieldDecorator('password', {
      rules: [{ required: true, message: t('passwordRequired') }],
    });

    const usernameFormRule = getFieldDecorator('username', {
      rules: [{ required: true, message: t('usernameRequired') }],
    });

    const firstNameRule = getFieldDecorator('firstName', {
      rules: [{ required: true, message: t('required') }],
    });

    const lastNameRule = getFieldDecorator('lastName', {
      rules: [{ required: true, message: t('required') }],
    });

    return (
      <Root data-testid="login">
        <StyledForm onSubmit={this.handleSubmit}>
          <Form.Item>
            {usernameFormRule(
              <Input placeholder={t('username')} prefix={<InputIcon type="user" />} />,
            )}
          </Form.Item>

          <Form.Item>
            {passwordFormRule(
              <Input placeholder={t('password')} prefix={<InputIcon type="lock" />} type="password" />,
            )}
          </Form.Item>

          <Form.Item>
            {firstNameRule(
              <Input placeholder={t('firstName')} prefix={<InputIcon type="user" />} />,
            )}
          </Form.Item>

          <Form.Item>
            {lastNameRule(
              <Input placeholder={t('lastName')} prefix={<InputIcon type="user" />} />,
            )}
          </Form.Item>

          <Form.Item>
            <Button data-testid="loginButton" htmlType="submit" type="primary">
              {t('signup')}
            </Button>
          </Form.Item>
        </StyledForm>
      </Root>
    );
  }

}

const componentWithForm = Form.create({ name: 'login' })(Signup);
const componentWithTranslation = withTranslation('authentication')(componentWithForm);

export default componentWithTranslation;
