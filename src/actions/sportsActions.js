import {
  SPORT_REQUEST_CREATED,
  SPORT_REQUEST_FAILED,
  SPORT_REQUEST_SUCCESSFUL,
  SPORT_REQUEST_SUCCESSFUL_ENDPOINT,
} from './actions';

const fetchSportsFromApi = url => (dispatch) => {
  dispatch({
    type: SPORT_REQUEST_CREATED,
  });

  fetch(`http://apis.is${url}`)
    .then(response => response.json())
    .then((results) => {
      if (results.results[0].endpoints) {
        const { endpoints } = results.results[0];
        Object.keys(endpoints).forEach(label =>
          dispatch({
            type: SPORT_REQUEST_SUCCESSFUL_ENDPOINT,
            label,
            endpoint: endpoints[label],
            url,
          }));
      } else {
        dispatch({
          type: SPORT_REQUEST_SUCCESSFUL,
          payload: results.results,
          endpoint: url,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: SPORT_REQUEST_FAILED,
        payload: error.message,
      });
    });
};

export default fetchSportsFromApi;
