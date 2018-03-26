import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';


const PoiMap = props => (
    <GoogleMap
        ref={props.setMapRef}
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
                animation={(props.animatePoi && props.animatePoi.id === poi.id) ? window.google.maps.Animation.BOUNCE : null}
            />
        })}
    </GoogleMap>
)

export default withScriptjs(withGoogleMap(PoiMap));