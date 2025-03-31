import { useState, useEffect } from "react"
import contacts from "./services/contacts"

import Filter from "./components/Filter"
import AddContactForm from "./components/AddContactForm"
import ShowNumbers from "./components/ShowNumbers"
import Notification from "./components/Notification"

const isNumberRepeated = (newPerson, olderPerson) =>
  newPerson.number === olderPerson.number

const App = () => {
  // console.log('-------------------------')
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [filterText, setFilterText] = useState("")
  const [[message, error], setMessage] = useState([null, false])

  useEffect(() => {
    contacts.getAllContacts().then((contacts) => {
      setPersons(contacts)
    })
  }, [])

  const resetFrom = () => {
    setNewName("")
    setNewNumber("")
  }
  const replaceContact = (newPerson) => {
    contacts
      .replaceContact(newPerson)
      .then((updatePerson) => {
        setPersons(
          persons.map((p) => (p.id != updatePerson.id ? p : updatePerson))
        )
        resetFrom()
        setMessage([
          `${updatePerson.name} number changed to ${updatePerson.number}`,
          false,
        ])
        setTimeout(() => {
          setMessage([null, false])
        }, 5000)
      })
      .catch((error) => {
        setMessage([
          `${newPerson.name} was delete previously from server`,
          true,
        ])
        setTimeout(() => {
          setMessage([null, false])
        }, 5000)
        setPersons(persons.filter((p) => p.id != newPerson.id))
      })
  }

  const addNewContact = (newPerson) => {
    contacts.addContact(newPerson).then((newPerson) => {
      setPersons(persons.concat(newPerson))
      resetFrom()
      setMessage([`Added ${newPerson.name}`, false])
      setTimeout(() => {
        setMessage([null, false])
      }, 5000)
    })
  }

  const add = (e) => {
    e.preventDefault()
    if (!newName || !newNumber) return alert("Name or Number is empty")

    let newPerson = { name: newName, number: newNumber }
    const existingPerson = persons.find((person) => person.name === newName)

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

  const deleteContact = (e) => {
    if (e.target.tagName !== "BUTTON") return

    const deletedContactId = e.target.id
    const personToDelete = persons.find((person) => person.id === e.target.id)
    // console.log(e.target.id)
    // console.log(personToDelete)

    if (window.confirm(`Delete ${personToDelete.name}?`)) {
      contacts
        .deleteContact(deletedContactId)
        .then(() => {
          setPersons(persons.filter((person) => person.id != deletedContactId))
          setMessage([`Deleted ${newPerson.name}`, false])
          setTimeout(() => {
            setMessage([null, false])
          }, 5000)
        })
        .catch((error) => {
          setPersons(persons.filter((p) => p.id != personToDelete.id))
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
      <Notification message={message} error={error} />
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
