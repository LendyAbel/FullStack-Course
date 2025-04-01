import React from 'react'

const ShowOnlyOne = ({ country }) => {
  if (!country) return null

  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital ? country.capital.join(' ') : '---'}</p>
      <p>Area: {country.area} km2</p>
      <h3>Language:</h3>
      <ul>
        {Object.entries(country.languages).map(([key, value]) => {
          return <li key={key}>{value}</li>
        })}
      </ul>
      <img src={country.flags.png} alt={country.flags.alt} />
    </div>
  )
}

export default ShowOnlyOne
