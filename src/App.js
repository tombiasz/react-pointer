import { connect } from 'react-redux'
import React, { Component } from 'react';

import { getAllPois } from './api';
import {
  fetchPoisStart,
  fetchPoisFinish,
} from './actions/pois';
import NavBar from './components/NavBar';
import PoiMapContainer from './containers/PoiMapContainer';
import PoiCardListContainer from './containers/PoiCardListContainer';
import './App.css';


const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPois: () => {
    dispatch(fetchPoisStart());
    getAllPois().then((result) => dispatch(fetchPoisFinish(result.data)));
  }
})

class App extends Component {

    constructor(props) {
      super(props);
      this.state = {
          intervalId: null,
      };
    }

    componentDidMount() {
      const { fetchPois } = this.props;
      const intervalId = setInterval(() => fetchPois(), 15000);
      this.setState({intervalId})
      fetchPois();
    }

    componentWillUnmount() {
      clearInterval(this.state.intervalId);
    }

    render() {
      return (
        <div>
          <NavBar />
          <div className="row">
            <PoiCardListContainer />
            <PoiMapContainer />
          </div>
        </div>
      );
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
