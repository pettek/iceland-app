import { combineReducers } from 'redux';
import concerts            from './concertsReducer';
import sports              from './sportsReducer';
import flights             from './flightsReducer';
import buses               from './busesReducer';
import drivers             from './carpoolingReducer';
import user                from './loginFormReducer';

export default combineReducers({
  concerts,
  sports,
  flights,
  buses,
  drivers,
  user,
});
