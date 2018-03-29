import React, { Component } from 'react';

import PoiMapContainer from '../containers/PoiMapContainer';
import PoiCardListContainer from '../containers/PoiCardListContainer';


class Poi extends Component {

    componentDidMount() {
      const { fetchPois } = this.props;
      this.intervalId = setInterval(() => fetchPois(), 15000);
      fetchPois();
    }

    componentWillUnmount() {
      clearInterval(this.intervalId);
    }

    render() {
      return (
        <div className="row">
          <PoiCardListContainer />
          <PoiMapContainer />
        </div>
      );
    }
}

export default Poi;
