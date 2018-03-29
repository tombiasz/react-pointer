import React from 'react';

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';


const PoiMap = ({ pois, animatePoi, setMapRef }) => (
  <GoogleMap
    ref={setMapRef}
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {pois.map((poi) => {
      const [lng, lat] = poi.point.coordinates;
      return <Marker
        key={poi.id}
        position={{ lat, lng }}
        animation={(animatePoi && animatePoi.id === poi.id) ? window.google.maps.Animation.BOUNCE : null}
      />
    })}
  </GoogleMap>
);

export default withScriptjs(withGoogleMap(PoiMap));
