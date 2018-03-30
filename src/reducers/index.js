import { combineReducers } from 'redux';
import concertReducer      from './concert-reducer';
import sportReducer        from './sport-reducer';

export default combineReducers({
  concerts: concertReducer,
  sports: sportReducer,
});
