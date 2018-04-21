const initialState = {
  sortValue: 1,
};

export default (state = initialState, action) => {
  const { payload, type} = action;
  switch (type) {
    case 'CHANGE_SORT_VALUE':
    return {
      ...state,
        sortValue: payload.value
    };

    case 'CHANGE_SORT_VALUE_FAIL':
    return{
      ...state,
    };
    
    default:
      return state;
  }
};
