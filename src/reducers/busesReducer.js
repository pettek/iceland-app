import {
  BUSES_REQUEST_FAILED,
  BUSES_REQUEST_SUCCESSFUL,
} from '../actions/actions';

const busesReducer = (state = [], action) => {
  switch (action.type) {

    case BUSES_REQUEST_SUCCESSFUL:
      return action.payload;

    case BUSES_REQUEST_FAILED:
      return {...state, error: action.payload};

    default:
      return state;

  }
};

export default busesReducer;
