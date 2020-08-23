import React from 'react';
import styled from 'styled-components';
import { Card } from 'antd';
const { Meta } = Card;
const StyledCard = styled(Card)`
    width: '100%';
    height: '300px';
`;
const StyledImg = styled.img`
    height: 200px;
    transition: transform 0.2s ease;
    width: 100%;
    &:hover {
        transform: scale(1.3);
    }
`;
const Box = styled.div`
    max-height: 200px;
    overflow: hidden;
`;
const SongCard = song => (
    <StyledCard
        hoverable
        type="inner"
        cover={
            <Box>
                <StyledImg alt={song.trackName} src={song.artworkUrl100} />
            </Box>
        }
    >
        <Meta
            title={song.trackName}
            description={song.collectionName ? song.collectionName.substring(0, 48) + '...' : null}
        />
        <span>Year: {song.releaseDate.substring(0, 4)}</span>
    </StyledCard>
);
export default SongCard;
