import { connect } from 'react-redux';

import {
  animatePoiStart,
  animatePoiEnd,
  selectPoi,
} from '../actions/pois';
import PoiCard from '../components/PoiCard';


const mapStateToProps = (state, ownProps) => ({
  poi: ownProps.poi,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onMouseEnter: () => dispatch(animatePoiStart(ownProps.poi)),
  onMouseLeave: () => dispatch(animatePoiEnd()),
  onClick: () => dispatch(selectPoi(ownProps.poi)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PoiCard);
