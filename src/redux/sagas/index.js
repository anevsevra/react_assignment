import { all } from 'redux-saga/effects';
import initSaga from './initSaga';

export default function* () {
  yield all([initSaga()]);
}
