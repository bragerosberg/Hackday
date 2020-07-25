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
        setEsport(data[0]);
        setFetchStatus(true);
      })
  }, []);

  return !fetchComplete ?
    (
      <div className="loader__wrapper">
        <h1 className="loading__header">E-sport Page</h1>
        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div> {/* CSS loader */}
        <p>If you experience a long load-time, please make sure the server is running</p>
      </div>
    ) : (
      <div className="esport__wrapper">
        <h1 className="rendered__header">E-sport Page</h1>
        <h3 className="esport__game">{esport.videogame.name}</h3>

        <main className="match">
          
          <section className="opponent__one">
            <img className="opponent__one__logo" src={esport.opponents[0].opponent.image_url} alt="opponent_one" />
            <p className="opponent__one__name">{esport.opponents[0].opponent.name} ({esport.opponents[0].opponent.location})</p>
            <p className="opponent__one__id">ID: {esport.opponents[0].opponent.id}</p>
          </section>
          
          <article className="match__result">
            <section className="match__tournament">
              <p className="match__tournament__title">{esport.name}</p>
              <p className="match__tournament--prizepool">A prizepool of {esport.tournament.prizepool}</p>
              <p className="match__maps--amount">Best of: {esport.number_of_games}</p>
            </section>

            <p className="match__winner__name">Winner = {esport.winner.name}</p>

            <ul className="match__maps--scores">
              <p>Winner of map</p>
              {esport.games.map(game => 
                <li key={game.id}>{game.winner.id}</li>)}
            </ul>
          </article>

          <section className="opponent__two">
            <img className="opponent__two__logo" src={esport.opponents[1].opponent.image_url} alt="opponent_two" />
            <p className="opponent__two__name">{esport.opponents[1].opponent.name} ({esport.opponents[1].opponent.location})</p>
            <p className="opponent__two__id">ID: {esport.opponents[1].opponent.id}</p>
          </section>

        </main>
      </div>
    )
}