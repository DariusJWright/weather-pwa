import React, { useState } from 'react';
import './App.css';
import { getWeather, getFiveDay } from './api/getWeather';

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [fiveDay, setFiveDay] = useState({});

  const search = async (event) => {
    event.preventDefault();
    const data = await getWeather(query);
    setWeather(data)
  }

  return (
    <div className="main">
      <form id='form' onSubmit={search}>
        <input
          type='text'
          className='search'
          placeholder='Enter city name...'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type='submit'>Search</button>
      </form> 
      {weather.sys && (
        <div className='weather'>
          <h1 className='city'>{weather.name}, {weather.sys.country}</h1>
          <h2 className='coord'>{`Lat: ${weather.coord.lat}, Lon: ${weather.coord.lon}`}</h2>
          <h2 className='temp'>
            {Math.round(weather.main.temp)}
            <sup>&deg;F</sup>
          </h2>
          <div className='weather-info'>
            <img className='icon' src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt={weather.weather[0].description} />
            <p>{weather.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
