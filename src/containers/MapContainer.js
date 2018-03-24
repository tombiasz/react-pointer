import React, { Component} from 'react';

import { Marker } from 'react-google-maps';

import Map from '../components/Map';


class MapContainer extends Component {


    showAllMarkers(map) {
      const bounds = new window.google.maps.LatLngBounds();
      map.props.children.forEach((child) => {
          if (child.type === Marker) {
              bounds.extend(new window.google.maps.LatLng(child.props.position.lat, child.props.position.lng));
          }
      })
      map.fitBounds(bounds);
    }
    
    centerOnMarker(map, poi) {
      const [lng, lat] = poi.point.coordinates;
      map.panTo({lng, lat});
    }

    centerMap(map) {
      if (map === null) {
        return;
      }

      if (this.props.centerOnPoi !== null) {
        this.centerOnMarker(map, this.props.centerOnPoi);
      } else {
        this.showAllMarkers(map);
      }
    }

    render() {
        const mapApiKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
        return (
            <Map
                pois={this.props.pois}
                centerMap={(map) => this.centerMap(map)}
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${mapApiKey}&v=3.exp&libraries=geometry,drawing,places`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100vh` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                animatePoiId={this.props.animatePoiId}
            />
        )
    }

}

export default MapContainer;