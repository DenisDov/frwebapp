import axios from 'axios';
import apiBaseURL from '../utils/constants';
import * as actions from '../utils/actionTypes';

export default function FetchUsersData() {
  return (dispatch) => {
    dispatch({ type: actions.FETCHING_USERS_DATA });

    return axios
      .get(`${apiBaseURL}/character`)
      .then((response) => {
        dispatch({ type: actions.FETCHING_USERS_DATA_SUCCESS, payload: response.data.results });
      })
      .catch((error) => {
        dispatch({ type: actions.FETCHING_USERS_DATA_FAIL, payload: error.message });
      });
  };
}
