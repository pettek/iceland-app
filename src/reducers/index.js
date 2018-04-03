import { combineReducers } from 'redux';
import concertReducer      from './concert-reducer';
import sportReducer        from './sport-reducer';
import flightsReducer      from './flights-reducer';

export default combineReducers({
  concerts: concertReducer,
  sports: sportReducer,
  flights: flightsReducer,
});
