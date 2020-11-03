import React from 'react';
import './Header.scss';

function Header({ step }) {

    return (
        <div className="header__dash animate">
            <span className="header__dash--step">Krok {step}</span>
            <h1>
                {step === 1 && "Wybierz kolor płyty"}
                {step === 2 && "Wybierz elementy"}
                {step === 3 && "Wybierz sposób montażu"}
                {step === 4 && "Elementy dodatkowe / Uwagi"}
                {step === 5 && "Wybierz sposób wysyłki"}
                {step === 6 && "Twoje dane"}
                {step === 7 && "Podsumowanie"}
            </h1>
        </div>
    );
}

export default Header;