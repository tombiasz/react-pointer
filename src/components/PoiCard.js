import React from 'react';


const PoiCard = props => (
  <div className="row" key={ props.poi.id }>
    <div className="col s12">
      <div className="card-panel hoverable">
        <span className="card-title">{ props.poi.name }</span>
        <p>I am a very simple card. I am good at containing small bits of information.
        I am convenient because I require little markup to use effectively.</p>
      </div>
    </div>
  </div>
)

export default PoiCard;
