import React, { useState } from 'react'
import '../../components/Main/SelectShipping.scss'

function SelectShipping() {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = event => {
        setIsChecked(true);
        console.log(isChecked);
    }

    return (
        <div className="animate">
            <div className="selectShipping">
                <div className="selectShipping__container">
                    <p className="selectShipping__title">Wysyłka</p>
                    <p className="selectShipping__description">
                        Przesyłki realizujemy za pośrednictwem firm kurierskich na terenie całego kraju.
                    </p>
                    <p className="selectShipping__description">
                        Tablice wysyłamy również za granicę. W tym przypadku cena ustalana jest indywidualnie.
                    </p>
                    <p className="selectShipping__description">
                        Tablice pakujemy w pudełka kartonowe, zabezpieczamy profilami i narożnikami styropianowymi
                        oraz stosujemy wypełniacze w postaci poduszek powietrznych.
                    </p>
                </div>
                <div className="selectShipping__container">
                    <p className="selectShipping__title">Ceny przesyłek krajowych</p>
                    <ul className="selectShipping__list" onChange={handleChange}>
                        <li>
                            <input type="radio" name="shipping" value="29" />
                            <label>Przedpłata na konto – 29 zł</label>
                        </li>
                        <li>
                            <input type="radio" name="shipping" value="39" />
                            <label>Płatność przy odbiorze (pobranie) – 39 zł</label>
                        </li>
                        <li>
                            <input type="radio" name="shipping" value="0" />
                            <label>Odbiór osobisty (Niepołomice, Kraków) – 0 zł</label>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default SelectShipping
