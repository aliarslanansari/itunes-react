import { SONGS, SEARCH } from '../constants';
const loadImages = () => ({ type: SONGS.LOAD });
const setSongs = images => ({
    type: SONGS.LOAD_SUCCESS,
    images,
});
const setError = error => ({
    type: SONGS.LOAD_FAIL,
    error,
});

const setSearch = search => ({
    type: SEARCH.ADD,
    search,
});

export { loadImages, setSongs, setError, setSearch };
