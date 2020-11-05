import React from 'react'
import './Price.scss'

function Price({ price }) {
    return (
        <div className="price__container">
            <h4>Cena tablicy:</h4>
            <h1>{price} zł</h1>
        </div>
    )
}

export default Price;
