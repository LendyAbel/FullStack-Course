import { useState } from 'react'

const App = () => {
  //VARIABLES
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  //FUNCTIONS
  const add = (e) =>{
    e.preventDefault()
    setPersons(persons.concat({name: newName}))
    setNewName("");
  }

  const inputOnChange = (e) =>{
    setNewName(e.target.value)
  }

  //RETURN
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={add}>
        <div>
          name: <input value={newName} onChange={inputOnChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person=> <p key={person.name}>{person.name}</p>)}
      </div>
    </div>
  )
}

export default App