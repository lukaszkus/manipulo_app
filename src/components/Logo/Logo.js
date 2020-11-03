import React from 'react';
import './Logo.scss';
import logo from '../../assets/logo_mb.svg';

function Logo() {
    return (
        <img src={logo} alt="Logo" className="logo" />
    );
}

export default Logo;