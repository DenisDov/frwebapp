import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from './config/store';

import App from './containers/App';

import 'sanitize.css/sanitize.css';
import './config/global-styles';

// import registerServiceWorker from './utils/registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
// registerServiceWorker();
