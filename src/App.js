import React, { Component } from 'react';
import './App.css';

import axios from 'axios';

import MapContainer from './containers/MapContainer';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pois: []
        };
    }

    componentDidMount() {
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

          <div class="row">
            <div class="col s6">
              <div class="row">
                <div class="col s12">
                  <div class="card">
                    <div class="card-content">
                      <span class="card-title">Card Title</span>
                      <p>I am a very simple card. I am good at containing small bits of information.
                      I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <div class="card-action">
                      <a href="#">This is a link</a>
                      <a href="#">This is a link</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col s6" style={{ padding: '0'}}>
              <MapContainer pois={ this.state.pois} />
            </div>
          </div>
        </div>
      );
    }
}

export default App;
