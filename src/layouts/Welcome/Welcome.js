import React from 'react';
import './Welcome.scss';
import logo from '../../assets/logo_mb.svg';


function Welcome({ click }) {
  return (
    <div className="welcome">
      <div className="container">
        <div className="welcome-grid animate">
          <div className="welcome__header"></div>
          <div className="welcome__main">
            <div className="main__heading">
              <h1>Witaj</h1>
              <p>Skonfiguruj i zamów swoją tablicę manipulacyjną.</p>
            </div>
            <button onClick={ click }>ROZPOCZNIJ</button>
          </div>
          <div className="welcome__footer">
            <div className="welcome--copyright">
              <p>Copyright &copy;</p>
              <a href="https://www.manipuloboards.pl"><img src={ logo } alt="Logo" className="copyright__logo" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;