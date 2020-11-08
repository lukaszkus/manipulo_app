import React from 'react';
import './Nav.scss';

function Nav({ step, prevStep, nextStep, sendEmail }) {
  return (
    <div className="dash__nav">
      {step === 1 &&
        <div className="navigation btn-right">
          <button onClick={nextStep}>DALEJ {'>>'}</button>
        </div>
      }
      {step === 2 &&
        <div className="navigation">
          <button onClick={prevStep}>{'<<'} WRÓĆ</button>
          <button onClick={nextStep}>DALEJ {'>>'}</button>
        </div>
      }
      {step === 3 &&
        <div className="navigation">
          <button onClick={prevStep}>{'<<'} WRÓĆ</button>
          <button onClick={nextStep}>DALEJ {'>>'}</button>
        </div>
      }
      {step === 4 &&
        <div className="navigation">
          <button onClick={prevStep}>{'<<'} WRÓĆ</button>
          <button onClick={nextStep}>DALEJ {'>>'}</button>
        </div>
      }
      {step === 5 &&
        <div className="navigation">
          <button onClick={prevStep}>{'<<'} WRÓĆ</button>
          <button onClick={nextStep}>DALEJ {'>>'}</button>
        </div>
      }
      {step === 6 &&
        <div className="navigation">
          <button onClick={prevStep}>{'<<'} WRÓĆ</button>
          <button onClick={nextStep}>DALEJ {'>>'}</button>
        </div>
      }
      {step === 7 &&
        <div className="navigation">
          <button onClick={prevStep}>{'<<'} WRÓĆ</button>
          <button type="submit">WYŚLIJ</button>
        </div>
      }
    </div>
  );
}

export default Nav;