import React from 'react'
import '../../components/Main/UserDataForm.scss'

function UserDataForm() {
    return (
        <div className="animate">
            <div className="userDF">
                <div className="userDF__container">
                    <p className="userDF__title">Podaj dane do wysyłki</p>
                    <form>
                        <label>
                            Imię i nazwisko
                            <input type="text" />
                        </label>
                        <label>
                            Ulica i numer domu
                            <input type="text"  />
                        </label>
                        <label>
                            Kod pocztowy
                            <input type="text" />
                        </label>
                        <label>
                            Miejscowość
                            <input type="text" />
                        </label>
                        <label>
                            Adres e-mail
                            <input type="text" />
                        </label>
                        <label>
                            Nr telefonu
                            <input type="text" />
                        </label>
                    </form>
                </div>
                <div className="selectOther__container">

                </div>
            </div>
        </div>
    )
}

export default UserDataForm
