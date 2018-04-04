import {
  CARPOOLING_REQUEST_CREATED,
  CARPOOLING_REQUEST_FAILED,
  CARPOOLING_REQUEST_SUCCESSFUL,
} from './actions';

export const fetchDriversFromApi = () => {
  return (dispatch) => {
    dispatch({
      type: CARPOOLING_REQUEST_CREATED,
    });

    fetch('http://apis.is/rides/samferda-drivers/').
      then(response => response.json()).
      then(results => {
        dispatch({
          type: CARPOOLING_REQUEST_SUCCESSFUL,
          payload: results.results,
        });
      }).
      catch(error => {
        dispatch({
          type: CARPOOLING_REQUEST_FAILED,
          payload: error.message,
        });
      });
  };
};