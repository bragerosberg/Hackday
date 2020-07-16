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
          <h1 className="rendered__header">Weather Page</h1>
          <main className="weather__info">
            <p>The temperature in {weather.name} is currently {weather.main.temp}°C</p>
            <p>Feels like {weather.main.feels_like}°C</p>
            <p>The weather may wary between {weather.main.temp_min}°C and {weather.main.temp_max}°C</p>
            <p>Weather: {weather.weather[0].main}</p>
            <p>Weather: {weather.weather[0].description}</p>
          </main>
        </>
      );
    }
}

export default Weather;