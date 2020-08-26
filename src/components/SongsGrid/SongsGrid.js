import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles.css';
import SearchInput from '../SearchInput';
import { loadSongs } from '../../actions';
import { Row, Col, Spin } from 'antd';
import { Link } from 'react-router-dom';
import SongCard from '../SongCard';

class SongsGrid extends Component {
    componentDidMount() {
        this.props.loadSongs();
    }
    render() {
        const { songs, error, isLoading } = this.props;
        return (
            <div style={{ padding: 10, textAlign: 'center' }}>
                {error && <div className="error">{JSON.stringify(error)}</div>}
                <SearchInput />
                {!isLoading ? (
                    <Row gutter={[8, 8]}>
                        {songs.map(song => (
                            <Col key={song.trackId} xs={12} sm={12} md={8} lg={6} xl={4}>
                                <Link to={`/${song.trackId}`}>
                                    <SongCard {...song}></SongCard>
                                </Link>
                            </Col>
                        ))}
                    </Row>
                ) : (
                    <Spin style={{ display: 'block', margin: '0 auto' }} size="large"></Spin>
                )}
            </div>
        );
    }
}
const mapStateToProps = ({ isLoading, songs, error, search }) => ({
    isLoading,
    songs,
    error,
    search
});
const mapDispatchToProps = dispatch => ({
    loadSongs: () => dispatch(loadSongs())
});
export default connect(mapStateToProps, mapDispatchToProps)(SongsGrid);
