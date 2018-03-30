import { connect } from 'react-redux'

import { getAllPois } from '../api';
import {
  fetchPoisStart,
  fetchPoisFinish,
} from '../actions/pois';
import Poi from '../components/Poi';


const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPois: () => {
    dispatch(fetchPoisStart());
    getAllPois().then((result) => dispatch(fetchPoisFinish(result.data)));
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Poi);
