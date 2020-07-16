import React from 'react';
import '../styles/loader.css';
import '../styles/Esport.css';

class Esport extends React.Component {
  state = { esport: [{
    tournament_id: undefined,
  }]};

  componentDidMount() {
    fetch('/esport')
      .then(res => res.json())
      .then(esport => this.setState({esport}));
    }

  render () {
    const esport = this.state.esport[0];
    if (esport.tournament_id === undefined) {
      return (
        <div className="loader__wrapper">
          <h1 className="loading__header">E-sport Page</h1>
          <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div> {/* CSS loader */}
          <p>If you experience a long load-time, please make sure the server is running</p>
        </div>
      )
    }
    return (
      <>
        <h1 className="rendered__header">E-sport Page</h1>
        <main className="match">
          <section className="opponent__one">
            <img className="opponent__one__logo" src={esport.opponents[0].opponent.image_url} alt="opponent_one" />
            <p className="opponent__one__name">{esport.opponents[0].opponent.name} ({esport.opponents[0].opponent.location})</p>
            <p className="opponent__one__id">ID: {esport.opponents[0].opponent.id}</p>
          </section>

          <section className="opponent__two">
            <img className="opponent__two__logo" src={esport.opponents[1].opponent.image_url} alt="opponent_two" />
            <p className="opponent__two__name">{esport.opponents[1].opponent.name} ({esport.opponents[1].opponent.location})</p>
            <p className="opponent__two__id">ID: {esport.opponents[1].opponent.id}</p>
          </section>

        </main>
        <article className="match__result">
          <p className="match__title">{esport.name}</p>
          <p className="match__maps--amount">Best of: {esport.number_of_games}</p>
          <p className="match__tournament--prizepool">A prizepool of {esport.tournament.prizepool}</p>
          <ul className="match__maps--scores">
            <p>Winner of each map</p>
            {esport.games.map(game => 
              <li key={game.id}>{game.winner.id}</li>)}
          </ul>
        </article>
      </>
    )
  }
}

export default Esport;