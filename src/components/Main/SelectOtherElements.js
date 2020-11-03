import React from 'react'
import '../../components/Main/SelectOtherElements.scss'
import woodenHouse from '../../assets/domek.png';

function SelectOtherElements({ mainColor, setMainColor }) {

    return (
        <div className="animate">
            <div className="selectOther">
                <div className="selectOther__container">
                    <p className="selectOther__title">Określ kolorystykę i motyw</p>
                    <form>
                        <label>
                            Kolor główny
                            <input type="text" value={mainColor} onChange={(e) => setMainColor(e.target.value)} />
                        </label>
                        <label>
                            Kolory dodatkowe
                            <input type="text" value={mainColor} onChange={(e) => setMainColor(e.target.value)} />
                        </label>
                        <label>
                            Motyw
                            <input type="text" value={mainColor} onChange={(e) => setMainColor(e.target.value)} />
                        </label>
                        <label>
                            Uwagi
                            <textarea type="text" rows="10" value={mainColor} onChange={(e) => setMainColor(e.target.value)} />
                        </label>
                    </form>
                </div>
                <div className="selectOther__container">
                    <p className="selectOther__title">Domek</p>
                    <div className="selectOther__img"><img src={woodenHouse} alt="Domek" /></div>
                    <p className="selectOther__description">
                        Do domku wklejamy dowolne zdjęcie. Może to być zdjęcie rodzinne, ulubionej postaci z bajki lub ukochanego zwierzaka.
                        <br /><br />
                        Zdjęcie powinno być w orientacji poziomej.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SelectOtherElements;
