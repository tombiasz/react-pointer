import {
  ANIMATE_POI_START,
  ANIMATE_POI_END,
  FETCH_POIS_START,
  FETCH_POIS_FINISH,
  SELECT_POI,
} from '../actions/pois';


const defaultState = {
  pois: [],
  fetching: false,
  animatePoi: null,
  selectedPoi: null,
};

const pois = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_POIS_START:
      return { ...state, fetching: true }
    case FETCH_POIS_FINISH:
      return { ...state, pois: action.pois, fetching: false }
    case ANIMATE_POI_START:
      return { ...state, animatePoi: action.poi }
    case ANIMATE_POI_END:
      return { ...state, animatePoi: null }
    case SELECT_POI:
      return { ...state, selectedPoi: action.poi }
    default:
      return state;
  }
}

export default pois;
