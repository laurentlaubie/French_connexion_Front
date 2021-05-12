import { createStore, applyMiddleware, compose } from 'redux';

import apiMiddleware from 'src/middlewares/apiBack';
import reducer from 'src/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  // on branche notre middleware sur le store
  applyMiddleware(apiMiddleware),
);

const store = createStore(reducer, enhancers);

export default store;
