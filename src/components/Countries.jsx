import React from 'react'
import CountryDetail from './CountryDetail'
import CountriesList from './CountriesList'
function Countries({ countries, onShowClick }) {
    return <>
        {
            countries.length === 1
                ? <CountryDetail country={countries[0]} />
                :
                <CountriesList countries={countries} onShowClick={onShowClick} />
        }
    </>
}

export default Countries



