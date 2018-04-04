import {
  CARPOOLING_REQUEST_FAILED,
  CARPOOLING_REQUEST_SUCCESSFUL,
} from '../constants';

const carpoolingReducer = (state = [], action) => {
  switch (action.type) {

    case CARPOOLING_REQUEST_SUCCESSFUL:
      return state.concat(action.payload);

    case CARPOOLING_REQUEST_FAILED:
      return {...state, error: action.payload};

    default:
      return state;

  }
};

export default carpoolingReducer;
