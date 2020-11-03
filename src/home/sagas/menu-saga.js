import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
  import { MENU_ITEMS } from '../actions/ACTION_TYPES';
  import {
      menuItemsPending,
      menuItemsSuccess,
      menuItemsError
  } from '../actions';
  
  function* menuItemsSaga({payload}) {
    const { show } = payload;
    yield put(menuItemsPending());
    try {
      yield put(menuItemsSuccess(show));
    } catch (error) {
      yield put(menuItemsError(error));
    }
  }
  export function* watchMenuItemsSaga() {
    yield takeLatest(MENU_ITEMS.ACTION, menuItemsSaga);
  }
  