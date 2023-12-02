import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Person from './components/Person'
import AddToPhonebook from './components/AddPerson'
import agendaServices from './services/agendaServices'
import Notification from './components/Notification'
import ErrorNotification from './components/ErrorNotification'
import "./index.css" 


const App = () => {
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState("") 
  const [newNumber, setNewNumber] = useState("")
  const [search, setSearch] = useState("")
  const [notification, setNotification] = useState(null)
  const [errorNotification, setErrorNotification] = useState(null)

  useEffect(() => {
    agendaServices
      .getAll()
      .then(initialContacts => {
        setPersons(initialContacts)
      })
  })

  const filteredSearch = persons.filter((person) => {
    if (person.name.toUpperCase().includes(search.toUpperCase())) {
      return true
    }

    return false

  })

  const addPerson = (event, id) => {
    event.preventDefault()
    const num = persons.find(n => n.name === newName)
    const changedNum = {...num, number: newNumber }

    const newPerson = {
      name: newName,
      number: newNumber
    }

    if (!persons.some(person => person.name === newName)) {
      agendaServices
        .create(newPerson)
        .then(returnedContacts => {
          setPersons(persons.concat(returnedContacts))
          setNotification(`Added ${returnedContacts.name} to the phonebook`)
          setTimeout(() => {
            setNotification(null)
          }, 5000)
        } )
    } else if (window.confirm(`${newName} is already on the phonebook, replace the old number with a new one?`)) {
        agendaServices
          .update(changedNum.id, changedNum)
          .then(returnedNum => {
            setNotification(`${newName}' number replaced`)
            setTimeout(() => {
              setNotification(null)
            }, 5000)
            setPersons(persons.map(person => person.id !== id? person :
              returnedNum))
          })
          .catch(error => {
            setErrorNotification(`Information of ${newName} has already been removed from server`)
            setTimeout(() => {
              setErrorNotification(null)
            }, 5000)
            setPersons(persons.filter(p => p.id !== id))
          })
      
    }
    
    setNewName("")
    setNewNumber("")
    
  }
  
  const removePerson = (id) =>{
    const pers = persons.find(p => p.id === id)
    const changedAgenda = {...pers}
    if (window.confirm(`Delete ${changedAgenda.name}?`)) {
      agendaServices
        .eraseContact(id, changedAgenda)
        .then(erasedPerson => {
          console.log(`${erasedPerson} erased succesfully`)
        })
    }
  }

  const handlerNameChanger = (event) => {
    setNewName(event.target.value)
  }

  const handlerNumberChanger = (event) => {
    setNewNumber(event.target.value)
  }

  const handlerSearcher = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification}/> <ErrorNotification errorMessage={errorNotification}/>
      <div>
        filter shown with: <Filter persons={persons} search={search} handlerSearcher={handlerSearcher}/>
      </div>

      <h2>Add a new</h2>
      <AddToPhonebook addPerson={addPerson} newName={newName} newNumber={newNumber} handlerNameChanger={handlerNameChanger} handlerNumberChanger={handlerNumberChanger}/>

      <h2>Numbers</h2>
      
      <ul>{filteredSearch.map(persons => <Person key={persons.name} persons={persons} removePerson={() => removePerson(persons.id)}/>)}</ul>        
      
    </div>
  )
}

export default App
