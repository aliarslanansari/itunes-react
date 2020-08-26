const URL = 'https://itunes.apple.com/search?';
const proxy = 'https://cors-anywhere.herokuapp.com/';

const fetchSongs = async search => {
    const response = await fetch(`${proxy}${URL}term=${search}&limit=48`);
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(data.error);
    }
    return data;
};

const fetchSong = async id => {
    const URL = `${proxy}http://itunes.apple.com/lookup?entity=song&id=${id}`;
    const response = await fetch(URL);
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(data.error);
    }
    return data.results[0];
};
export { fetchSongs, fetchSong };
