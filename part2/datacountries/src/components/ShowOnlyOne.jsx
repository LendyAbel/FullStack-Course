import React from 'react'
import Weather from './Weather'

const ShowOnlyOne = ({ country }) => {
  // console.log(country)

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
      <Weather
        capital={country.capital ? country.capital.join(' ') : '---'}
        lat={country.capitalInfo.latlng[0]}
        long={country.capitalInfo.latlng[1]}
      />
    </div>
  )
}

export default ShowOnlyOne
