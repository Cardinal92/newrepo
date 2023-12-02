const AddToPhonebook = ({addPerson, newName, newNumber, handlerNameChanger, handlerNumberChanger}) => {
  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input value={newName} onChange={handlerNameChanger}/>
      </div>
      <div>
        number: <input value={newNumber} onChange={handlerNumberChanger}/>
      </div>
      <div>
        <button type='submit'>add</button>
      </div>
    </form>
  )
}

export default AddToPhonebook