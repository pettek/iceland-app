import { GET_DRIVERS } from './actions';

const API = 'http://apis.is/rides/samferda-drivers/';

export const getDrivers = () => {
  return (dispatch) => {
    return dispatch({
        type: GET_DRIVERS,
        payload: fetch(API).then(r => r.json()),
      },
    );
  };
};