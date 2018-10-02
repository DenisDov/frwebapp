import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import FontFaceObserver from 'fontfaceobserver';

import store from '../config/store';
import theme from '../config/theme';

import HomeScreen from './HomeScreen';
import SandboxScreen from './Sandboxroute';

import Header from '../components/Header';
import Footer from '../components/Footer';

new FontFaceObserver('Roboto').load().then(() => {
  document.body.classList.add('fontLoaded');
});

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const AppHolder = styled.main`
  flex-grow: 1;
  padding: 30px 0;
`;

const AppContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 0 15px;
`;

const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for
      {' '}
      <code>{location.pathname}</code>
    </h3>
  </div>
);

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <AppWrapper>
        <Header title="Welcome to Freshbot" />

        <AppHolder>
          <AppContainer>
            <Router>
              <Switch>
                <Route exact path="/" component={HomeScreen} />
                <Route path="/users" component={SandboxScreen} />
                <Route component={NoMatch} />
              </Switch>
            </Router>
          </AppContainer>
        </AppHolder>

        <Footer title="Footer" />
      </AppWrapper>
    </MuiThemeProvider>
  </Provider>
);

export default App;
