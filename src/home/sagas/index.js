import {all, fork} from 'redux-saga/effects';
import {watchMenuItemsSaga} from './menu-saga';
import {watchBrandFilterSaga} from './brand-filter-saga';
import {watchSearchSaga} from './search-saga';

export function* homeSagas() {
    yield all([
      fork(watchMenuItemsSaga),
      fork(watchBrandFilterSaga),
      fork(watchSearchSaga),
    ]);
}