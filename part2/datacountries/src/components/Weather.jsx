import React, { useEffect, useState } from 'react'
import wf from '../services/weatherFetch'

const Weather = ({ lat, long, capital }) => {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    wf.weatherFecth(lat, long).then(setWeather)
  }, [lat, long])

  //   console.log(weather)
  if (!weather) return null

  const icon = weather.weather[0].icon
  // console.log('icon',icon);

  return (
    <div>
      <h2>Wheather in {capital}</h2>
      <p>Temperature: {weather.main.temp} ºC</p>
      <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt='' />
      <p>Wind: {weather.wind.speed} m/s</p>
    </div>
  )
}

export default Weather
