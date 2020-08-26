import { Input } from 'antd';
import { setSearch, loadSongs } from '../../actions';
import { connect } from 'react-redux';
import React from 'react';
import styled from 'styled-components';
const { Search } = Input;

const SearchBar = styled(Search)`
    font-size: 1.5em;
    text-align: center;
    max-width: 700px;
    margin: 0.5em auto;
    justify-self: center;
    padding: 0 10px;
    font-family: Arial;
`;

const SearchInput = ({ isLoading, setSearch, loadSongs, search }) => (
    <SearchBar
        loading={isLoading}
        placeholder="Search a song!"
        defaultValue={search}
        onSearch={value => {
            setSearch(value);
            loadSongs();
        }}
        enterButton
    />
);

const mapStateToProps = ({ isLoading, search }) => ({
    isLoading,
    search
});
const mapDispatchToProps = dispatch => ({
    setSearch: value => dispatch(setSearch(value)),
    loadSongs: () => dispatch(loadSongs())
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
