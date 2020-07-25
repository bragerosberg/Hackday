import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Country from './components/Country/Country';
import Esport from './components/Esport/Esport';
import Home from './components/Home/Home';
import Weather from './components/Weather/Weather';
import './styles/App.css';


class App extends React.Component {
  state = { users: [] };
  render () {
    return (
      <BrowserRouter>
        <div>
          <nav className="navbar__routes">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/weather">Weather</Link></li>
              <li><Link to="/country">Country</Link></li>
              <li><Link to="/esport">E-sport</Link></li>
            </ul>
          </nav>
          <Switch>
            <Route path="/weather">
              <Weather />
            </Route>
            <Route path="/country">
              <Country />
            </Route>
            <Route path="/esport">
              <Esport />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
