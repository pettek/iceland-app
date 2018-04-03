import {
  FLIGHTS_REQUEST_CREATED,
  FLIGHTS_REQUEST_FAILED,
  ARRIVALS_REQUEST_SUCCESSFUL,
  DEPARTURES_REQUEST_SUCCESSFUL,
} from '../constants';

export const fetchFlightsFromApi = () => {
  return (dispatch) => {
    dispatch({
      type: FLIGHTS_REQUEST_CREATED,
    });

    fetch('http://apis.is/flight?language=en&type=arrivals').
      then(response => response.json()).
      then(results => {
        dispatch({
          type: ARRIVALS_REQUEST_SUCCESSFUL,
          payload: results.results,
        });
      }).
      catch(error => {
        dispatch({
          type: FLIGHTS_REQUEST_FAILED,
          payload: error.message,
        });
      });

    fetch('http://apis.is/flight?language=en&type=departures').
      then(response => response.json()).
      then(results => {
        dispatch({
          type: DEPARTURES_REQUEST_SUCCESSFUL,
          payload: results.results,
        });
      }).
      catch(error => {
        dispatch({
          type: FLIGHTS_REQUEST_FAILED,
          payload: error.message,
        });
      });
  };
};