import React from 'react';
import logo from '../../images/logo.png'
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="" />
            <nav>
                <a href="/matches">MATCHES</a>
                <a href="/videos">VIDEOS</a>
                <a href="/pointTable">POINT TABLE</a>
                <a href="/states">STATES</a>
                <a href="/teams">TEAMS</a>
                <a href="/news">NEWS</a>
                <a href="/more">MORE</a>
                
            </nav>
        </div>
    );
};

export default Header;