const initialState = {
  listingList: [],
  loading: false,
};

export default (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case 'GET_LISTING_SUCCESS':
      return {
        ...state,
        [payload.bookId]: {
          ...state[payload.bookId],
          [payload.listingId]: payload.listing,
        },
      };
    case 'GET_LISTING_FAIL':
      return {
        ...state,
      };
    case 'GET_LISTING_LIST_SUCCESS':
      return {
        ...state,
        listingList: [
          ...state.listingList,
          ...payload.listingList,
        ],
      };
    case 'GET_LISTING_LIST_FAIL':
      return {
        ...state,
      };
    case 'LOAD_LISTING_LIST':
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};
