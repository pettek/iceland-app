import {
  CONCERT_REQUEST_CREATED,
  CONCERT_REQUEST_FAILED,
  CONCERT_REQUEST_SUCCESSFUL
} from '../constants';

export const fetchConcertsFromApi = () => {
  return (dispatch) => {
    dispatch({
      type: CONCERT_REQUEST_CREATED
    });

    fetch('http://apis.is/concerts')
    .then(response => response.json())
    .then(results => {
      dispatch({
        type: CONCERT_REQUEST_SUCCESSFUL,
        payload: results.results
      })
    })
    .catch(error => {
      dispatch({
        type: CONCERT_REQUEST_FAILED,
        payload: error.message
      })
    })
  };
};
