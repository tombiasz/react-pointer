import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';


const Map = props => (
    <GoogleMap
        ref={props.setZoom}
        defaultZoom={8}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
        {props.markers.map((poi) => {
            return <Marker
                key={poi.id}
                position={{
                    lat: poi.point.coordinates[1],
                    lng: poi.point.coordinates[0]
                }
            } />
        })}
    </GoogleMap>
)

export default withScriptjs(withGoogleMap(Map));