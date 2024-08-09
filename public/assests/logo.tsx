import React from 'react';
import logo from './assets/logo.png'; 

const Header: React.FC = () => {
    return (
        <header>
            <img src={logo} alt="Logo" style={{ width: '150px', height: 'auto' }} />
            
        </header>
    );
};

export default Header;
