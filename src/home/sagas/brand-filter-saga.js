import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
  import { BRAND_FILTER } from '../actions/ACTION_TYPES';
  import {
      brandFilterPending,
      brandFilterSuccess,
      brandFilterError
  } from '../actions';
  
  function* brandFilterSaga({payload}) {
    const { brand } = payload;
    yield put(brandFilterPending());
    try {
      yield put(brandFilterSuccess(brand));
    } catch (error) {
      yield put(brandFilterError(error));
    }
  }
  export function* watchBrandFilterSaga() {
    yield takeLatest(BRAND_FILTER.ACTION, brandFilterSaga);
  }
  