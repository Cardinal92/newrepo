import { useEffect, useState } from 'react'
import Filter from './Components/Filter'
import CountryList from './Components/CountryList'
import countryServices from './Services/countryServices'

const App = () => {
  const [allCountries, setAllCountries] = useState([])
  const [filteredCountry, setFilteredCountry] = useState("")

  useEffect(() => {
    countryServices
      .getAll()
      .then(initialCoutries => {
        setAllCountries(initialCoutries)
      })
  })
  
  const filteredSearch = allCountries.filter((country) => {
    if (country.name.toUpperCase().includes(filteredCountry.toUpperCase())) {
      return true
    }

    return false

  })


  const handlerCountrySearcher = (event) => {
    setFilteredCountry(event.target.value)
  }


  return (
    <div>
      <h2>Find countries</h2>
      <Filter allCountries={allCountries} search={filteredCountry} handlerCountrySearcher={handlerCountrySearcher}/>
      <ul>{filteredSearch.map(filteredCountry => <CountryList key={filteredCountry.name} filteredCountry={filteredCountry}/>)}</ul>
    </div>
  )
}

export default App
