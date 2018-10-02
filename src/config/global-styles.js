import { injectGlobal } from 'styled-components';

/* eslint-disable no-unused-expressions */
injectGlobal`
  body {
    color: #2b2b2b;
    background-color: #fafafa;
    overflow-x: hidden;
  }
  body.fontLoaded {
    font-family: 'Roboto', sans-serif;
  }
  img {
    max-width: 100%;
  }
`;
