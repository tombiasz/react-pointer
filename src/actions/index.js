export const FETCH_POIS_START = 'FETCH_POIS_START';
export const FETCH_POIS_FINISH = 'FETCH_POIS_FINISH';

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
