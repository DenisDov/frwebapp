import React from 'react';
import styled from 'styled-components';
import { rem, darken } from 'polished';
import PropTypes from 'prop-types';

const Button = styled.button`
  font-family: 'Lato', sans-serif;
  font-size: ${rem('16px')}
  display: inline-block;
  vertical-align: middle;
  padding: ${rem('7px')} ${rem('20px')};
  border-width: ${rem('2px')}
  color: #fff;
  background-color: ${props => props.theme.main};
  border-color: ${props => props.theme.main};
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  &:focus,
  &:active {
    outline: none;
    border-style: solid;
  }
  &:hover {
    background-color: ${props => darken(0.05, props.theme.main)};
    border-color: ${props => darken(0.05, props.theme.main)};
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }
  &[disabled]:hover {
    background-color: ${props => props.theme.main};
    border-color: ${props => props.theme.main};
  }
`;

const AppButton = ({ name, ...props }) => (
  <Button type="button" {...props}>
    {name}
  </Button>
);

AppButton.propTypes = {
  name: PropTypes.string,
};

export default AppButton;
