import loadingReducer from './loadingReducer';
import songsReducer from './songsReducer';
import errorReducer from './errorReducer';
import searchReducer from './searchReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    songs: songsReducer,
    error: errorReducer,
    search: searchReducer,
});

export default rootReducer;
