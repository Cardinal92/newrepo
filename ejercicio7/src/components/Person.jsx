
const Person = ({persons, removePerson}) => {
    return (
      <div>
        <li>{persons.name} {persons.number}</li>
        <button onClick={removePerson}>delete</button>
      </div>
      
    )
    
  }
  
export default Person