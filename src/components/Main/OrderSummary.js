import React from 'react'
import './OrderSummary.scss'
import emailjs from 'emailjs-com';


function OrderSummary({ color, price, elements, mounting, mainColor, spotColors, pictures, comment, shipping, name, adress, postCode, city, email, phone, shippingName }) {

    function sendEmail(e) {
        // e.preventDefault();

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
                <form onSubmit={ sendEmail } name="contact_number" value={ contact_number }>
                    <div className="orderSummary__container">
                        <p className="orderSummary__title">Twoja tablica</p>

                        <p>Kolor płyty:</p>
                        <input type="text" name="color" value={ color } />

                        <p>Elementy:</p>
                        <textarea type="text" name="elements" value={ elements } />

                        <p>Sposób montażu:</p>
                        <input type="text" name="mounting" value={ mounting } />

                        <p>Kolor główny:</p>
                        <input type="text" name="mainColor" value={ mainColor } />

                        <p>Kolory dodatkowe:</p>
                        <input type="text" name="spotColor" value={ spotColors } />

                        <p>Uwagi:</p>
                        <textarea type="text" name="message" value={ comment } />

                        {/* <p>Fotka: { pictures }</p> */ }

                        <p>Sposób dostawy:</p>
                        <input type="text" name="shipping" value={ shipping } />

                    </div>
                    <div className="orderSummary__container">

                        <p className="orderSummary__title">Dane kontaktowe</p>

                        <p name="name">Imię i nazwisko:</p>
                        <input type="text" name="user_name" value={ name } />

                        <p>Email:</p>
                        <input type="email" name="user_email" value={ email } />

                        <p>Telefon:</p>
                        <input type="text" name="user_phone" value={ phone } />


                        <p className="orderSummary__title">Adres do wysyłki</p>

                        <p>Imię i nazwisko / Nazwa fimy:</p>
                        <input type="text" name="user_shipping_name" value={ shippingName } />

                        <p>Adres:</p>
                        <input type="text" name="adress" value={ adress } />

                        <p>Kod pocztowy:</p>
                        <input type="text" name="postCode" value={ postCode } />

                        <p>Miejscowość:</p>
                        <input type="text" name="city" value={ city } />

                        <button type="submit" value="Send">Wyślij</button>

                    </div>

                </form>
            </div>
        </div>

    )
}

export default OrderSummary
