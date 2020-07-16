import React from "react";

export default props => (
  <article className="country__info">
    <section className="country__info--details">
      <h2>General Info</h2>
      <p>Capital: {props.capital}</p>
      <p>Demonym: {props.demonym}</p>
      <p>Population: {props.population}</p>
    </section>
    <section className="country__info--data">
      <h2>Data and numbers</h2>
      <p>Area: {props.area}</p>
      <p>Numericode: {props.numericCode}</p>
      <p>Population: {props.population}</p>
    </section>
    <section className="country__info--location">
      <h2>Location</h2>
      <p>Region: {props.region}</p>
      <p>Subregion: {props.subregion}</p>
    </section>
    <section className="country__info--other">
      <h2>Other</h2>
      <p>ISO-2: {props.alpha2Code}</p>
      <p>ISO-3: {props.alpha3Code}</p>
      <p>Relevance: {props.relevance}</p>
    </section>
  </article>
)