import { GET_ARRIVALS, GET_DEPARTURES } from './actions';

const API = 'http://apis.is/flight?language=en';

export const getArrivals = () => {
  return (dispatch) => {
    return dispatch({
        type: GET_ARRIVALS,
        payload: fetch(`${API}&type=arrivals`).then(r => r.json()),
      },
    );
  };
};

export const getDepartures = () => {
  return (dispatch) => {
    return dispatch({
        type: GET_DEPARTURES,
        payload: fetch(`${API}&type=departures`).then(r => r.json()),
      },
    );
  };
};