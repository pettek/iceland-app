import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer                      from '../reducers';
import thunkMiddleware                  from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = applyMiddleware(thunkMiddleware);
const store = createStore(rootReducer, composeEnhancers(middleware));

export default store;
