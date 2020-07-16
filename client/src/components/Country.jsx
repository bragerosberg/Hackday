import React from 'react';
import '../styles/loader.css';

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
        <>
          <h1>Country Page</h1>
          <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div> {/* CSS loader */}
        </>
      )
    }
    return (
      <>
        <h1>Country Page</h1>
        <p>Country: {country.name}</p>
        <p>Capital: {country.capital}</p>
        <p>Population: {country.population}</p>
        <p>Demonym: {country.demonym}</p>
        <p>Relevance: {country.relevance}</p>
      </>
    );
  }
}

export default Country;