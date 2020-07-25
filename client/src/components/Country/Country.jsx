import React from 'react';
import '../../styles/loader.css';
import './Country.css';

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
        <article className="country__info">
        <section className="country__info--details">
          <h2>General Info</h2>
          <p>Capital: {country.capital}</p>
          <p>Demonym: {country.demonym}</p>
          <p>Population: {country.population}</p>
        </section>
        <section className="country__info--data">
          <h2>Data and numbers</h2>
          <p>Area: {country.area}</p>
          <p>Numericode: {country.numericCode}</p>
          <p>Population: {country.population}</p>
        </section>
        <section className="country__info--location">
          <h2>Location</h2>
          <p>Region: {country.region}</p>
          <p>Subregion: {country.subregion}</p>
        </section>
        <section className="country__info--other">
          <h2>Other</h2>
          <p>ISO-2: {country.alpha2Code}</p>
          <p>ISO-3: {country.alpha3Code}</p>
          <p>Relevance: {country.relevance}</p>
        </section>
      </article>
      </main>
    );
  }
}

export default Country;