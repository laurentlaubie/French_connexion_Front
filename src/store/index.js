import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from 'src/reducers';
import apiMiddleware from 'src/middlewares/apiBack';

export default createStore(reducer, composeWithDevTools(applyMiddleware(apiMiddleware)));
