/* eslint-disable react/prop-types */
import './WeatherInfo5Days.css'

function WeatherInfo5Days({ weather5Days }) {
  
  let dailyForecast = {}

  for(let forecast of weather5Days.list) {
     const date = new Date(forecast.dt*1000).toLocaleDateString()

     if(!dailyForecast[date]){
      dailyForecast[date] = forecast
     }
  }

  const nextFiveDays = Object.values(dailyForecast).slice(0,6)

  function convertDate(date){
    const newDate = new Date(date.dt * 1000).toLocaleTimeString('pt-Br', {weekday: 'long', day: '2-digit'})

    return newDate
  }

  return (
    <div className='weather-container'>
      <p>Previsão Próximos 5 days</p>
      {nextFiveDays.map(forecast => ( 
        <div key={forecast.dt}>

          <p>{convertDate(forecast)}</p>

          <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}/>

          <p>{forecast.weather[0].description}</p>
          <p>{Math.round(forecast.main.temp_min)}ºC min / {Math.round(forecast.main.temp_max)}ºC máx</p>
        </div>
        
      ))}
    </div>
  );
}

export default WeatherInfo5Days;
