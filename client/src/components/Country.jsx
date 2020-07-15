import React from 'react';

class Country extends React.Component {
  state = { country: [] };

  componentDidMount() {
    fetch('/country')
      .then(res => res.json())
      .then(country => this.setState({ country }));
    }

  render () {
    return (
      <>
      <h1>Country page</h1>
      </>
    );
  }
}

export default Country;