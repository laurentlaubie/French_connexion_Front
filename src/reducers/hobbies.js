import { SAVE_HOBBIES_LIST, SET_LOADING_HOBBIES } from 'src/actions/hobbies';

const initialState = {
  hobbiesList: '',
  isLoaded: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_HOBBIES_LIST:
      return {
        ...state,
        hobbiesList: action.hobbiesList,
      };
    case SET_LOADING_HOBBIES:
      return {
        ...state,
        isLoaded: action.value,
      };
    default:
      return state;
  }
};
