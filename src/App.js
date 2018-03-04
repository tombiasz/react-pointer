import React, { Component } from 'react';
import './App.css';

import Map from './components/Map';


class App extends Component {

  render() {
    const mapApiKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY
    return (
      <div className="App" style={{ height: `100%`}}>
        <Map
          isMarkerShown
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${mapApiKey}&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100vh` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default App;
