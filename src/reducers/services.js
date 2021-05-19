import { SAVE_SERVICES_LIST, SET_LOADING_SERVICES } from 'src/actions/services';

const initialState = {
  servicesList: '',
  isLoaded: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_SERVICES_LIST:
      return {
        ...state,
        servicesList: action.servicesList,
      };
    case SET_LOADING_SERVICES:
      return {
        ...state,
        isLoaded: action.value,
      };
    default:
      return state;
  }
};
