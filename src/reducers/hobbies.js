import { SAVE_HOBBIES_LIST, SET_LOADING_HOBBIES, SAVE_SELECTED_HOBBY, ADD_SELECTED_HOBBY } from 'src/actions/hobbies';

const initialState = {
  hobbiesList: '',
  isLoaded: false,
  selectedHobbies: '',
  myHobbies:'',
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
    // case SAVE_SELECTED_HOBBY:
    //   return {
    //     ...state,
    //     selectedHobbies: {
    //       ...state.selectedHobbies,
    //       id: action.hobbyId,
    //       name: action.hobbyName,
    //     },
    //   };
    default:
      return state;
  }
};
