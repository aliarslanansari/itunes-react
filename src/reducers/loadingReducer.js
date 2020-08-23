import { SONGS } from '../constants';
const loadingReducer = (state = false, action) => {
    switch (action.type) {
        case SONGS.LOAD:
            return true;
        case SONGS.LOAD_SUCCESS:
            return false;
        case SONGS.LOAD_FAIL:
            return false;
        default:
            return state;
    }
};

export default loadingReducer;
