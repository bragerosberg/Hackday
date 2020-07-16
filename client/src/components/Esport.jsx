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
            <p>{esport.opponents[0].opponent.name}</p>
            <img className="opponent__one__logo" src={esport.opponents[0].opponent.image_url} alt="opponent_one" />
          </section>

          <section className="opponent__two">
            <p>{esport.opponents[1].opponent.name}</p>
            <img className="opponent__two__logo" src={esport.opponents[1].opponent.image_url} alt="opponent_two" />
          </section>
        </main>
      </>
    )
  }
}

export default Esport;