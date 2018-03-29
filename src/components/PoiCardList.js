import React from 'react';
import PoiCardContainer from '../containers/PoiCardContainer';


const PoiCardList = ({ pois, onMouseEnter, onMouseLeave, onClick}) => (
  <div className="col s6">
    {pois.map((poi) => (
      <PoiCardContainer
        key={poi.id}
        poi={poi}
        onMouseEnter={() => onMouseEnter(poi)}
        onMouseLeave={onMouseLeave}
        onClick={() => onClick(poi)}
      />
    ))}
  </div>
);

export default PoiCardList;
