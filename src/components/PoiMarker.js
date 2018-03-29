import React from 'react';

import { Marker } from 'react-google-maps';


const PoiMarker = ({ poi, animatePoi }) => {
  const [lng, lat] = poi.point.coordinates;
  let animation = null;
  if (animatePoi && animatePoi.id === poi.id) {
    animation = window.google.maps.Animation.BOUNCE;
  }
  return (
    <Marker
      key={poi.id}
      position={{ lat, lng }}
      animation={animation}
    />
  )
};

export default PoiMarker;
