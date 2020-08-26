import { SONGS } from '../constants';

const songsReducer = (state = [], action) => {
    if (action.type === SONGS.LOAD_SUCCESS) {
        return action.songs.results;
    }
    return state;
};

export default songsReducer;
