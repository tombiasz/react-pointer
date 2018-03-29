import React from 'react';

import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';

import PoiMarkerContainer from '../containers/PoiMarkerContainer';


const PoiMap = ({ pois, setMapRef }) => (
  <GoogleMap
    ref={setMapRef}
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {pois.map((poi) => (
      <PoiMarkerContainer
        key={poi.id}
        poi={poi}
      />
    ))}
  </GoogleMap>
);

export default withScriptjs(withGoogleMap(PoiMap));
