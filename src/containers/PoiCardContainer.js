import React, { Component} from 'react';

import PoiCard from '../components/PoiCard';


class PoiCardContainer extends Component {

    render() {
      return (
        <PoiCard poi={ this.props.poi }/>
      );
    }

}

export default PoiCardContainer;
