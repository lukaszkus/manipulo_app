import React from 'react';
import './Welcome.scss';
import logo from '../../assets/logo_mb.svg';

function Welcome() {
    return (
      <div id="welcome">
        <div className="grid__welcome container">
        <div className="header"></div>

        <div className="main animate">
          <div className="main__heading">
            <h1>Witaj</h1>
            <p>Skonfiguruj i zamów swoją tablicę manipulacyjną.</p>
          </div>
          <button>ROZPOCZNIJ</button>
        </div>

        <div className="footer animate">
          <div className="copyright">
              <p>Copyright &copy;</p>
              <a href="https://www.manipuloboards.pl"><img src={logo} alt="Logo" className="footer__logo"/></a>
          </div>
        </div>
         </div>
      </div>
    );
  }
  
  export default Welcome;