import React, { useState } from 'react'
import './SelectElements.scss'
import { elementsData } from './elements.js';

function SelectElements({ elements, setElements, setPrice }) {
  const [change, setChange] = useState(false);

  const handleChange = () => {
    setChange(!change);
    console.log(elements);
  }

  return (
    <div className="animate">
      <div className="elements__container">
        <ul className="elements__list">
          {elementsData.map((el) => {
            return (
              <li key={el.id} className="element">
                <p className="element__name">{el.name}</p>
                <div className="element__box">
                  <div className="element__box--img">
                    <img src={el.url} alt={el.name} />
                  </div>
                </div>
                <button className={change ? "hidden" : null} onClick={() => {
                  setElements(elements => [...elements, `${el.name} - ${el.price}zł, `]);
                  setPrice((prevState) => prevState + el.price);
                  handleChange();
                }}>Dodaj</button>
                <button className={change ? null : "hidden"} onClick={() => {
                  // setElements(elements => [...elements, `${el.name} - ${el.price}zł, `]);
                  setPrice((prevState) => prevState - el.price);
                  handleChange();
                }}>Usuń</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  )
}

export default SelectElements
