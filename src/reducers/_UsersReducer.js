import * as actions from '../utils/actionTypes';

const initialState = {
  isFetching: false,
  data: [],
  hasError: false,
  errorMessage: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actions.FETCHING_USERS_DATA:
      return {
        ...state,
        isFetching: true,
        data: null,
        hasError: false,
        errorMessage: null,
      };

    case actions.FETCHING_USERS_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
        hasError: false,
        errorMessage: null,
      };

    case actions.FETCHING_USERS_DATA_FAIL:
      return {
        ...state,
        isFetching: false,
        data: null,
        hasError: true,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
}
