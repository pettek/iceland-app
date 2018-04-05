import { LOGIN_USER_FULFILLED, LOGIN_USER_REJECTED } from '../actions/actions';

const loginFormReducer = (state = [], action) => {
  switch (action.type) {

    case LOGIN_USER_FULFILLED:
      return action.payload;

    case LOGIN_USER_REJECTED:
      return {...state, error: action.payload};

    default:
      return state;
  }
};

export default loginFormReducer;