import React, { useEffect, useState } from 'react';
import '../../styles/loader.css';
import './Esport.css';

export default () => {
  const [esport, setEsport] = useState();
  const [fetchComplete, setFetchStatus] = useState(false);

  useEffect(() => {
    fetch('/esport')
      .then(res => res.json())
      .then(data => {
        setEsport(data.Countries[Math.floor(Math.random() * data.Countries.length)])
        setFetchStatus(true);
      })
  }, []);

  const { Country, CountryCode, NewConfirmed, TotalConfirmed } = fetchComplete ? esport : '';

  return (
    <>
      {!fetchComplete && (
      <div className="loader__wrapper">
        <h1 className="loading__header">E-sport Page</h1>
        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div> {/* CSS loader */}
        <p>If you experience a long load-time, please make sure the server is running</p>
      </div>
      )}
      {fetchComplete && (
      <div className="esport__wrapper">
        <p style={{color: "white"}}>Country: {Country}, {CountryCode}</p>
        <p style={{color: "white"}}>Total confirmed {TotalConfirmed}</p>
        <p style={{color: "white"}}>New confirmed {NewConfirmed}</p>
      </div>
      )}
    </>
  )}
