import React from 'react'
import '../../components/Sidebar/UserConfiguration.scss'

function UserConfiguration({ color, elements, mounting, mainColor, spotColors, pictures, shipping, name, adress, postCode, city, email, phone }) {
    return (
        <div>
            <h4>Twój wybór:</h4>
            <p>Kolor płyty: { color }</p>
            <p>Elementy:</p>
            <ul>{ elements.map((el) => <li key={ el.id }>{ el.name } { el.price }</li>) }</ul>
            <p>Sposób montażu: { mounting }</p>
            <p>Kolor główny: { mainColor }</p>
            <p>Kolory dodatkowe: { spotColors }</p>
            {/* <p>Fotka: {pictures}</p> */ }
            <p>Sposób dostawy: { shipping }</p>
            {/* <h4>Twoje dane</h4>
            {name && <p>Imię i nazwisko: {name}</p>}
            {adress && <p>Adres: {adress}</p>}
            {postCode && <p>Kod pocztowy: {postCode}</p>}
            {city && <p>Miejscowość: {city}</p>}
            {email && <p>Email: {email}</p>}
            {phone && <p>Telefon: {phone}</p>} */}
        </div>
    )
}

export default UserConfiguration;
