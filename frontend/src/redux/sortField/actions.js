import sampleDate from '../sampleData';

export function changeSortValue(value) {
  return {
    type: 'CHANGE_SORT_VALUE',
    payload: value,
  };
}

export function changeSortValueFail(value) {
  return {
    type: 'CHANGE_SORT_VALUE_FAIL',
  };
}