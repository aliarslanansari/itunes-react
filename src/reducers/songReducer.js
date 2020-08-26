import { SONG } from '../constants';

const songsReducer = (state = [], action) => {
    if (action.type === SONG.LOAD_SUCCESS) {
        return action.song;
    }
    return state;
};

export default songsReducer;
