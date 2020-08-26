import React, { Component } from 'react';
import { Descriptions, Row, Col, Spin } from 'antd';
import Player from '../Player';
import styled from 'styled-components';
import './styles.css';
import { loadSong, setSongId } from '../../actions';
import { connect } from 'react-redux';
const Img = styled.img`
    height: 250px;
    width: 100%;
`;
class SongDetails extends Component {
    componentDidMount() {
        this.props.setSongId(this.props.match.params.id);
        console.log(this.props.match.params.id);
        this.props.loadSong();
    }
    render() {
        const { song, isLoading } = this.props;
        return (
            <div className="container">
                {!isLoading ? (
                    <div>
                        <h1>{song.trackName}</h1>
                        <Row gutter={[8, 8]}>
                            <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                                <Img src={song.artworkUrl100} alt={song.trackName} />
                            </Col>
                            <Col xs={24} sm={24} md={18} lg={18} xl={18}>
                                <Descriptions bordered size="small">
                                    <Descriptions.Item column="4" label="Song Name">
                                        {song.trackName}
                                    </Descriptions.Item>
                                    <Descriptions.Item span={3} label="Album">
                                        {song.collectionName}
                                    </Descriptions.Item>
                                    <Descriptions.Item label="Artist Name">{song.artistName}</Descriptions.Item>
                                    <Descriptions.Item label="Release Date">{song.releaseDate}</Descriptions.Item>
                                </Descriptions>
                            </Col>
                        </Row>
                    </div>
                ) : (
                    <Spin style={{ margin: '0 auto' }} size="large"></Spin>
                )}
                {song.previewUrl && (
                    <div>
                        <h1>Track Preview</h1>
                        <Player src={song.previewUrl} />{' '}
                    </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = ({ isLoading, error, song }) => ({
    isLoading,
    song,
    error
});
const mapDispatchToProps = dispatch => ({
    loadSong: () => dispatch(loadSong()),
    setSongId: id => dispatch(setSongId(id))
});
export default connect(mapStateToProps, mapDispatchToProps)(SongDetails);
