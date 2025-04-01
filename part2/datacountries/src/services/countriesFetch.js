import axios from 'axios'
const allCountriesUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all'

const getAllCountries = () => {
  return axios.get(allCountriesUrl).then(res => res.data)
  //   console.log(request);
}

export default { getAllCountries }

