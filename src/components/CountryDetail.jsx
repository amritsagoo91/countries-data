import React from 'react'
import WeatherDetails from './WeatherDetails'
function CountryDetail({ country }) {
    return (
        <>
            < div >
                <h1>{country.name.common}</h1>
                <ul>
                    <li>Capital:: {country.capital[0]}</li>
                    <li>Area:: {country.area}</li>
                </ul>
                <h1>Languages</h1>
                <ul>
                    {
                        Object.values(country.languages).map(language => <li key={language}>{language}</li>)
                    }
                </ul>
                <img src={country.flags.png} alt={country.flags.alt} />
            </div >

            <div>
                <WeatherDetails country={country} />
            </div>
        </>
    )
}

export default CountryDetail