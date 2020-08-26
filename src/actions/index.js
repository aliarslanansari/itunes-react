import { SONGS, SONG, SEARCH } from '../constants';
const loadSongs = () => ({ type: SONGS.LOAD });
const setSongs = songs => ({
    type: SONGS.LOAD_SUCCESS,
    songs
});
const setError = error => ({
    type: SONGS.LOAD_FAIL,
    error
});

const setSearch = search => ({
    type: SEARCH.ADD,
    search
});

const loadSong = () => ({ type: SONG.LOAD });
const setSongId = id => ({
    type: SONG.SAVE_ID,
    id
});
const setSong = song => ({
    type: SONG.LOAD_SUCCESS,
    song
});

export { loadSongs, setSongs, setError, setSearch, setSongId, setSong, loadSong };
