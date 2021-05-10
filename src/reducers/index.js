import { CLOSE_SIGN_IN, SET_SELECTED } from 'src/actions';


const initialState = {
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
  markerSelected: true,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CLOSE_SIGN_IN:
      return {
        ...state,
        isSignInOpen: false,
      };
    case SET_SELECTED:
      return {
        ...state,
        markerSelected: action.marker,
      };
    default:
      return state;
  }
};
