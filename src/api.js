import axios from 'axios';

const ROOT = process.env.REACT_APP_POINTER_API_URL;

export function getAllPois() {
  const url = `${ROOT}/pois/`;
  return axios.get(url);
}