import { create } from 'apisauce';
const proxy = 'https://cors-anywhere.herokuapp.com/';
const api = create({ baseURL: `${proxy}https://itunes.apple.com` });
const URL = 'https://itunes.apple.com/search?';

const fetchSongs = async search => {
    search = search.replace(' ', '-');
    const response = await fetch(`${proxy}${URL}term=${search}&limit=48`);
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(response.error);
    }
    return data;
};
const fetchSong = async id => {
    console.log('FROM API SINGLE SONG', id);
    const URL = `${proxy}https://itunes.apple.com/lookup?entity=song&id=${id}`;
    const response = await fetch(URL);
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(data.error);
    }
    return data.results[0];
};
export { fetchSongs, fetchSong };

//Need to be implemented
const { ITUNES_URL } = process.env;

const apiClients = {
    itunes: null,
    default: null
};

export const getApiClient = (type = 'itunes') => apiClients[type];

export const generateApiClient = (type = 'itunes') => {
    switch (type) {
        case 'itunes':
            apiClients[type] = createApiClientWithTransForm(ITUNES_URL);
            return apiClients[type];
        default:
            apiClients.default = createApiClientWithTransForm(ITUNES_URL);
            return apiClients.default;
    }
};

export const createApiClientWithTransForm = baseURL => {
    const api = create({
        baseURL,
        headers: { 'Content-Type': 'application/json' }
    });
    return api;
};
