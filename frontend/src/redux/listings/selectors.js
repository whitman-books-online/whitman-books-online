import { createSelector } from 'reselect';

const getListingList = state => state.listingsReducer.listingList;

const getListingIds = (state, props) => props.listingIds;

const getUserId = (state, props) => props.userId;

// get listing list from listing IDs
export const makeGetListingListByIds = () =>
  createSelector(
    [getListingList, getListingIds],
    (listingList, listingIds) => {
      const listingListByIds = listingList.filter(item => listingIds.includes(item.listing_id));
      return listingListByIds;
    },
  );

// get listing list from user ID
export const makeGetListingListByUser = () =>
  createSelector(
    [getListingList, getUserId],
    (listingList, userId) => {
      const listingListByUser = Object.keys(listingList)
        .filter(key => userId === key)
        .reduce((obj, key) => {
          obj[key] = listingList[key];
          return obj;
        }, {});
      return listingListByUser;
    },
  );
