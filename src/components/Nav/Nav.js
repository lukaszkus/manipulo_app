import React from 'react';
import './Nav.scss';

function Nav({ prevStep, nextStep }) {
  return (
    <div className="dash__nav">
      <div className="navigation">
        <button onClick={prevStep}>{'<<'} WRÓĆ</button>
        <button onClick={nextStep}>DALEJ {'>>'}</button>
      </div>
    </div>
  );
}

export default Nav;