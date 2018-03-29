import {
  CONCERT_REQUEST_FAILED,
  CONCERT_REQUEST_SUCCESSFUL,
} from '../constants';

const concertReducer = (state = [], action) => {
  switch (action.type) {

    case CONCERT_REQUEST_SUCCESSFUL:
      return state.concat(action.payload);

    case CONCERT_REQUEST_FAILED:
      return {...state, error: action.payload};

    default:
      return state;

  }
};

export default concertReducer;
