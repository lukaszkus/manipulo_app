import React from 'react'
import './SelectElements.scss'
import { elementsData } from './elements.js';

function SelectElements({ elements, setElements, price, setPrice, }) {


  return (
    <div className="animate">
      <div className="elements__container">
        <ul className="elements__list">
          { elementsData.map((el, index) => {
            return (
              <li key={ index } className="element">
                <div className="box"
                  onClick={ () => {
                    setElements([...elements, `${el.name} - ${el.price}zł, `]);
                    setPrice(price + el.price);
                    console.log(elements);
                  } }>
                  <input type="checkbox" id={ index } />
                  <label htmlFor={ index }><img src={ el.url } alt={ el.name } /></label>
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
