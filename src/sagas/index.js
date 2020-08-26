import { all } from 'redux-saga/effects';
import songsSaga from './songsSaga';
import songSaga from './songSaga';

export default function* rootSaga() {
    yield all([songsSaga(), songSaga()]);
}
