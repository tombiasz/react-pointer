import React, { Component} from 'react';

import axios from 'axios';

import Map from '../components/Map';


class MapContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pois: []
        };
    }

    componentDidMount() {
        const pointerApiURL = process.env.REACT_APP_POINTER_API_URL;
        const poisURL = `${pointerApiURL}/pois/`;
        axios
            .get(poisURL)
            .then((result) => this.setState({pois: result.data}))
            .catch(console.log)
    }

    render() {
        const mapApiKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
        return (
            <Map
                pois={this.state.pois}
                isMarkerShown
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${mapApiKey}&v=3.exp&libraries=geometry,drawing,places`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100vh` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        )
    }

}

export default MapContainer;