import { combineReducers } from 'redux';
import concerts            from './concertsReducer';
import sports              from './sportsReducer';
import flights             from './flightsReducer';
import buses               from './busesReducer';
import drivers             from './carpoolingReducer';

export default combineReducers({
  concerts,
  sports,
  flights,
  buses,
  drivers
});
