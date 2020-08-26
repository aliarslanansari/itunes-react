import loadingReducer from './loadingReducer';
import songsReducer from './songsReducer';
import songReducer from './songReducer';
import idReducer from './idReducer';
import errorReducer from './errorReducer';
import searchReducer from './searchReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    songs: songsReducer,
    error: errorReducer,
    search: searchReducer,
    song_id: idReducer,
    song: songReducer
});

export default rootReducer;
