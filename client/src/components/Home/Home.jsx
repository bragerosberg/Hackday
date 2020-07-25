import React, { useEffect, useState } from 'react';
import './Home.css';
const apiList = require('../apiList');

export default () => {
  const [home, setHome] = useState();

  useEffect(() => {
    fetch('/')
      .then(res => res.json())
      .then(data => {
        setHome(data);
      })
  }, []);

  return ( 
    <main className="homepage__wrapper">
      <h1 className="rendered__header">Home page</h1>
      <section className="information">
        <section className="information__introduction">
          <h2>About the project</h2>
          <p>Hackday project consisting of a CRA-frontend, with express backend.</p>
          <p>Using APIs I have been curious to test out, therefore wide difference.</p>
        </section>
        <section className="information___api">
          <h2>APIs used</h2>
          <>
            {apiList.map(api =>
              <p key={api}>{api}</p>)}
          </>
        </section>
      </section>
    </main>
  )
}