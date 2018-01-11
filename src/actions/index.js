export const LOAD_COIN_LIST_REQUEST = "LOAD_COIN_LIST_REQUEST";
export const LOAD_COIN_LIST_SUCCESS = "LOAD_COIN_LIST_SUCCESS";
export const UPDATE_SORT = "UPDATE_SORT";

export const loadCoinListRequest = () => ({
  type: LOAD_COIN_LIST_REQUEST
});

export const loadCoinListSuccess = result => ({
  type: LOAD_COIN_LIST_SUCCESS,
  result
});

export const updateSortList = param => ({
  type: UPDATE_SORT,
  param
});
