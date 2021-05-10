import React from 'react'
import './SelectElements.scss'
import { elementsData } from './elements.js';

function SelectElements({ elements, setElements, price, setPrice, toggleSelected }) {


  return (
    <div className="animate">
      <div className="elements__container">
        <ul className="elements__list">
          { elementsData.map((el, id) => {
            return (
              <li key={ id } className="element">
                <div className="box"
                  onClick={ (e) => {
                    // e.preventDefault();
                    e.stopPropagation();
                    toggleSelected(el);
                    // setElements([...elements, `${el.name} - ${el.price}zł, `]);
                    setPrice(price + el.price);
                    console.log(elements);
                  } }>
                  <input type="checkbox" id={ id } />
                  <label htmlFor={ id }><img src={ el.url } alt={ el.name } /></label>
                </div>
                <p className="element__name">{ el.name }</p>
              </li>
            );
          }) }
        </ul>
      </div>
    </div>
  )
}

export default SelectElements
