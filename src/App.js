import React, { Component } from 'react';
import './App.css';

import axios from 'axios';

import NavBar from './components/NavBar';
import PoiMapContainer from './containers/PoiMapContainer';
import PoiCardContainer from './containers/PoiCardContainer';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pois: [],
            intervalId: null,
            hoveredPoi: null,
            clickedPoi: null,
        };
    }

    componentDidMount() {
      const intervalId = setInterval(() => this.fetchPois(), 15000);
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

    animateMapMarkerStart(poi) {
      this.setState({hoveredPoi: poi});
    }

    animateMapMarkerEnd() {
      this.setState({hoveredPoi: null});
    }

    centerOnMarker(poi) {
      this.setState({clickedPoi: poi});
    }

    render() {
      return (
        <div>
          <NavBar />

          <div className="row">

            <div className="col s6">
              {this.state.pois.map((poi) => (
                <PoiCardContainer
                  key={poi.id}
                  poi={poi}
                  onMouseEnter={() => this.animateMapMarkerStart(poi)}
                  onMouseLeave={() => this.animateMapMarkerEnd()}
                  onClick={() => this.centerOnMarker(poi)}
                />
              ))}
            </div>

            <div className="col s6" style={{ padding: '0'}}>
              <PoiMapContainer
                pois={this.state.pois}
                animatePoi={this.state.hoveredPoi}
                centerOnPoi={this.state.clickedPoi}
              />
            </div>

          </div>
        </div>
      );
    }
}

export default App;
