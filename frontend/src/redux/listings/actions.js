import sampleData from '../sampleData';

const { LISTING_DATA } = sampleData;

export function getListingSuccess(listingId, listing) {
  return {
    type: 'GET_BOOK_SUCCESS',
    payload: {
      listingId,
      listing,
    },
  };
}

export function getListingFail() {
  return {
    type: 'GET_LISTING_FAIL',
  };
}

export function getListingListSuccess(listingList) {
  return {
    type: 'GET_LISTING_LIST_SUCCESS',
    payload: {
      listingList,
    },
  };
}

export function getListingListFail() {
  return {
    type: 'GET_LISTING_LIST_FAIL',
  };
}

export function loadListingList(boolean) {
  return {
    type: 'LOAD_LISTING_LIST',
    payload: {
      boolean,
    },
  };
}

export function fetchListing(listingId) {
  return (dispatch) => {
    setTimeout(() => {
      if (LISTING_DATA[listingId]) {
        const listing = LISTING_DATA[listingId];
        dispatch(getListingSuccess(listingId, listing));
      } else {
        dispatch(getListingFail());
      }
    }, 2000);
  };
}

export function getListing(listingId) {
  return (dispatch, getState) => {
    const state = getState();
    const { listingList } = state.listingReducer;
    if (listingList[listingId]) {
      const listing = listingList[listingId];
      dispatch(getListingSuccess(listingId, listing));
    } else {
      dispatch(fetchListing(listingId));
    }
  };
}

export function fetchListingList(query) {
  return (dispatch) => {
    const { listingIds } = query;
    setTimeout(() => {
      const listingData = LISTING_DATA;
      const listingList = Object.keys(listingData)
        .filter(key => listingIds.includes(key))
        .reduce((obj, key) => {
          obj[key] = listingData[key];
          return obj;
        }, {});
      dispatch(getListingListSuccess(listingList));
      dispatch(loadListingList(false));
    }, 2000);
  };
}

export function getListingList(query) {
  return (dispatch) => {
    dispatch(loadListingList(true));
    dispatch(fetchListingList(query));
  };
}
