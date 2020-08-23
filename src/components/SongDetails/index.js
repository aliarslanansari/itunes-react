import React, { useState, useEffect } from 'react';
import { fetchSong } from '../../api';
import Player from '../Player';
function SongDetails({ match }) {
    useEffect(() => {
        async function fetchData() {
            const data = await fetchSong(match.params.id);
            console.log(data);
            setItem(data); // this.props.fetchSong(match.params.id);
        }
        fetchData();
    }, []);
    const [item, setItem] = useState({});
    return (
        <div>
            <img src={item.artworkUrl100} alt={item.trackName} />
            <Player src={item.previewUrl} />
            Download Song
        </div>
    );
}
export default SongDetails;
