import React, { Component } from 'react';
import { Button } from '@material-ui/core';

import FetchScreen from './FetchScreen';

class HomeScreen extends Component {
  render() {
    return (
      <div>
        <Button color="primary">Primary</Button>
        <Button variant="outlined" color="primary">
          outlined
        </Button>
        <Button variant="raised" color="primary">
          Raised
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <FetchScreen />
      </div>
    );
  }
}

export default HomeScreen;
