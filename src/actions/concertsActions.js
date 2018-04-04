import { GET_CONCERTS } from './actions';

const API = 'http://apis.is/Concerts/';

export const getConcerts = () => {
  return (dispatch) => {
    return dispatch({
        type: GET_CONCERTS,
        payload: fetch(API).then(r => r.json()),
      },
    );
  };
};