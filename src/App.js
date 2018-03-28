import { connect } from 'react-redux'
import React, { Component } from 'react';

import { getAllPois } from './api';
import {
  fetchPoisStart,
  fetchPoisFinish,
} from './actions/index';
import NavBar from './components/NavBar';
import PoiMapContainer from './containers/PoiMapContainer';
import PoiCardContainer from './containers/PoiCardContainer';
import './App.css';

const mapStateToProps = (state, ownProps) => ({
  pois: state.pois.pois
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPois: () => {
    dispatch(fetchPoisStart());
    getAllPois().then((result) => dispatch(fetchPoisFinish(result.data)));
  }
})

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            intervalId: null,
            hoveredPoi: null,
            clickedPoi: null,
        };
    }

    componentDidMount() {
      const { fetchPois } = this.props;
      const intervalId = setInterval(() => fetchPois(), 15000);
      this.setState({intervalId})
      fetchPois();
    }

    componentWillUnmount() {
      clearInterval(this.state.intervalId);
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
              {this.props.pois.map((poi) => (
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
                pois={this.props.pois}
                animatePoi={this.state.hoveredPoi}
                centerOnPoi={this.state.clickedPoi}
              />
            </div>

          </div>
        </div>
      );
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
