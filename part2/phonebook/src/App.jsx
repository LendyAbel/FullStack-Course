import { useState, useEffect } from "react"
import axios from "axios"

import Filter from './components/Filter'
import AddContactForm from "./components/AddContactForm"
import ShowNumbers from "./components/ShowNumbers"


const App = () => {
  console.log("-------------------------")
  //VARIABLES
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [filterText, setFilterText] = useState("")

  //FUNCTIONS
  const add = (e) => {
    e.preventDefault()

    if (!newName || !newNumber) {
      alert("Name or Number is empty")
      return
    }

    const isRepeated = () => persons.some((person) => person.name === newName)

    if (isRepeated()) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    setPersons(
      persons.concat({
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      })
    )

    setNewName("")
    setNewNumber("")
  }

  //OnChange Handlers
  const nameOnChange = (e) => {
    setNewName(e.target.value)
  }
  const numberOnChange = (e) => {
    setNewNumber(e.target.value)
  }
  const filterOnChange = (e) => {
    setFilterText(e.target.value)
  }

  //RETURN
  return (
    <div>
      <h1>Phonebook</h1>
      <Filter filterText={filterText} filterOnChange={filterOnChange} />
      <AddContactForm
        newName={newName}
        newNumber={newNumber}
        nameOnChange={nameOnChange}
        numberOnChange={numberOnChange}
        add={add}
      />
      <ShowNumbers persons={persons} filterText={filterText} />
    </div>
  )
}

export default App
