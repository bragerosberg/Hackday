import React, { useState, useEffect } from 'react';
import '../../styles/loader.css';
import './Country.css';

const Country = () => {
  const [countries, setCountries] = useState();
  const [countryName, setCountryName] = useState(null);

  useEffect(() => {
    let temp;
    fetch('/country')
      .then(res => res.json())
      .then(data => {
        setCountries(data[0])
        setCountryName(data[0].name)
      })
  }, []);

  if(countryName === null) {
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
      <h2 className="country__info__name">{countries.name}</h2>
      <article className="country__info">
      <section className="country__info--details">
        <h2>General Info</h2>
        <p>Capital: {countries.capital}</p>
        <p>Demonym: {countries.demonym}</p>
        <p>Population: {countries.population}</p>
      </section>
      <section className="country__info--data">
        <h2>Data and numbers</h2>
        <p>Area: {countries.area}</p>
        <p>Numericode: {countries.numericCode}</p>
        <p>Population: {countries.population}</p>
      </section>
      <section className="country__info--location">
        <h2>Location</h2>
        <p>Region: {countries.region}</p>
        <p>Subregion: {countries.subregion}</p>
      </section>
      <section className="country__info--other">
        <h2>Other</h2>
        <p>ISO-2: {countries.alpha2Code}</p>
        <p>ISO-3: {countries.alpha3Code}</p>
        <p>Relevance: {countries.relevance}</p>
      </section>
    </article>
    </main>
  );
}

export default Country;