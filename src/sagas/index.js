import { all, fork} from 'redux-saga/effects';
import { homeSagas } from '../home';

export default function* rootSaga (getState) {
  yield all([
    fork(homeSagas)
  ]);
};