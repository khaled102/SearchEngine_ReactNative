import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
  import { SEARCH } from '../actions/ACTION_TYPES';
  import {
      searchPending,
      searchSuccess,
      searchError
  } from '../actions';
  
  function* searchSaga({payload}) {
    const { input } = payload;
    yield put(searchPending());
    try {
      yield put(searchSuccess(input));
    } catch (error) {
      yield put(searchError(error));
    }
  }
  export function* watchSearchSaga() {
    yield takeLatest(SEARCH.ACTION, searchSaga);
  }
  