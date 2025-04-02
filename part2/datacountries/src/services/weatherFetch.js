import axios from 'axios'

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?'
const APY_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY

const weatherFecth = (lat, long) => {
  if (!lat || !long) return null

  const request = axios
    .get(`${baseUrl}lat=${lat}&lon=${long}&units=metric&appid=${APY_KEY}`)
    .then(res => res.data)
  //   console.log(request)
  return request
}

export default { weatherFecth }
