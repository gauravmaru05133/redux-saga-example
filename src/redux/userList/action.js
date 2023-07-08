import { USER_LIST_FAILED, USER_LIST_LOADING, USER_LIST_SUCCESS } from './reducer';

export const userListLoading = payload => {
  return {
    type: USER_LIST_LOADING,
    res: false,
    payload,
  };
};
export const userListFind = data => {
  return {
    type: USER_LIST_SUCCESS,
    data,
    res: true,
  };
};
export const userListFailed = error => {
  return {
    type: USER_LIST_FAILED,
    error,
    res: false,
  };
};

