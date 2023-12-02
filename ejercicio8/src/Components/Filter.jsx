const Filter = ({search, handlerCountrySearcher}) => {
    return (
      (<input value={search} onChange={handlerCountrySearcher}/>)
      )
  }

export default Filter