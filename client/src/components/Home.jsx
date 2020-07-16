import React from 'react';
import '../styles/Home.css';
const apiList = require('./apiList');

class Home extends React.Component {
  state = { home: [] };

  componentDidMount() {
    fetch('/')
      .then(res => res.json())
      .then(home => this.setState({ home }));
    }

  render () {
    return (
      <main className="homepage__wrapper">
        <h1 className="rendered__header">Home page</h1>
        <section className="information">
          <section className="information__introduction">
            <h2>Background</h2>
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
}

export default Home;