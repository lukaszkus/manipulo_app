import React from 'react'
import '../../components/Main/SelectShipping.scss'

function SelectShipping({ setPrice, setShipping }) {

    const shippingPrices = [
        {
            id: 1,
            name: "Przedpłata na konto",
            price: 29,
        },
        {
            id: 2,
            name: "Płatność przy odbiorze (pobranie)",
            price: 39,
        },
        {
            id: 3,
            name: "Odbiór osobisty (Niepołomice, Kraków)",
            price: 0,
        }
    ]

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
                    <ul className="selectShipping__list">
                        {shippingPrices.map((el, id) => {
                            return (
                                <li key={id}>
                                    <div className="color-box"
                                        onClick={() => {
                                            setPrice((prevState) => prevState + el.price);
                                            setShipping(el.name);
                                        }}>
                                        <input type="radio" id={id} value={el.price} name="shipping" />
                                        <label htmlFor={id}>{el.name} - {el.price} zł</label>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default SelectShipping
