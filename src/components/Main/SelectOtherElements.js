import React, { useState } from 'react'
import '../../components/Main/SelectOtherElements.scss'
import woodenHouse from '../../assets/domek.png';
import ImageUploader from "react-images-upload";

function SelectOtherElements({ mainColor, setMainColor }) {
    const [pictures, setPictures] = useState([]);

    const onDrop = picture => {
        setPictures([...pictures, picture]);
    };

    return (
        <div className="animate">
            <div className="selectOther">
                <div className="selectOther__container">
                    <p className="selectOther__title">Określ kolorystykę i motyw</p>
                    <form>
                        <label>
                            Kolor główny
                            <input type="text"   />
                        </label>
                        <label>
                            Kolory dodatkowe
                            <input type="text"   />
                        </label>
                        <label>
                            Motyw
                            <input type="text"   />
                        </label>
                        <label>
                            Uwagi
                            <textarea type="text" rows="12"   />
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
                    <p className="selectOther__title">Dodaj swoje zdjęcie</p>
                    <ImageUploader
                        className="imageUploader"
                        buttonClassName="imageUploader__btn"
                        buttonText={"Dodaj zdjęcie"}
                        label={"Max. wielkość pliku: 5mb, Format: jpg | png"}
                        withIcon={true}
                        onChange={onDrop}
                        singleImage={true}
                        withPreview={true}
                        imgExtension={[".jpg", ".png"]}
                        maxFileSize={5242880}
                    />
                </div>
            </div>
        </div>
    )
}

export default SelectOtherElements;
