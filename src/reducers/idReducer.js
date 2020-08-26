import { SONG } from '../constants';
const idReducer = (state = null, action) => {
    switch (action.type) {
        case SONG.SAVE_ID:
            return action.id;
        default:
            return state;
    }
};
export default idReducer;
