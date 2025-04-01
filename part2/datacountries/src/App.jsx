import { useEffect, useState } from 'react'
import ShowCountries from './components/ShowCountries'
import cf from './services/countriesFetch'

const App = () => {
  const [name, setName] = useState('')
  const [countries, setCountries] = useState(null)

  useEffect(() => {
    cf.getAllCountries().then(countriesFetch => {
      // console.log(countriesFetch)

      const countriesToShow = !name
        ? []
        : countriesFetch.filter(c =>
            c.name.common.toUpperCase().includes(name.toLocaleUpperCase())
          )
      // console.log(contriesToShow)

      setCountries(countriesToShow)
    })
  }, [name])

  if (!countries) {
    return null
  }

  const handleInput = e => {
    setName(e.target.value)
  }
  // console.log(countries)

  return (
    <div>
      <h1>Countries Data</h1>
      find countries <input value={name} onChange={handleInput} />
      <ShowCountries countries={countries} />
    </div>
  )
}

export default App
