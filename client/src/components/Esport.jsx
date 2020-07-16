import React from 'react';

class Esport extends React.Component {
  state = { esport: {
    id: undefined,
    team: undefined 
  }};

  componentDidMount() {
    fetch('/esport')
      .then(res => res.json())
      .then(esport => this.setState({esport}));
    }

  render () {
    return (
      <>
        <h1>E-sport page</h1>
        <p>{this.state.esport.team}</p>
        <p>{this.state.esport.id}</p>
      </>
    )
  }
}

export default Esport;