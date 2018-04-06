import { GET_DRIVERS } from './actions';

const API = 'http://apis.is/rides/samferda-drivers/';

const getDrivers = () => dispatch => dispatch({
  type: GET_DRIVERS,
  payload: fetch(API).then(r => r.json()),
});

export default getDrivers;
