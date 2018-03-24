import React, { Component} from 'react';

import PoiCard from '../components/PoiCard';


class PoiCardContainer extends Component {

    render() {
      return (
        <PoiCard
          poi={this.props.poi}
          onMouseEnter={this.props.onMouseEnter}
          onMouseLeave={this.props.onMouseLeave}
          onClick={this.props.onClick}
        />
      );
    }

}

export default PoiCardContainer;
