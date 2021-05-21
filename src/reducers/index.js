import { combineReducers } from 'redux';

import userReducer from './user';
import logReducer from './log';
import mapReducer from './map';
import hobbiesReducer from './hobbies';
import servicesReducer from './services';

const rootReducer = combineReducers({
  user: userReducer,
  log: logReducer,
  map: mapReducer,
  hobbies: hobbiesReducer,
  services: servicesReducer,

});

export default rootReducer;
