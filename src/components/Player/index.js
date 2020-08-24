import AudioPlayer from 'react-h5-audio-player';
import React from 'react';
import 'react-h5-audio-player/lib/styles.css';
import styled from 'styled-components';
const APlayer = styled(AudioPlayer)`
    margin: 0 auto;
`;
const Player = ({ src }) => (
    <APlayer
        showDownloadProgress
        autoPlay={false}
        autoPlayAfterSrcChange={false}
        src={src}
        onPlay={e => console.log('onPlay')}
    />
);
export default Player;
