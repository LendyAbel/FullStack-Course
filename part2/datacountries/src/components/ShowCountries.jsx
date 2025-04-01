import { useEffect, useState } from 'react'

const showOnlyOne = country => {
  //console.log(country);
  // const show=Object.entries(country.languages)
  // console.log(show)
  if (!country || Object.keys(country).length === 0) return null

  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>Captial: {country.capital.join(' ')}</p>
      <p>Area: {country.area} km2</p>
      <h3>Language:</h3>
      <ul>
        {Object.entries(country.languages).map(([key, value]) => {
          return <li key={key}>{value}</li>
        })}
        <img src={country.flags.png} alt={country.flags.alt} />
      </ul>
    </div>
  )
}

const ShowCountries = ({ countries }) => {
  //   console.log(countries)
  //   console.log(countries.length);

  const maxNumberToShow = 10
  const [isBtnClicked, setIsBtnClicked] = useState(false)
  const [country, setCountry] = useState(null)

  useEffect(() => {
    setIsBtnClicked(false)
    setCountry(null)
  }, [countries])

  if (countries.length > maxNumberToShow) {
    return <p className='alert'>To many matches, specify other filter</p>
  }
  if (countries.length === 1) {
    return showOnlyOne(countries[0])
  }

  const buttonHandler = e => {
    console.log(e.target.id)
    setCountry(countries.find(c => c.cca3 === e.target.id))
    setIsBtnClicked(true)
  }

  console.log(isBtnClicked)
  console.log(country)

  return isBtnClicked
    ? showOnlyOne(country)
    : countries.map(c => (
        <p key={c.cca3}>
          {c.name.common}{' '}
          <button id={c.cca3} onClick={buttonHandler}>
            Show
          </button>
        </p>
      ))
}

export default ShowCountries
