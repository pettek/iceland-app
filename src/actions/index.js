import {
  CONCERT_REQUEST_CREATED,
  CONCERT_REQUEST_FAILED,
  CONCERT_REQUEST_SUCCESSFUL,
  SPORT_REQUEST_CREATED,
  SPORT_REQUEST_FAILED,
  SPORT_REQUEST_SUCCESSFUL,
} from '../constants';

export const fetchConcertsFromApi = () => {
  return (dispatch) => {
    dispatch({
      type: CONCERT_REQUEST_CREATED,
    });

    fetch('http://apis.is/concerts').
      then(response => response.json()).
      then(results => {
        dispatch({
          type: CONCERT_REQUEST_SUCCESSFUL,
          payload: results.results,
        });
      }).
      catch(error => {
        dispatch({
          type: CONCERT_REQUEST_FAILED,
          payload: error.message,
        });
      });
  };
};

/**
 * If any one sees this code, please unsee it.
 * This solution is not flexible, ugly and working for now.
 * @returns {function(*)}
 */
export const fetchSportsFromApi = () => {
  return (dispatch) => {
    dispatch({
      type: SPORT_REQUEST_CREATED,
    });

    fetch('http://apis.is/sports').
      then(response => response.json()).
      then(results => {
        const payload = {};
        let endpoints = results.results[0].endpoints;
        Object.keys(endpoints).forEach((field) => {

          fetch(`http://apis.is${endpoints[field]}`).
            then(response => response.json()).
            then(results => {
              if(results.results[0].endpoints) {
                endpoints = results.results[0].endpoints;
                let prefix = field;
                Object.keys(endpoints).forEach((field) => {
                  payload[prefix] = {};

                  fetch(`http://apis.is${endpoints[field]}`).
                    then(response => response.json()).
                    then(results => {
                      payload[prefix][field] = results.results;
                      dispatch({
                        type: SPORT_REQUEST_SUCCESSFUL,
                        payload: payload,
                      });
                    })
                  }
                )
                } else {
                payload[field] = results.results;
                dispatch({
                  type: SPORT_REQUEST_SUCCESSFUL,
                  payload: payload,
                });
              }
            });
        });
      }).
      catch(error => {
        dispatch({
          type: SPORT_REQUEST_FAILED,
          payload: error.message,
        });
      });
  };
};