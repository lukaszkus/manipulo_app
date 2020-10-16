import React from 'react';
import './Welcome.scss';
import logo from '../../assets/logo_mb.svg';


function Welcome(props) {
  return (
      <div className="welcome">
          <div className="container">
          <div className="grid-template-welcome animate">
              <div className="header"></div>
              <div className="main-left">
                <div className="main-left__heading">
                  <h1>Witaj</h1>
                  <p>Skonfiguruj i zamów swoją tablicę manipulacyjną.</p>
                </div>
                <button onClick={props.click}>ROZPOCZNIJ</button>
              </div>
              <div className="footer">
                <div className="copyright">
                  <p>Copyright &copy;</p>
                  <a href="https://www.manipuloboards.pl"><img src={logo} alt="Logo" className="footer__logo"/></a>
                </div>
              </div>
          </div>
          </div>
      </div>
    );
  }
  
  export default Welcome;