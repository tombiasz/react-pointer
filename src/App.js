import React, { Component } from 'react';
import './App.css';

import MapContainer from './containers/MapContainer';


class App extends Component {

    render() {
      return (
        <div className="App" style={{ height: `100%`}}>
            <MapContainer />
        </div>
      );
    }
}

export default App;
