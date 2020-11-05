import React from 'react'
import './SelectElements.scss'
import { elements } from './elements.js';

function SelectElements({ setSelectedElements, setPrice }) {
  return (
    <div className="animate">
      <div className="elements__container">
        <ul className="elements__list">
          {elements.map((el, id) => {
            return (
              <li key={id} className="element"
                onClick={() => {
                  setSelectedElements(el.name);
                  setPrice(el.price);
                }}>
                <div className="box">
                  <input type="checkbox" id={id} />
                  <label htmlFor={id}><img src={el.url} alt={el.name} /></label>
                </div>
                <p className="element__name">{el.name}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  )
}

export default SelectElements
