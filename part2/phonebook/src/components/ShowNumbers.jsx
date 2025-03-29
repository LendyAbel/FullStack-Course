import React from 'react'

const ShowNumbers = ({ persons, filterText, deleteContact }) => {
  let personsToShow = persons
  const isFilter = () => filterText != ''
  const isIncludes = person =>
    person.name.toUpperCase().includes(filterText.toUpperCase())
  const personsFilter = persons.filter(person => isIncludes(person))

  // console.log(personsFilter)
  if (isFilter()) {
    personsToShow = personsFilter
  }

  return (
    <div onClick={deleteContact}>
      <h2>Numbers</h2>
      <div>
        {personsToShow.map(person => (
          <p key={person.id}>
            {person.name} {person.number} <button id={person.id}>delete</button>
          </p>
        ))}
      </div>
    </div>
  )
}

export default ShowNumbers
