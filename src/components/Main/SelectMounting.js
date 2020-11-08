import React from 'react'
import './SelectMounting.scss'
import toTheWall from '../../assets/montaz-do-sciany.png';
import onSupports from '../../assets/montaz-podpory.png';

function SelectMounting({ setMounting, price, setPrice }) {
    return (
        <div className="animate">
            <div className="selectMounting">
                <div className="selectMounting__container">
                    <p className="mounting__title">Do ściany</p>
                    <div className="mounting__img"
                        onClick={() => {
                            setMounting("do ściany");
                            setPrice((prevState) => prevState + 0);
                        }}>
                        <input type="radio" id="toTheWall" name="mounting" />
                        <label htmlFor="toTheWall"><img src={toTheWall} alt="Do ściany" /></label>
                    </div>
                    <p className="mounting__description">
                        W płycie nawiercone są otwory przez które należy przykręcić tablicę do ściany.
                        Do tablicy dołączamy wkręty, kołki rozporowe oraz estetyczne zaślepki maskujące wkręty.
                        Nie pobieramy za nie dodatkowych opłat.
                    </p>
                </div>
                <div className="selectMounting__container">
                    <p className="mounting__title">Na podporach</p>
                    <div className="mounting__img"
                        onClick={() => {
                            setMounting("na podporach");
                            setPrice(price + 10);
                        }}>
                        <input type="radio" id="onSupports" name="mounting" />
                        <label htmlFor="onSupports"><img src={onSupports} alt="Na podporach" /></label>
                    </div>
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
