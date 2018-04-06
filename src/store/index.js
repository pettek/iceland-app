import { applyMiddleware, compose, createStore } from 'redux';
import thunk                                     from 'redux-thunk';
import promise                                   from 'redux-promise-middleware';
import rootReducer                               from '../reducers';

/* eslint-disable no-underscore-dangle */

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = applyMiddleware(promise(), thunk);

export default createStore(rootReducer, composeEnhancers(middleware));
