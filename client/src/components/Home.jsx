import React from 'react';

class Home extends React.Component {
  state = { home: [] };

  componentDidMount() {
    fetch('/')
      .then(res => res.json())
      .then(home => this.setState({ home }));
    }

  render () {
    return (
      <>
        <h1>Home page</h1>
      </>
    )
  }
}

export default Home;