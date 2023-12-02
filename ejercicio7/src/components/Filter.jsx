const Filter = ({search, handlerSearcher}) => {
    return (
      (<input value={search} onChange={handlerSearcher}/>)
      )
  }

export default Filter