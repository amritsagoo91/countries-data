import React from 'react'

function CuntriesList({ countries,onShowClick }) {
    return < ul > {
        countries.map(country => <li key={country.name.common}>{country.name.common}
            <button onClick={() => onShowClick(country.name.common)}>Show</button>
        </li>)

    }</ul >
}

export default CuntriesList