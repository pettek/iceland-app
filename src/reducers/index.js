import concertReducer      from './concert-reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  concerts: concertReducer,
});
