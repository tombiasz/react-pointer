import React, { Component} from 'react';

import { Marker } from 'react-google-maps';

import Map from '../components/Map';


class MapContainer extends Component {

    zoomToMarkers(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.props.children.forEach((child) => {
            if (child.type === Marker) {
                bounds.extend(new window.google.maps.LatLng(child.props.position.lat, child.props.position.lng));
            }
        })
        map.fitBounds(bounds);
    }

    render() {
        const mapApiKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
        return (
            <Map
                markers={this.props.pois}
                setZoom={this.zoomToMarkers}
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${mapApiKey}&v=3.exp&libraries=geometry,drawing,places`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100vh` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        )
    }

}

export default MapContainer;