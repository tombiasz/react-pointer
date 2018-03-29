export const ANIMATE_POI_START = 'ANIMATE_POI_START';
export const ANIMATE_POI_END = 'ANIMATE_POI_END';
export const FETCH_POIS_START = 'FETCH_POIS_START';
export const FETCH_POIS_FINISH = 'FETCH_POIS_FINISH';
export const SELECT_POI = 'SELECT_POI';

export function fetchPoisStart() {
  return {
    type: FETCH_POIS_START
  };
};

export function fetchPoisFinish(pois) {
  return {
    type: FETCH_POIS_FINISH,
    pois
  };
};

export function animatePoiStart(poi) {
  return {
    type: ANIMATE_POI_START,
    poi
  }
}

export function animatePoiEnd() {
  return {
    type: ANIMATE_POI_END
  }
}

export function selectPoi(poi) {
  return {
    type: SELECT_POI,
    poi
  }
}