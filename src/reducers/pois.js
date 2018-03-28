import {
  FETCH_POIS_START,
  FETCH_POIS_FINISH,
} from '../actions/index';


const defaultState = {
  pois: [],
  fetching: false,
};

const pois = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_POIS_START:
      return { ...state, fetching: true }
    case FETCH_POIS_FINISH:
      return { ...state, pois: action.pois, fetching: false }
    default:
      return state;
  }
}

export default pois;
