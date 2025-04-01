import React from 'react'

const ShowCountries = ({ countries }) => {
  //   console.log(countries)
  //   console.log(countries.length);

  const numbertoShow = 10
  const toShow = () => {
    if (countries.length > numbertoShow) {
      return <p>To many matches, specify other filter</p>
    }
    if (countries.length === 1) {
      const countrie = countries[0]
      // const show=Object.entries(countries[0].languages)
      // console.log(show)
      return (
        <div>
          <h2>{countrie.name.common}</h2>
          <p>Captial: {countrie.capital.join(' ')}</p>
          <p>Area: {countrie.area} km2</p>
          <h3>Language:</h3>
          <ul>
            {Object.entries(countrie.languages).map(([key, value]) => {
              return <li key={key}>{value}</li>
            })}
            <img src={countrie.flags.png} alt={countrie.flags.alt} />
          </ul>
        </div>
      )
    }

    return countries.map(c => <p key={c.cca3}>{c.name.common}</p>)
  }

  return <div>{toShow()}</div>
}

export default ShowCountries
