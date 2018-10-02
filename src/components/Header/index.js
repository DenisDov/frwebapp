import React, { Component } from 'react';
import styled from 'styled-components';
import Images from '../Images';

import theme from '../../config/theme';

const AppHeader = styled.header`
  text-align: center;
  padding-top: 30px;
  background-color: ${theme.palette.primary.main};
`;

class Header extends Component {
  render() {
    return (
      <AppHeader>
        <Images.Logo />
        <h2>{this.props.title}</h2>
      </AppHeader>
    );
  }
}

export default Header;
