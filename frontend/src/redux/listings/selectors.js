import { createSelector } from 'reselect';

const getListingList = state => state.listingsReducer.listingList;

const getListingIds = (state, props) => props.listingIds;

export const makeGetListingListByIds = () =>
  createSelector(
    [getListingList, getListingIds],
    (listingList, listingIds) => {
      const listingListByIds = Object.keys(listingList)
        .filter(key => listingIds.includes(key))
        .reduce((obj, key) => {
          obj[key] = listingList[key];
          return obj;
        }, {});
      return listingListByIds;
    },
  );
