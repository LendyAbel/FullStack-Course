import { useEffect, useState } from 'react'
import cf from './services/countriesFetch'

import ShowCountries from './components/ShowCountries'

const App = () => {
  const [name, setName] = useState('')
  const [allCountries, setAllCountries] = useState(null)
  const [filteredCountries, setFilteredCountries] = useState(null)
  //console.log(allCountries);

  useEffect(() => {
    cf.getAllCountries().then(setAllCountries)
  }, [])

  useEffect(() => {
    setFilteredCountries(
      !name
        ? []
        : allCountries.filter(c =>
            c.name.common.toUpperCase().includes(name.toLocaleUpperCase())
          )
    )
  }, [name])

  if (!filteredCountries) {
    return null
  }

  const handleInput = e => {
    setName(e.target.value)
  }

  return (
    <div>
      <h1>Countries Data</h1>
      find countries <input value={name} onChange={handleInput} />
      <ShowCountries countries={filteredCountries} />
    </div>
  )
}

export default App
