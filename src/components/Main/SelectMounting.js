import React from 'react'
import './SelectMounting.scss'
import toTheWall from '../../assets/montaz-do-sciany.png';
import onSupports from '../../assets/montaz-podpory.png';

function SelectMounting({ onSelectionMounting, setPrice }) {
    return (
        <div className="animate">
            <div className="selectMounting">
                <div className="selectMounting__container"
                    onClick={() => {
                        onSelectionMounting("do ściany");
                        setPrice(0);
                    }}>
                    <p className="mounting__title">Do ściany</p>
                    <div className="mounting__img"><img src={toTheWall} alt="Do ściany" /></div>
                    <p className="mounting__description">
                        W płycie nawiercone są otwory przez które należy przykręcić tablicę do ściany.
                        Do tablicy dołączamy wkręty, kołki rozporowe oraz estetyczne zaślepki maskujące wkręty.
                        Nie pobieramy za nie dodatkowych opłat.
                    </p>
                </div>
                <div className="selectMounting__container"
                    onClick={() => {
                        onSelectionMounting("na podporach");
                        setPrice(10);
                    }}>
                    <p className="mounting__title">Na podporach (+ 10 zł)</p>
                    <div className="mounting__img"><img src={onSupports} alt="Na podporach" /></div>
                    <p className="mounting__description">
                        Z tyłu przykręcone są składane, drewniane podpory dzięki którym tablica
                        stabilnie opiera się na podłożu. Plusem tego rozwiązanie jest możliwość przenoszenia
                        w dowolne miejsce.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SelectMounting
