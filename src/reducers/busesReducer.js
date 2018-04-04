import { GET_BUSES_FULFILLED, GET_BUSES_REJECTED } from '../actions/actions';

const busesReducer = (state = [], action) => {
  switch (action.type) {

    case GET_BUSES_FULFILLED:
      return action.payload.positions;

    case GET_BUSES_REJECTED:
      return {...state, error: action.payload};

    default:
      return state;

  }
};

export default busesReducer;
