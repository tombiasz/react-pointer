import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';


const Map = props => (
    <GoogleMap
        ref={props.centerMap}
        defaultZoom={8}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
        {props.pois.map((poi) => {
            return <Marker
                key={poi.id}
                position={{
                    lat: poi.point.coordinates[1],
                    lng: poi.point.coordinates[0]
                }}
                animation={props.animatePoiId === poi.id ? window.google.maps.Animation.BOUNCE : null}
            />
        })}
    </GoogleMap>
)

export default withScriptjs(withGoogleMap(Map));