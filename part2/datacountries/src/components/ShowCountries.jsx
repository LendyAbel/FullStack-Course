import { useEffect, useState } from 'react'
import ShowOnlyOne from './ShowOnlyOne'

const ShowCountries = ({ countries }) => {
  // console.log(countries)
  //   console.log(countries.length);

  const maxNumberToShow = 10
  const [country, setCountry] = useState(null)

  useEffect(() => {
    setCountry(null)
  }, [countries])

  if (countries.length > maxNumberToShow) {
    return <p className='alert'>To many matches, specify other filter</p>
  }
  if (countries.length === 1) {
    return <ShowOnlyOne country={countries[0]} />
  }

  const buttonHandler = e => {
    // console.log(e.target.id)
    setCountry(countries.find(c => c.cca3 === e.target.id))
  }

  return country ? (
    <ShowOnlyOne country={country} />
  ) : (
    countries.map(c => (
      <p key={c.cca3}>
        {c.name.common}{' '}
        <button id={c.cca3} onClick={buttonHandler}>
          Show
        </button>
      </p>
    ))
  )
}

export default ShowCountries
