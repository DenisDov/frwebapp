import React, { Component } from 'react';
import {
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  Avatar,
  ListItemAvatar,
  ListSubheader,
} from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FetchUsersData from '../actions/FetchUsersData';

class FetchScreen extends Component {
  componentDidMount() {
    this.props.FetchUsersData();
  }

  shouldComponentUpdate() {
    const {
      UsersReducer: { data },
    } = this.props;
    if (!data) {
      return true;
    }
    return false;
  }

  renderCoins() {
    const {
      UsersReducer: { data },
    } = this.props;
    return (
      <List component="nav" subheader={<ListSubheader component="div">List Items</ListSubheader>}>
        {data.map(item => (
          <ListItem
            button
            divider
            key={item.id}
            component={NavLink}
            to={{
              pathname: `users/${item.name}`,
              state: {
                name: item.name,
                image: item.image,
                status: item.status,
                created: item.created,
              },
            }}
          >
            <ListItemAvatar>
              <Avatar src={item.image} />
            </ListItemAvatar>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    );
  }

  render() {
    const {
      UsersReducer: { isFetching, hasError, errorMessage },
    } = this.props;
    if (isFetching) {
      return (
        <div style={{ margin: 30, textAlign: 'center' }}>
          <CircularProgress />
        </div>
      );
    }
    if (hasError) {
      return <div>{errorMessage}</div>;
    }
    return <div>{this.renderCoins()}</div>;
  }
}

FetchScreen.propTypes = {
  FetchUsersData: PropTypes.func,
  UsersReducer: PropTypes.object,
};

const mapStateToProps = state => ({
  UsersReducer: state.UsersReducer,
});

const mapDispatchToProps = {
  FetchUsersData,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FetchScreen);
