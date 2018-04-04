import { combineReducers } from 'redux';
import concertReducer      from './concert-reducer';
import sportReducer        from './sport-reducer';
import flightsReducer      from './flights-reducer';
import busesReducer        from './buses-reducer';
import carpoolingReducer   from './carpooling-reducer';

export default combineReducers({
  concerts: concertReducer,
  sports: sportReducer,
  flights: flightsReducer,
  buses: busesReducer,
  drivers: carpoolingReducer
});
