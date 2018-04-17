const initialState = {
  books: {
    searchValue: '',
    page: 0,
    length: 20,
  },
  listings: {
    price: null,
    condition: null,
    page: 0,
    length: 20,
  },
};

export default (state = initialState, action) => {
  const { payload, type} = action;
  switch (type) {
    case 'CHANGE_LISTING_PRICE':
    return {
      ...state,
      listings: {
        ...state.listings,
        price: payload.price,
      }
    };
    case 'CHANGE_LISTING_PRICE_FAIL':
    return{
      ...state,
    };
    case 'CHANGE_LISTING_CONDITION':
    return{
      ...state,
      listings: {
        ...state.listings,
        condition: payload.condition,
      }
    };
    case 'CHANGE_LISTING_CONDITION_FAIL':
    return{
      ...state,
    };
    case 'CHANGE_SEARCH_VALUE':
    return{
      ...state,
      books: {
        ...state.books,
        searchValue: payload.searchValue,
      }
    };
    case 'CHANGE_SEARCH_VALUE_FAIL':
    return {
      ...state,
    };
    case 'CHANGE_LISTING_PAGE':
    return{
      ...state,
      listings: {
        ...state.listings,
        page: payload.page,
      }
    };
    case 'CHANGE_LISTING_PAGE_FAIL':
    return{
      ...state,
    };
    case 'CHANGE_LISTING_LENGTH':
    return {
      ...state,
      listings: {
        ...state.listsings,
        length: payload.length,
      }
    };
    case 'CHANGE_LISTING_LENGTH_FAIL':
    return {
      ...state,
    };

    default:
    return state;
  }
};
