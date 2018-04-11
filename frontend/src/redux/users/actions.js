import sampleData from '../sampleData';

const { USER_DATA } = sampleData;

export function getUserSuccess(userId, user) {
  return {
    type: 'GET_USER_SUCCESS',
    payload: {
      userId,
      user,
    },
  };
}

export function getUserFail() {
  return {
    type: 'GET_USER_FAIL',
  };
}

export function getUserListSuccess(userList) {
  return {
    type: 'GET_USER_LIST_SUCCESS',
    payload: userList,
  };
}

export function getUserListFail() {
  return {
    type: 'GET_USER_LIST_FAIL',
  };
}

export function loadUserList(boolean) {
  return {
    type: 'LOAD_USER_LIST',
    payload: boolean,
  };
}

export function fetchUser(userId) {
  return (dispatch) => {
    setTimeout(() => {
      if (USER_DATA[userId]) {
        const user = USER_DATA[userId];
        dispatch(getUserSuccess(userId, user));
      } else {
        dispatch(getUserFail());
      }
    }, 2000);
  };
}

export function getUser(userId) {
  return (dispatch, getState) => {
    const state = getState();
    const { userList } = state.usersReducer;
    if (userList[userId]) {
      const user = userList[userId];
      dispatch(getUserSuccess(userId, user));
    } else {
      dispatch(fetchUser(userId));
    }
  };
}

export function getUserList(query) {
  return (dispatch) => {
    dispatch(loadUserList(true));
    setTimeout(() => {
      const userList = USER_DATA;
      dispatch(getUserListSuccess(userList));
      dispatch(loadUserList(false));
    }, 2000);
  };
}
