import React, { useState, useEffect } from 'react';
import { fetchSong } from '../../api';
import { Descriptions } from 'antd';
import Player from '../Player';
import styled from 'styled-components';
import './styles.css';
const Img = styled.img`
    height: 200px;
`;
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
        <div className="container">
            <div className="Head">
                <Img src={item.artworkUrl100} alt={item.trackName} layout="vertical" />
                <Descriptions title={item.trackName} bordered size="small">
                    <Descriptions.Item label="Track Name" span="2">
                        {item.trackName}
                    </Descriptions.Item>
                    <Descriptions.Item label="Artist Name" span="2">
                        {item.artistName}
                    </Descriptions.Item>
                    <Descriptions.Item label="Album">{item.collectionName}</Descriptions.Item>
                </Descriptions>
            </div>
            <Player src={item.previewUrl} />
        </div>
    );
}
export default SongDetails;
