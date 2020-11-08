import React from 'react'
import './OrderSummary.scss'
import emailjs from 'emailjs-com';


function OrderSummary({ color, price, elements, mounting, mainColor, spotColors, pictures, shipping, name, adress, postCode, city, email, phone, shippingName }) {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('contact_service', 'template_juqhqaj', e.target, 'user_WvSZcAY6mWCOgW15FUjXs')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
    const contact_number = Math.random() * 100000 | 0;

    return (
        <div className="animate">
            <div className="orderSummary">
                <div className="orderSummary__container">
                    <p className="orderSummary__title">Twoja tablica</p>

                    <p>Kolor płyty: {color}</p>
                    <p>Elementy: {elements}</p>
                    <p>Sposób montażu: {mounting}</p>
                    <p>Kolor główny: {mainColor}</p>
                    <p>Kolory dodatkowe: {spotColors}</p>
                    <p>Fotka: {pictures}</p>
                    <p>Sposób dostawy: {shipping}</p>


                </div>
                <div className="orderSummary__container">
                    <p className="orderSummary__title">Dane kontaktowe</p>
                    <form onSubmit={sendEmail}>
                        <p name="name">Imię i nazwisko: {name}</p>
                        <p>Email: {email}</p>
                        <p>Telefon: {phone}</p>

                        <p className="orderSummary__title">Adres do wysyłki</p>
                        <p>Imię i nazwisko / Nazwa fimy: {shippingName}</p>
                        <p>Adres: {adress}</p>
                        <p>Kod pocztowy: {postCode}</p>
                        <p>Miejscowość: {city}</p>

                        {/* 
                        <input type="hidden" name={contact_number} />
                        <input type="hidden" name="" />
                        <label>Name</label>
                        <input type="text" name="user_name" />
                        <label>Email</label>
                        <input type="email" name="user_email" />
                        <label>Message</label>
                        <textarea name="message" />
                        <input type="submit" value="Send" /> */}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default OrderSummary
