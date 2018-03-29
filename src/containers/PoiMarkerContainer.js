import { connect } from 'react-redux';

import PoiMarker from '../components/PoiMarker';


const mapStateToProps = (state, ownProps) => ({
  poi: ownProps.poi,
  animatePoi: state.pois.animatePoi,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PoiMarker);
