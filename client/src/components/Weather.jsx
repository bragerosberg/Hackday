import React from 'react';
import '../styles/loader.css';
import '../styles/Weather.css';

class Weather extends React.Component {
  state = { weather: [{
    main: undefined
    }]
  };

  componentDidMount() {
    fetch('/weather')
      .then(res => res.json())
      .then(weather => this.setState({weather}));
    }

    render () {
      const weather = this.state.weather;
      if(weather.main === undefined) {
        return (
          <main className="loader__wrapper">
            <h1 className="loading__header">Weather Page</h1>
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div> {/* CSS loader */}
            <p>If you experience a long load-time, please make sure the server is running</p>
          </main>
        )
      }
      return (
        <>
          <section className="header__wrapper">
            <h1 className="rendered__header">Weather Page</h1>
            <p className="rendered__subheader">An updating forecast for {weather.name}:</p>
          </section>
          <main className="weather__info">
            <ul>
              <li>Temperature: {weather.main.temp}°C</li>
              <li>Feels Like: {weather.main.feels_like}°C</li>
              <li>May vary between: {weather.main.temp_min}°C and {weather.main.temp_max}°C</li>
              <li>Weather: {weather.weather[0].main}</li>
              <li>Weather description: {weather.weather[0].description}</li>
            </ul>
          </main>
        </>
      );
    }
}

export default Weather;