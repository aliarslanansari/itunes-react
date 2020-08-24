import React, { useState, useEffect } from 'react';
import { fetchSong } from '../../api';
import { Descriptions, Row, Col, Spin } from 'antd';
import Player from '../Player';
import styled from 'styled-components';
import './styles.css';
const Img = styled.img`
    height: 250px;
    width: 100%;
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
            {item.trackName ? (
                <div>
                    <h1>{item.trackName}</h1>
                    <Row gutter={[8, 8]}>
                        <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                            <Img src={item.artworkUrl100} alt={item.trackName} />
                        </Col>
                        <Col xs={24} sm={24} md={18} lg={18} xl={18}>
                            <Descriptions bordered size="small">
                                <Descriptions.Item label="Song Name">{item.trackName}</Descriptions.Item>
                                <Descriptions.Item label="Album">{item.collectionName}</Descriptions.Item>
                                <Descriptions.Item label="Artist Name">{item.artistName}</Descriptions.Item>
                                <Descriptions.Item label="Release Date">{item.releaseDate}</Descriptions.Item>
                                <Descriptions.Item label="Release Date">{item.releaseDate}</Descriptions.Item>
                            </Descriptions>
                        </Col>
                    </Row>
                </div>
            ) : (
                <Spin style={{ margin: '0 auto' }} size="large"></Spin>
            )}

            {item.previewUrl && (
                <div>
                    <h1>Track Preview</h1>
                    <Player src={item.previewUrl} />{' '}
                </div>
            )}
        </div>
    );
}
export default SongDetails;
