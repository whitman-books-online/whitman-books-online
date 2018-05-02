import sampleData from '../sampleData';
import { getUserList } from '../users/actions';
const { LISTING_DATA } = sampleData;
const LISTINGS_ENDPOINT = 'http://127.0.0.1:5000/listings/';
const LISTING_ENDPOINT = 'http://127.0.0.1:5000/listing/';

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

export function deleteListingSuccess(listingId) {
  return {
    type: 'DELETE_LISTING_SUCCESS',
    payload: {
      listingId,
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

export function deleteListing(listingId) {
  return (dispatch) => {
    const urlDest = `${LISTING_ENDPOINT}${listingId}`;
    const requestIds = new XMLHttpRequest();
    requestIds.open('DELETE', urlDest);
    requestIds.responseType = "json";
    requestIds.send(urlDest);
    requestIds.onload = () => {
      dispatch(deleteListingSuccess(listingId));
    };
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

export function getUserListingList(listingIds) {
  return (dispatch) => {
    const urlDest = `${LISTING_ENDPOINT}${listingIds}`;
    const requestIds = new XMLHttpRequest();
    requestIds.open('GET', urlDest);
    requestIds.responseType = "json";
    requestIds.send(urlDest);
    requestIds.onload = () => {
      const listingObjs = requestIds.response;
      const listingList = listingObjs.listings;
      dispatch(getListingListSuccess(listingList));
    };
  };
}


export function getListingList(listingIds) {
  return (dispatch, getState) => {
    const state = getState();
    const { sort } = state.searchReducer.listings;
    const urlDest = `${LISTINGS_ENDPOINT}${listingIds}+${sort}`;
    const requestIds = new XMLHttpRequest();
    requestIds.open('GET', urlDest);
    requestIds.responseType = "json";
    requestIds.send(urlDest);
    requestIds.onload = () => {
      const listingObjs = requestIds.response;
      const listingList = listingObjs.listings;
      const userIds = listingObjs.google_tokens;
      dispatch(getListingListSuccess(listingList));
      dispatch(getUserList(userIds));
    };
  };
}
