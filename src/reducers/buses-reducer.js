import {
  BUSES_REQUEST_FAILED,
  BUSES_REQUEST_SUCCESSFUL,
} from '../constants';

const busesReducer = (state = [], action) => {
  switch (action.type) {

    case BUSES_REQUEST_SUCCESSFUL:
      return state.concat(action.payload);

    case BUSES_REQUEST_FAILED:
      return {...state, error: action.payload};

    default:
      return state;

  }
};

export default busesReducer;
