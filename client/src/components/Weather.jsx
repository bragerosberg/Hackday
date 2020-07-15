import React from 'react';

class Weather extends React.Component {
  state = { weather: [] };

  componentDidMount() {
    fetch('/weather')
      .then(res => res.json())
      .then(weather => this.setState({ weather }));
    }

  render () {
    return (
      <>
        <h1>Weather page</h1>
      </>
    )
  }
}

export default Weather;