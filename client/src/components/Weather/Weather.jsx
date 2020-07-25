import React, { useEffect, useState } from 'react';
import '../../styles/loader.css';
import './Weather.css';

export default () => {
  const [weather, setWeather] = useState();
  const [fetchComplete, setFetchStatus] = useState(false);

  useEffect(() => {
    fetch('/weather')
      .then(res => res.json())
      .then(data => {
        setWeather(data);
        setFetchStatus(true);
      })
  }, []);

  return !fetchComplete ?
    (
      <main className="loader__wrapper">
        <h1 className="loading__header">Weather Page</h1>
        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div> {/* CSS loader */}
        <p>If you experience a long load-time, please make sure the server is running</p>
      </main>
    ) : ( 
      <article>
        <section className="header__wrapper">
          <h1 className="rendered__header">Weather Page</h1>
          <p className="rendered__subheader">An updating forecast for {weather.name}:</p>
        </section>
        <main className="weather__info">
          <ul>
            <li>Temperature: {Math.round(weather.main.temp * 10) / 10}°C</li>
            <li>Feels Like: {Math.round(weather.main.feels_like * 10) / 10}°C</li>
            <li>May vary between: {Math.round(weather.main.temp_min * 10) / 10}°C and {Math.round(weather.main.temp_max * 10) / 10}°C</li>
            <li>Weather: {weather.weather[0].main}</li>
            <li>Weather description: {weather.weather[0].description}</li>
          </ul>
        </main>
      </article>
    )
}
