import { takeLatest, call, put, select } from 'redux-saga/effects';
import { SONGS } from '../constants';
import { fetchSongs } from '../api/';
import { setSongs, setError } from '../actions';

export const getTerm = state => state.search;

export function* handleSongsLoad() {
    try {
        const search = yield select(getTerm);
        const songs = yield call(fetchSongs, search);
        yield put(setSongs(songs));
    } catch (error) {
        //dispatch error saga
        yield put(setError(error.toString()));
    }
}

export default function* watchSongsLoad() {
    yield takeLatest(SONGS.LOAD, handleSongsLoad);
}
