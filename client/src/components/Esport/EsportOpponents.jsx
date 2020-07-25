import React from 'react';

export default props => (
  <main className="match">
  <section className="opponent__one">
    <img className="opponent__one__logo" src={props.opponents.opponent.image_url} alt="opponent_one" />
    <p className="opponent__one__name">{props.opponents[0].opponent.name} ({props.opponents[0].opponent.location})</p>
    <p className="opponent__one__id">ID: {props.opponents[0].opponent.id}</p>
  </section>

  <article className="match__result">
    <section className="match__tournament">
      <p className="match__tournament__title">{props.name}</p>
      <p className="match__tournament--prizepool">A prizepool of {props.tournament.prizepool}</p>
      <p className="match__maps--amount">Best of: {props.number_of_games}</p>
    </section>

    <p className="match__winner__name">Winner = {props.winner.name}</p>

    <ul className="match__maps--scores">
      <p>Winner of map</p>
      {props.games.map(game => 
        <li key={game.id}>{game.winner.id}</li>)}
    </ul>

  </article>

  <section className="opponent__two">
    <img className="opponent__two__logo" src={props.opponents[1].opponent.image_url} alt="opponent_two" />
    <p className="opponent__two__name">{props.opponents[1].opponent.name} ({props.opponents[1].opponent.location})</p>
    <p className="opponent__two__id">ID: {props.opponents[1].opponent.id}</p>
  </section>
  </main>
)