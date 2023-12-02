const CountryList = ({filteredCountry}) => {
    return (
      <div>
        <li>{filteredCountry.name}</li>
        <button>Show</button>
      </div>
      
    )
    
  }
  
export default CountryList