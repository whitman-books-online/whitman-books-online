const initialState = {
  isAuthenticated: false,
  invalid: false,
  profileObj: null,
  tokenObj: null,
};

export default (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        invalid: false,
        profileObj: payload.profileObj,
        tokenObj: payload.tokenObj,
      };
    case 'LOGIN_FAIL':
      return {
        ...state,
        isAuthenticated: false,
        invalid: true,
        profileObj: null,
        tokenObj: null,
      };
    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        isAuthenticated: false,
        invalid: false,
        profileObj: {},
        tokenObj: {},
      };
    default:
      return state;
  }
};
