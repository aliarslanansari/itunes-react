import { takeLatest, call, put, select } from 'redux-saga/effects';
import { SONG } from '../constants';
import { fetchSong } from '../api/';
import { setSong, setError } from '../actions';

export const getId = state => state.song_id;

export function* handleSongLoad() {
    try {
        const id = yield select(getId);
        const songs = yield call(fetchSong, id);
        yield put(setSong(songs));
    } catch (error) {
        //dispatch error saga
        yield put(setError(error.toString()));
    }
}

export default function* watchSongLoad() {
    yield takeLatest(SONG.LOAD, handleSongLoad);
}
