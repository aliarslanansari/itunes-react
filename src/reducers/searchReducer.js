import { SEARCH } from '../constants';

const searchReducer = (state = 'bollywood', action) => {
    switch (action.type) {
        case SEARCH.ADD:
            return action.search;
        default:
            return state;
    }
};

export default searchReducer;
