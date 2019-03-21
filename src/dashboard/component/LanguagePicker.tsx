import React, { Component } from 'react';
import { Button, Popover } from 'antd';
import styled from 'styled-components';
import i18next from 'i18next';

const LanguageButton = styled(Button)`
    box-shadow: none;
`;

const Options = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
`;

const Option = styled.li`
  margin-right: -16px;
  margin-left: -16px;
  padding: 5px 16px 10px;
  &:hover {
    background-color: #d8d8d8;
    cursor: pointer;
  }
  
  transition: background-color 0.2s;
`;

interface State {
  opened: boolean;
}

export class LanguagePicker extends Component<{}, State> {

  public state = {
    opened: false,
  };

  public render(): JSX.Element {
    return (
      <Popover
        content={
          <Options>
            <Option onClick={() => this.setLanguage('en')}>English</Option>
            <Option onClick={() => this.setLanguage('fr')}>Français</Option>
          </Options>
        }
        placement="bottomRight"
        trigger="click"
        visible={this.state.opened}
      >
        <LanguageButton icon="global" onClick={this.handleClick} shape="circle" />
      </Popover>
    );
  }

  private handleClick = () => {
    this.setState(prevState => ({ opened: !prevState.opened }));
  };

  private setLanguage = (language: string) => {
    i18next.changeLanguage(language);
  }

}
