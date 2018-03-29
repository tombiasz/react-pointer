import { connect } from 'react-redux';

import PoiCardList from '../components/PoiCardList';
import {
  animatePoiStart,
  animatePoiEnd,
  selectPoi,
} from '../actions/index';


const mapStateToProps = (state, ownProps) => ({
  pois: state.pois.pois,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onMouseEnter: (poi) => dispatch(animatePoiStart(poi)),
  onMouseLeave: () => dispatch(animatePoiEnd()),
  onClick: (poi) => dispatch(selectPoi(poi)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PoiCardList);