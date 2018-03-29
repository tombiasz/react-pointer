import React from 'react';


const PoiCard = ({ poi, onMouseEnter, onMouseLeave, onClick }) => (
  <div className="row"
    key={poi.id}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    onClick={onClick}
  >
    <div className="col s12">
      <div className="card-panel hoverable">
        <span className="card-title">{poi.name}</span>
        <p>I am a very simple card. I am good at containing small bits of information.
        I am convenient because I require little markup to use effectively.</p>
      </div>
    </div>
  </div>
)

export default PoiCard;
