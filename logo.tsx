import React from 'react';
import logo from './public/favicon.jpg';
const Header: React.FC = () => {
    return (
        <header>
            <img src={logo} alt="Logo" />
            <h1>Welcome to My Website</h1>
        </header>
    );
};

export default Header;
