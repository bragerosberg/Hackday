import React from 'react';
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
        <div className="loader__wrapper">
          <h1>Country Page</h1>
          <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div> {/* CSS loader */}
        </div>
      )
    }
    return (
      <>
        <h1 className="rendered__header">Country Page</h1>
        <main className="country__info">
          <p>Country: {country.name}</p>
          <p>Capital: {country.capital}</p>
          <p>Population: {country.population}</p>
          <p>Demonym: {country.demonym}</p>
          <p>Relevance: {country.relevance}</p>
        </main>
      </>
    );
  }
}

export default Country;