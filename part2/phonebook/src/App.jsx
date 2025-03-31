import { useState, useEffect } from "react"
import contacts from "./services/contacts"

import Filter from "./components/Filter"
import AddContactForm from "./components/AddContactForm"
import ShowNumbers from "./components/ShowNumbers"
import Notification from "./components/Notification"

const isNumberRepeated = (newPerson, olderPerson) =>
  newPerson.number === olderPerson.number

const isNumberRepeated = (newPerson, olderPerson) =>
  newPerson.number === olderPerson.number

const App = () => {
  // console.log('-------------------------')
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [filterText, setFilterText] = useState("")
  const [message, setMessage] = useState(null)

  useEffect(() => {
    contacts.getAllContacts().then((contacts) => {
      setPersons(contacts)
    })
  }, [])

  const resetFrom = () => {
<<<<<<< HEAD
    setNewName('')
    setNewNumber('')
  }
  const replaceContact = newPerson => {
    contacts.replaceContact(newPerson).then(updatePerson => {
      setPersons(persons.map(p => (p.id != updatePerson.id ? p : updatePerson)))
      resetFrom()
    })
  }
  const addNewContact = newPerson => {
    contacts.addContact(newPerson).then(newPerson => {
      setPersons(persons.concat(newPerson))
      resetFrom()
    })
  }

  const add = e => {
    e.preventDefault()
    if (!newName || !newNumber) return alert('Name or Number is empty')

    let newPerson = { name: newName, number: newNumber }
    const existingPerson = persons.find(person => person.name === newName)
=======
    setNewName("")
    setNewNumber("")
  }
  const replaceContact = (newPerson) => {
    contacts.replaceContact(newPerson).then((updatePerson) => {
      setPersons(
        persons.map((p) => (p.id != updatePerson.id ? p : updatePerson))
      )
      resetFrom()
      setMessage(`${updatePerson.name} number changed to ${updatePerson.number}`)
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    })
  }
  const addNewContact = (newPerson) => {
    contacts.addContact(newPerson).then((newPerson) => {
      setPersons(persons.concat(newPerson))
      resetFrom()
      setMessage(`Added ${newPerson.name}`)
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    })
  }

  const add = (e) => {
    e.preventDefault()
    if (!newName || !newNumber) return alert("Name or Number is empty")

    let newPerson = { name: newName, number: newNumber }
    const existingPerson = persons.find((person) => person.name === newName)
>>>>>>> 1cdf4157441d576427fef2160e5cd96f28c4274c

    if (existingPerson) {
      newPerson.id = existingPerson.id
      if (isNumberRepeated(newPerson, existingPerson)) {
        return alert(`${newName} with number ${newNumber} is already added`)
      }
      if (
        window.confirm(
          `${newName} is already added with number ${existingPerson.number}. Replace old number?`
        )
      ) {
        replaceContact(newPerson)
      }
      return
    }
    addNewContact(newPerson)
  }

<<<<<<< HEAD
  const deleteContact = e => {
    if (e.target.tagName !== 'BUTTON') return
=======
  const deleteContact = (e) => {
    if (e.target.tagName !== "BUTTON") return
>>>>>>> 1cdf4157441d576427fef2160e5cd96f28c4274c

    const deletedContactId = e.target.id
    const personToDelete = persons.find((person) => person.id === e.target.id)
    // console.log(e.target.id)
    // console.log(personToDelete)

    if (window.confirm(`Delete ${personToDelete.name}?`)) {
      contacts.deleteContact(deletedContactId).then(() => {
        setPersons(persons.filter((person) => person.id != deletedContactId))
      })
    }
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

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={message} />
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
