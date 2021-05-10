import { SET_SELECTED, SET_NEW_MARKER } from 'src/actions';

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
    default:
      return state;
  }
};
