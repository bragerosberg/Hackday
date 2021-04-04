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
        setEsport(data.Countries);
        setFetchStatus(true);
      })
  }, []);

  if (fetchComplete)console.log(esport[47]);

  return !fetchComplete ?
    (
      <div className="loader__wrapper">
        <h1 className="loading__header">E-sport Page</h1>
        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div> {/* CSS loader */}
        <p>If you experience a long load-time, please make sure the server is running</p>
      </div>
    ) : (
      <div className="esport__wrapper">
        <p style={{color: "white"}}>Total confirmed {esport[47].TotalConfirmed}</p>
      </div>
    )
}