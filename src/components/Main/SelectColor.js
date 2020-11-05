import React from 'react'
import './SelectColor.scss'
import { colors } from './board_colors.js';

function SelectColor({ onSelection, setPrice }) {

    return (
        <div className="animate">
            <div className="selectColor">
                <div className="selectColor__container">
                    {/* <p className="color-prices">Biały - 45 zł</p> */}

                    <ul className="colors__list">
                        {colors.map((el, id) => {
                            return (
                                <li key={id}
                                    onClick={() => {
                                        setPrice(`${el.price}`);
                                        onSelection(`${el.name}`);
                                    }}>
                                    <div className="color-box">
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
