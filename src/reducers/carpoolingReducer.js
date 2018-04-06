import { GET_DRIVERS_FULFILLED, GET_DRIVERS_REJECTED } from '../actions/actions';

const carpoolingReducer = (state = [], action) => {
  switch (action.type) {
    case GET_DRIVERS_FULFILLED:
      return state.concat(action.payload.results);

    case GET_DRIVERS_REJECTED:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default carpoolingReducer;
