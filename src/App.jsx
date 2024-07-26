import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import WeatherInfo from './components/WeatherInfo/WeatherInfo'
import WeatherInfo5Days from './components/WeatherInfo5Days/WeatherInfo5Days'

function App() {
  const [weather, setWeather] = useState()
  const [weather5Days, setWeather5Days] = useState()

  const inputRef = useRef()

  async function searchCity() {
    const city = inputRef.current.value
    const key = "2b853c298fb86825a632e6ac6bad7ed2"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
    const url5days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`
 
    const apiInfo = await axios.get(url)
    const apiInfo5days = await axios.get(url5days)

    setWeather5Days(apiInfo5days.data)
    setWeather(apiInfo.data)
  }

  return (
  
      <div className='container'> 
       <h1>Previsão do tempo</h1>
       <input ref={inputRef} type="text" placeholder='Digite o nome da cidade' />
       <button onClick={searchCity}>Buscar</button>

       { weather && <WeatherInfo weather={weather} />}
       { weather5Days && <WeatherInfo5Days  weather5Days={weather5Days}/>}
      </div>

  )
}
export default App
