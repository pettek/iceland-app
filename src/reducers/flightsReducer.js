import {
  ARRIVALS_REQUEST_SUCCESSFUL,
  DEPARTURES_REQUEST_SUCCESSFUL,
  FLIGHTS_REQUEST_FAILED
} from '../actions/actions';

const flightsReducer = (state = {arrivals: [], departures: []}, action) => {
  switch (action.type) {

    case ARRIVALS_REQUEST_SUCCESSFUL:
      return {
        ...state,
        arrivals: state.arrivals.concat(action.payload)
      };

    case DEPARTURES_REQUEST_SUCCESSFUL:
      return {
        ...state,
        departures: state.departures.concat(action.payload)
      };

    case FLIGHTS_REQUEST_FAILED:
      return {...state, error: action.payload};

    default:
      return state;

  }
};

export default flightsReducer;
