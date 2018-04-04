import {
  BUSES_REQUEST_CREATED,
  BUSES_REQUEST_FAILED,
  BUSES_REQUEST_SUCCESSFUL,
} from './actions';

export const fetchBusesFromApi = () => {
  return (dispatch) => {
    dispatch({
      type: BUSES_REQUEST_CREATED,
    });

    fetch('https://app.straeto.is/pele/api/v1/positions/filter/1,2,3,4').
      then(response => response.json()).
      then(results => {
        dispatch({
          type: BUSES_REQUEST_SUCCESSFUL,
          payload: results.positions,
        });
      }).
      catch(error => {
        dispatch({
          type: BUSES_REQUEST_FAILED,
          payload: error.message,
        });
      });
  };
};