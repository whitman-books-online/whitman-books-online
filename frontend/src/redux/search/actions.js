import sampleDate from '../sampleData';

export function changePrice(price) {
  return {
    type: 'CHANGE_LISTING_PRICE',
    payload:{
      price,
    }
  };
}

export function changePriceFail() {
  return {
    type: 'CHANGE_LISTING_PRICE_FAIL',
  };
}

export function changeCondition(condition) {
  return {
    type: 'CHANGE_LISTING_CONDITION',
    payload:{
      condition,
    }

  };
}

export function changeConditionFail(condition) {
  return {
    type: 'CHANGE_LISTING_CONDITION_FAIL',
  };
}


export function changeSearchValue(searchValue){
  return{
    type: 'CHANGE_SEARCH_VALUE',
    payload: {
      searchValue,
    }
  };
}

export function changeSearchValueFail(searchValue){
  return{
    type: 'CHANGE_SEARCH_VALUE_FAIL',
  };
}

export function changeListingPage(page) {
  return {
    type: 'CHANGE_LISTING_PAGE',
    payload:{
      page,
    }
  };
}

export function changeListingPageFail(page) {
  return {
    type: 'CHANGE_LISTING_PAGE_FAIL',
  };
}

export function changeListingLength(length) {
  return {
    type: 'CHANGE_LISTING_LENGTH',
    payload:{
      length,
    }
  };
}

export function changeListingLengthFail(length) {
  return {
    type: 'CHANGE_LISTING_LENGTH_FAIL',
  };
}

export function changeSort(sort) {
  return {
    type: 'CHANGE_SORT',
    payload: {
      sort,
    }
  };
}

export function changeSortFail(sort) {
  return {
    type: 'CHANGE_SORT_FAIL',
  };
}

export function changeIds(ids) {
  return {
    type: 'CHANGE_IDS',
    payload:{
      ids,
    }
  };
}

export function changeIdsFail(ids) {
  return {
    type: 'CHANGE_IDS_FAIL'
  };
}
