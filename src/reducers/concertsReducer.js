import {
  GET_CONCERTS_REJECTED,
  GET_CONCERTS_FULFILLED,
} from '../actions/actions';

const concertReducer = (state = [], action) => {
  switch (action.type) {

    case GET_CONCERTS_FULFILLED:
      return state.concat(action.payload.results);

    case GET_CONCERTS_REJECTED:
      return {...state, error: action.payload};

    default:
      return state;

  }
};

export default concertReducer;
