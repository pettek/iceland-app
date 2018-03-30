import {
  SPORT_REQUEST_FAILED,
  SPORT_REQUEST_SUCCESSFUL,
} from '../constants';

const sportReducer = (state = {}, action) => {
  switch (action.type) {

    case SPORT_REQUEST_SUCCESSFUL:
      return {...state, ...action.payload};

    case SPORT_REQUEST_FAILED:
      return {...state, error: action.payload};

    default:
      return state;

  }
};

export default sportReducer;
