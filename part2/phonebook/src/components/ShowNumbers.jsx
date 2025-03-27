import React from 'react'

const ShowNumbers = ({ persons, filterText }) => {
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
  
    return (
      <>
        <h2>Numbers</h2>
        <div>{showNumbers(persons)}</div>
      </>
    )
  }

export default ShowNumbers