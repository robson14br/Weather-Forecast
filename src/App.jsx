import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import WeatherInfo from './components/WeatherInfo/WeatherInfo'

function App() {
  const [weather, setWeather] = useState({})
  
  const inputRef = useRef()

  async function searchCity() {
    const city = inputRef.current.value
    const key = "2b853c298fb86825a632e6ac6bad7ed2"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
 
    const apiInfo = await axios.get(url)
    setWeather(apiInfo.data)
  }

  return (
  
      <div>
       <h1>Previsao do tempo</h1>
       <input ref={inputRef} type="text" placeholder='Digite o nome da cidade' />
       <button onClick={searchCity}>Buscar</button>

       <WeatherInfo weather={weather} />
      </div>

  )
}
export default App
