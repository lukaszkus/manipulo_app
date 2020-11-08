import React from 'react'
import '../../components/Main/UserDataForm.scss'

function UserDataForm({ name, setName, adress, setAdress, postCode, setPostCode, city, setCity, email, setEmail, phone, setPhone, shippingName, setShippingName }) {
    return (
        <div className="animate">
            <div className="userDF">
                <div className="userDF__container">
                    <p className="userDF__title">Dane kontaktowe</p>
                    <form>
                        <label>
                            Imię i nazwisko
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        </label>
                        <label>
                            Adres e-mail
                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </label>
                        <label>
                            Nr telefonu
                            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </label>
                    </form>
                </div>
                <div className="userDF__container ">
                    <p className="userDF__title">Adres do wysyłki</p>
                    <form>
                        <label>
                            Imię i nazwisko / Nazwa firmy
                            <input type="text" value={shippingName} onChange={(e) => setShippingName(e.target.value)} />
                        </label>
                        <label>
                            Ulica i numer domu
                            <input type="email" value={adress} onChange={(e) => setAdress(e.target.value)} />
                        </label>
                        <label>
                            Kod pocztowy
                            <input type="text" value={postCode} onChange={(e) => setPostCode(e.target.value)} />
                        </label>
                        <label>
                            Miejscowość
                            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
                        </label>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UserDataForm
