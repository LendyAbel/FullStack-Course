import { useState, useEffect } from 'react'
import contacts from './services/contacts'

import Filter from './components/Filter'
import AddContactForm from './components/AddContactForm'
import ShowNumbers from './components/ShowNumbers'

const App = () => {
  // console.log('-------------------------')
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
    let newPerson = { name: newName, number: newNumber }
    const isNameRepeatd = (persons, name) =>
      persons.some(person => person.name === name)

    if (!newName || !newNumber) {
      alert('Name or Number is empty')
      return
    }

    if (isNameRepeatd(persons, newName)) {
      const olderPerson = persons.find(person => person.name === newName)
      newPerson = { ...newPerson, id: olderPerson.id }
      const isNumberRepeated = (newPerson, olderPerson) =>
        newPerson.number === olderPerson.number
      const replaceContact = newPerson => {
        contacts.replaceContact(newPerson).then(newPerson => {
          setPersons(
            persons.map(person =>
              person.id != newPerson.id ? person : newPerson
            )
          )
          setNewName('')
          setNewNumber('')
        })
      }
      const confirmMessage = `${newName} is already added to phonebook. Replace the older number(${olderPerson.number}) with a new one(${newPerson.number})?`

      // console.log(olderPerson)

      if (isNumberRepeated(newPerson, olderPerson)) {
        alert(
          `${newName} with number ${newNumber} is already added to phonebook`
        )
      } else {
        if (window.confirm(confirmMessage)) {
          replaceContact(newPerson)
        }
      }
    } else {
      contacts.addContact(newPerson).then(newPerson => {
        setPersons(persons.concat(newPerson))
        setNewName('')
        setNewNumber('')
      })
    }
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
