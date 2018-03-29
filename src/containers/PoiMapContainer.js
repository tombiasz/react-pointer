import React, { Component} from 'react';

import { connect } from 'react-redux';
import { MAP } from 'react-google-maps/lib/constants';

import PoiMap from '../components/PoiMap';
import PoiMarkerContainer from './PoiMarkerContainer';


const mapStateToProps = (state, ownProps) => {
  const {
    pois,
    animatePoi,
    selectedPoi,
  } = state.pois;
  return {
    pois,
    animatePoi,
    selectedPoi,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
});

class PoiMapContainer extends Component {

  constructor(props) {
    super(props);

    this.map = null; // react google map object (wrapper around google map object)
    this.googleMap = null; // original google map object
    this.setMapRef = this.setMapRef.bind(this);
  }

  showAllMarkers() {
    const bounds = new window.google.maps.LatLngBounds();
    this.map.props.children.forEach((child) => {
      if (child.type === PoiMarkerContainer) {
        const [lng, lat] = child.props.poi.point.coordinates;
        bounds.extend(new window.google.maps.LatLng(lat, lng));
      }
    })
    this.map.fitBounds(bounds);
  }

  centerOnMarker(poi) {
    const [lng, lat] = poi.point.coordinates;
    this.map.panTo({lng, lat});
    this.googleMap.setZoom(8);
  }

  setMapRef(map) {
    this.map = map;
    this.googleMap = map.context[MAP];
    window.google.maps.event.addListenerOnce(this.googleMap, 'idle', () => {
      this.showAllMarkers();
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedPoi !== null) {
      this.centerOnMarker(nextProps.selectedPoi);
    }
  }

  render() {
    const mapApiKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
    const {
      pois,
      animatePoi,
    } = this.props;

    return (
      <div className="col s6" style={{ padding: '0'}}>
        <PoiMap
          pois={pois}
          setMapRef={this.setMapRef}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${mapApiKey}&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100vh` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          animatePoi={animatePoi}
        />
      </div>
    )
  }

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PoiMapContainer);
