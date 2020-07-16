import React from 'react';

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
        <>
          <h1>E-sport Page</h1>
          <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div> {/* CSS loader */}
        </>
      )
    }
    return (
      <>
        <h1>E-sport page</h1>
        <div className="match">
          <div className="opponent__one">
            <p>{esport.opponents[0].opponent.name}</p>
            <img className="opponent__one__logo" src={esport.opponents[0].opponent.image_url} alt="opponent_one" />
          </div>
          <div className="opponent__two">
            <p>{esport.opponents[1].opponent.name}</p>
            <img className="opponent__two__logo" src={esport.opponents[1].opponent.image_url} alt="opponent_two" />
          </div>

        </div>
      </>
    )
  }
}

export default Esport;