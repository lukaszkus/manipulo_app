import React from 'react'

function OrderSummary({ color, elements, mounting, mainColor, spotColors, pictures, shipping, name, adress, postCode, city, email, phone }) {
    return (
        <div>
            <h1>Podsumowanie</h1>
            <div>
                {color && <p>Kolor płyty: {color}</p>}
                {elements && <p>Elementy: {elements}</p>}
                {mounting && <p>Sposób montażu: {mounting}</p>}
                {mainColor && <p>Kolor główny: {mainColor}</p>}
                {spotColors && <p>Kolory dodatkowe: {spotColors}</p>}
                {pictures && <p>Fotka: {pictures}</p>}
                {shipping && <p>Sposób dostawy: {shipping}</p>}
                <h4>Twoje dane</h4>
                {name && <p>Imię i nazwisko: {name}</p>}
                {adress && <p>Adres: {adress}</p>}
                {postCode && <p>Kod pocztowy: {postCode}</p>}
                {city && <p>Miejscowość: {city}</p>}
                {email && <p>Email: {email}</p>}
                {phone && <p>Telefon: {phone}</p>}
            </div>
        </div>
    )
}

export default OrderSummary
