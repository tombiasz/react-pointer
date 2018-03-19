import React, { Component } from 'react';
import './App.css';

import MapContainer from './containers/MapContainer';


class App extends Component {

    render() {
      return (
        <div className="">
          <nav className="blue darken-2">
            <div className="nav-wrapper">
              <a href="#" className="brand-logo">Logo</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">JavaScript</a></li>
              </ul>
            </div>
          </nav>

          <div style={{height: '100%'}} >
            <MapContainer />
          </div>
        </div>
      );
    }
}

export default App;
