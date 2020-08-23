import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles.css';
import SearchInput from '../SearchInput';
import { loadImages } from '../../actions';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import SongCard from '../SongCard';

class SongsGrid extends Component {
    componentDidMount() {
        this.props.loadImages();
    }
    render() {
        const { songs, error, isLoading, loadImages } = this.props;
        return (
            <div style={{ padding: 10, textAlign: 'center' }}>
                {error && <div className="error">{JSON.stringify(error)}</div>}
                <SearchInput />
                <Row gutter={[8, 8]}>
                    {songs.map(song => (
                        <Col key={song.trackId} xs={12} sm={12} md={8} lg={6} xl={4}>
                            <Link to={`/${song.trackId}`}>
                                <SongCard {...song}></SongCard>
                            </Link>
                        </Col>
                    ))}
                </Row>
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
    loadImages: () => dispatch(loadImages())
});
export default connect(mapStateToProps, mapDispatchToProps)(SongsGrid);
