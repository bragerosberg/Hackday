import React from 'react';

class Esport extends React.Component {
  state = { esport: [] };

  componentDidMount() {
    fetch('/esport')
      .then(res => res.json())
      .then(esport => this.setState({ esport }));
    }

  render () {
    return (
      <>
        <h1>E-sport page</h1>
      </>
    )
  }
}

export default Esport;