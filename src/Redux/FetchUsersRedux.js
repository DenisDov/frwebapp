import { createReducer } from 'reduxsauce';
import { createSelector } from 'reselect';
import * as actions from '../utils/actionTypes';

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
  data: [],
  error: false,
};

/* ------------- Selectors ------------- */

// const getUsers = state => state.UsersReducer.data;

export const usersSelector = createSelector(state => state.UsersReducer.data, data => data);
console.log('usersSelector: ', usersSelector);

/* ------------- Reducers ------------- */

export const success = (state = INITIAL_STATE, action) => ({
  ...state,
  data: action.payload,
  error: false,
});

export const failure = (state = INITIAL_STATE, action) => ({
  ...state,
  data: [],
  errorMessage: action.payload,
});

// map our action types to our reducer functions
export const HANDLERS = {
  [actions.FETCHING_USERS_DATA_SUCCESS]: success,
  [actions.FETCHING_USERS_DATA_FAIL]: failure,
};

export default createReducer(INITIAL_STATE, HANDLERS);
