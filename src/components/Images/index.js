/* eslint-disable global-require */

import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Logo = styled.img`
  animation: ${rotate360} 10s linear infinite;
  width: 100px;
`;

const AppleBadge = styled.img`
  width: 100px;
`;

const GoogleBadge = styled.img`
  width: 100px;
`;

export default {
  Logo: props => <Logo src={require('./img/logo.png')} alt="Logo" {...props} />,
  AppleBadge: props => (
    <AppleBadge src={require('./img/appstore-badge.svg')} alt="Appstore" {...props} />
  ),
  GoogleBadge: props => (
    <GoogleBadge src={require('./img/google-play-badge.svg')} alt="Google Play" {...props} />
  ),
};
