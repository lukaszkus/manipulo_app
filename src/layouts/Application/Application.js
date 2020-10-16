import React from 'react';
import './Application.scss';
import logo from '../../assets/logo_mb.svg';

function Application () {
    return (
        <div className="application">
            <div className="grid-template-app animate">
              <div className="logo"><img src={logo} alt="Logo"/></div>
              <div className="header">header</div>
              <div className="sidebar">sidebar</div>
              <div className="price">price</div>
              <div className="main-left">main left</div>
              <div className="main-right">main right</div>
              <div className="footer">footer</div>
              <div className="nav">nav</div>
          </div>
        </div>
    );
  }
  
  export default Application;