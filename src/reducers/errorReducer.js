import { SONGS, SONG } from '../constants';
const errorReducer = (state = null, action) => {
    switch (action.type) {
        case SONGS.LOAD_FAIL:
            return action.error;
        case SONGS.LOAD:
        case SONGS.LOAD_SUCCESS:
            return null;
        case SONG.LOAD_SUCCESS:
            return null;
        default:
            return state;
    }
};
export default errorReducer;
