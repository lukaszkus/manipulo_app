import React from 'react'
import './SelectColor.scss'
import { colors } from './board_colors.js';

function SelectColor({ setPrice, setColor }) {

    return (
        <div className="animate">
            <div className="selectColor">
                <div className="selectColor__container">
                    <p className="colors__title">Dostępne kolory</p>

                    <ul className="colors__list">
                        {colors.map((el, id) => {
                            return (
                                <li key={id}>
                                    <div className="color-box"
                                        onClick={() => {
                                            setPrice(el.price);
                                            setColor(el.name);
                                        }}>
                                        <input type="radio" id={id} value={el.price} name="color" />
                                        <label htmlFor={id}><div className="box" style={{ backgroundColor: `${el.color}` }}></div></label>
                                    </div>
                                    <p className="color-name">{el.name}</p>
                                </li>
                            );
                        })}
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default SelectColor;
