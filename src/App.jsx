import axios from 'axios'
import { useEffect, useState } from 'react'
import Countries from './components/Countries'

function App() {
  const [name, setName] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios.get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then(response => setCountries(response.data))
  }, [name])

  const handleChange = (e) => {
    setName(e.target.value.toLowerCase())
  }


  const handleShow = (countryName) => {
    setCountries(countries.filter(country => country.name.common === countryName))

  }

  const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(name))


  return (
    <>
      <form action="">
        <label htmlFor="find countries">find countries</label>
        <input type="text" value={name} onChange={handleChange} />
      </form>
      {
        filteredCountries.length >= 10
          ? <p>Too many countries, specify another filter</p>
          : filteredCountries.length === 0
            ? <p>No country found</p>
            : <Countries countries={filteredCountries} onShowClick={handleShow} />
      }
    </>
  )
}

export default App
