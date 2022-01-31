import React from 'react';
import "./Header.css"
import IsponserShip from '../IsponserShip/IsponserShip';
import Main from '../Main/Main';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <header>
            <Navbar></Navbar>
            <Main></Main>
        </header>
    );
};

export default Header;