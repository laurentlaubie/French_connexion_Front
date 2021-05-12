import { combineReducers } from 'redux';

import userReducer from './user';
import logReducer from './log';


const rootReducer = combineReducers({
  user: userReducer,
  log: logReducer,
});

export default rootReducer;
