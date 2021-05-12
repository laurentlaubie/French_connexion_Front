import { SET_SELECTED, SET_NEW_MARKER, SET_ADRESS, SET_CENTER } from 'src/actions';

const initialState = {
  // required for navbar
  isConnected: false,
  isSignInOpen: false,
  center: {
    lat: 48.866667,
    lng: 2.333333,
  },
  markers: [{
    lat: 47.866667,
    lng: 2.333333,
  },
  {
    lat: 46.866667,
    lng: 6.433333,
  },
  {
    lat: 45.866667,
    lng: 8.533333,
  },
  ],
  markerSelected: null,
  localisation: 'Rouen',
  adress: 'Paris, France',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_SELECTED:
      return {
        ...state,
        markerSelected: action.marker,
      };
    case SET_NEW_MARKER:
      return {
        ...state,
        markers: [...state.markers, action.marker],
      };
    case SET_ADRESS:
      return {
        ...state,
        adress: action.adress,
      };
    case SET_CENTER:
      return {
        ...state,
        center: action.center,
      };
    default:
      return state;
  }
};

import { combineReducers } from 'redux';

import userReducer from './user';
import logReducer from './log';


const rootReducer = combineReducers({
  user: userReducer,
  log: logReducer,
});

export default rootReducer;

