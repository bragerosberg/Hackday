import React from 'react';
import CountryInfo from './CountryInfo';
import '../styles/loader.css';
import '../styles/Country.css';

class Country extends React.Component {
  state = { countries: [{
    name: undefined,
    }]
  };

  componentDidMount() {
    fetch('/country')
      .then(res => res.json())
      .then(countries => this.setState({countries}));
    }

  render () {
    const country = this.state.countries[0];
    if(country.name === undefined) {
      return (
        <main className="loader__wrapper">
          <h1 className="loading__header">Country Page</h1>
          <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div> {/* CSS loader */}
          <p>If you experience a long load-time, please make sure the server is running</p>
        </main>
      )
    }
    return (
      <main className="country__wrapper">
        <h1 className="rendered__header">Country Page</h1>
        <h2 className="country__info__name">{country.name}</h2>
        <CountryInfo props={country}/>
      </main>
    );
  }
}

export default Country;