import React from 'react'
import './SelectElements.scss'
import { elements } from './elements.js';

function SelectElements({ setSelectedElements, setPrice }) {
  return (
    <div className="animate">
      <div className="elements__container">
        {elements.map((el, id) => {
          let tooltip = <span>{el.price} zł</span>;
          return (
            <div key={id} className="element"
              onClick={() => {
                setSelectedElements(el.name);
                setPrice(el.price);
              }}>
              <div className="element__box text">
                <span className="tooltip">{tooltip}</span>
                <img src={el.url} alt={el.name} />
              </div>
              <p className="element__name">{el.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default SelectElements
