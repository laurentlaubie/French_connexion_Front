import { SAVE_HOBBIES_LIST, SET_LOADING_HOBBIES, TOGGLE_CHECKBOX_HOBBIES } from 'src/actions/hobbies';

const initialState = {
  hobbiesList: '',
  isLoaded: false,
  selectedHobbies: '',
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
    case TOGGLE_CHECKBOX_HOBBIES:
      return {
        ...state,
        selectedHobbies: {
          ...state.selectedHobbies,
          [action.value]: action.checked,
        },
      };
    default:
      return state;
  }
};
