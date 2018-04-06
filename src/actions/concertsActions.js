import { GET_CONCERTS } from './actions';

const API = 'http://apis.is/Concerts/';

const getConcerts = () => dispatch => dispatch({
  type: GET_CONCERTS,
  payload: fetch(API).then(r => r.json()),
});

export default getConcerts;
