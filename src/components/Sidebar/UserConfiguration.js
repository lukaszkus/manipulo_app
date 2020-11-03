import React from 'react'
import '../../components/Sidebar/UserConfiguration.scss'

function UserConfiguration({ color, elements, mounting }) {
    return (
        <div>
            <h4>Twój wybór:</h4>
            {color && <p>Kolor płyty: {color}</p>}
            {elements && <p>Elementy: {elements}</p>}
            {mounting && <p>Sposób montażu: {mounting}</p>}
        </div>
    )
}

export default UserConfiguration;
