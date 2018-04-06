import {
  GET_ARRIVALS_FULFILLED,
  GET_ARRIVALS_REJECTED,
  GET_DEPARTURES_FULFILLED,
  GET_DEPARTURES_REJECTED,
} from '../actions/actions';

const flightsReducer = (state = {
  arrivals: [],
  departures: [],
}, action) => {
  switch (action.type) {
    case GET_ARRIVALS_FULFILLED:
      return {
        ...state,
        arrivals: state.arrivals.concat(action.payload.results),
      };

    case GET_DEPARTURES_FULFILLED:
      return {
        ...state,
        departures: state.departures.concat(action.payload.results),
      };

    case GET_ARRIVALS_REJECTED:
    case GET_DEPARTURES_REJECTED:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default flightsReducer;
