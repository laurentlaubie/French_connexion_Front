import { combineReducers } from 'redux';

import userReducer from './user';
import logReducer from './log';
import mapReducer from './map';

const rootReducer = combineReducers({
  user: userReducer,
  log: logReducer,
  map: mapReducer,

});

export default rootReducer;
