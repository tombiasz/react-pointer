import React from 'react';
import PoiCardContainer from '../containers/PoiCardContainer';


const PoiCardList = ({ pois }) => (
  <div className="col s6">
    {pois.map((poi) => (
      <PoiCardContainer
        key={poi.id}
        poi={poi}
      />
    ))}
  </div>
);

export default PoiCardList;
