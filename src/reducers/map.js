import {
  SET_SELECTED, SET_NEW_MARKER, SET_ADRESS, SET_CENTER, SAVE_USER_ADDRESS, SAVE_USER_LIST,
} from 'src/actions/map';

const initialState = {
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
  adress: 'Rome, Italie',
  userAddress: [],
  usersList: [],
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
    case SAVE_USER_ADDRESS:
      return {
        ...state,
        userAddress: [action.address[0], action.address[1]],
      };
    case SAVE_USER_LIST:
      return {
        ...state,
        usersList: action.usersList,
      };
    default:
      return state;
  }
};
