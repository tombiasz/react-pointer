import { connect } from 'react-redux';

import PoiCardList from '../components/PoiCardList';


const mapStateToProps = (state, ownProps) => ({
  pois: state.pois.pois,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PoiCardList);