import React from 'react';
import { Layout } from 'antd';
import './styles.css';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
const { Header } = Layout;

const Link = styled(NavLink)`
    color: white;
    &:hover {
        color: #cc3399;
    }
    float: left;
`;

const Navbar = () => (
    <Header style={{ color: 'white' }}>
        <Link to="/">iTunes</Link>
    </Header>
);

export default Navbar;
