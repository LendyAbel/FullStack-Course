import { useState } from "react"

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
  //Add Contact
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
  //Show numbers
  const showNumbers = (persons) => {
    let personsToShow = persons

    const isFilter = () => filterText != ""

    const isIncludes = (person) =>
      person.name.toUpperCase().includes(filterText.toUpperCase())

    const personsFilter = persons.filter((person) => isIncludes(person))

    // console.log(personsFilter)

    if (isFilter()) {
      personsToShow = personsFilter
    }

    return personsToShow.map((person) => (
      <p key={person.id}>
        {person.name} {person.number}
      </p>
    ))
  }

  //OnChange Handlers
  const nameOnChange = (e) => {
    setNewName(e.target.value)
  }
  const numberOnChange = (e) => {
    setNewNumber(e.target.value)
  }
  const filterOnCHange = (e) => {
    setFilterText(e.target.value)
  }

  //RETURN
  return (
    <div>
      <h1>Phonebook</h1>
      <div>
        filter shown with <input value={filterText} onChange={filterOnCHange} />
      </div>
      <h2>Add new contact</h2>
      <form onSubmit={add}>
        <div>
          name: <input value={newName} onChange={nameOnChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={numberOnChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <div>{showNumbers(persons)}</div>
    </div>
  )
}

export default App
