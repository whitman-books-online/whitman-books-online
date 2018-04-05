const initialState = {
  userList: {},
};

export default (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case 'GET_USER_SUCCESS':
      return {
        ...state,
        userList: {
          ...state.userList,
          [payload.userId]: payload.user,
        },
      };
    case 'GET_USER_FAIL':
      return {
        ...state,
      };
    case 'GET_USER_LIST_SUCCESS':
      return {
        ...state,
        userList: {
          ...state.userList,
          [payload.pathname]: payload.userList,
        },
      };
    case 'GET_USER_LIST_FAIL':
      return {
        ...state,
      };
    case 'LOAD_USER_LIST':
      return {
        ...state,
        loading: payload.pathname,
      };

    default:
      return state;
  }
};
