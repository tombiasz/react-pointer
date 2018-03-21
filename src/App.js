import React, { Component } from 'react';
import './App.css';

import axios from 'axios';

import MapContainer from './containers/MapContainer';
import PoiCardContainer from './containers/PoiCardContainer';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pois: [],
            intervalId: null,
        };
    }

    componentDidMount() {
      const intervalId = setInterval(this.fetchPois, 15000);
      this.setState({intervalId})
      this.fetchPois();
    }

    componentWillUnmount() {
      clearInterval(this.state.intervalId);
    }

    fetchPois() {
      const pointerApiURL = process.env.REACT_APP_POINTER_API_URL;
      const poisURL = `${pointerApiURL}/pois/`;
      axios
          .get(poisURL)
          .then((result) => this.setState({pois: result.data}))
          .catch(console.log)
    }

    render() {
      return (
        <div className="">
          <div className="navbar-fixed">
            <nav className="blue darken-2 z-depth-0">
              <div className="nav-wrapper">
                <a href="#" className="brand-logo">Logo</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li><a href="sass.html">Sass</a></li>
                  <li><a href="badges.html">Components</a></li>
                  <li><a href="collapsible.html">JavaScript</a></li>
                </ul>
              </div>
            </nav>
          </div>

          <div className="row">

            <div className="col s6">
              { this.state.pois.map((poi) => (
                < PoiCardContainer poi={poi} />
              ))}
            </div>

            <div className="col s6" style={{ padding: '0'}}>
              <MapContainer pois={ this.state.pois} />
            </div>

          </div>
        </div>
      );
    }
}

export default App;
