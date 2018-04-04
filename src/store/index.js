import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer                               from '../reducers';
import thunk                                     from 'redux-thunk';
import promise                                   from 'redux-promise-middleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = applyMiddleware(promise(), thunk);

export default createStore(rootReducer, composeEnhancers(middleware));
