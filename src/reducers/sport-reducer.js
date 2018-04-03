import {
  SPORT_REQUEST_FAILED,
  SPORT_REQUEST_SUCCESSFUL, SPORT_REQUEST_SUCCESSFUL_ENDPOINT,
} from '../constants';

const sportReducer = (state = {}, action) => {
  switch (action.type) {

    case SPORT_REQUEST_SUCCESSFUL_ENDPOINT:
      return {...state, [action.endpoint]: {...state[action.endpoint], label: action.label}};

    case SPORT_REQUEST_SUCCESSFUL:
      return {...state, [action.endpoint]: {...state[action.endpoint], payload: action.payload}};

    case SPORT_REQUEST_FAILED:
      return {...state, error: action.payload};

    default:
      return state;

  }
};

export default sportReducer;
