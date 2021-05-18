import { SAVE_SERVICES_LIST } from 'src/actions/services';

const initialState = {
  servicesList: '',
  isLoading: true,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_SERVICES_LIST:
      return {
        ...state,
        servicesList: action.servicesList,
      };
    default:
      return state;
  }
};
