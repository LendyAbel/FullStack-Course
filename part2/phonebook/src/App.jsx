import { useState, useEffect } from 'react'
import contacts from './services/contacts'

import Filter from './components/Filter'
import AddContactForm from './components/AddContactForm'
import ShowNumbers from './components/ShowNumbers'

const App = () => {
  console.log('-------------------------')
  //VARIABLES
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterText, setFilterText] = useState('')

  useEffect(() => {
    contacts.getAllContacts().then(contacts => {
      setPersons(contacts)
    })
  }, [])

  const add = e => {
    e.preventDefault()
    const isRepeated = () => persons.some(person => person.name === newName)
    const newPerson = {
      name: newName,
      number: newNumber,
    }

    if (!newName || !newNumber) {
      alert('Name or Number is empty')
      return
    }
    if (isRepeated()) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    contacts.addContact(newPerson).then(newPerson => {
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
    })
  }

  const deleteContact = e => {
    const deletedContactId = e.target.id
    const personToDelete = persons.find(person => person.id === e.target.id)
    // console.log(e.target.id)
    // console.log(personToDelete)

    if (
      e.target.tagName === 'BUTTON' &&
      window.confirm(`Delete ${personToDelete.name}?`)
    ) {
      contacts.deleteContact(deletedContactId).then(() => {
        setPersons(persons.filter(person => person.id != deletedContactId))
      })
    }
  }

  //OnChange Handlers
  const nameOnChange = e => {
    setNewName(e.target.value)
  }
  const numberOnChange = e => {
    setNewNumber(e.target.value)
  }
  const filterOnChange = e => {
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
      <ShowNumbers
        persons={persons}
        filterText={filterText}
        deleteContact={deleteContact}
      />
    </div>
  )
}

export default App
