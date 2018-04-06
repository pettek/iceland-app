import { GET_BUSES } from './actions';

const API = 'https://app.straeto.is/pele/api/v1';

const getBuses = () => dispatch => dispatch({
  type: GET_BUSES,
  payload: fetch(`${API}/positions/filter/1,2,3,4,5,6,7,8,9`).then(r => r.json()),
});

export default getBuses;
