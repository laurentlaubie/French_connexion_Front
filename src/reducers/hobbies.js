import { SAVE_HOBBIES_LIST } from 'src/actions/hobbies';

const initialState = {
  hobbiesList: '',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_HOBBIES_LIST:
      return {
        ...state,
        hobbiesList: action.hobbiesList,
      };
    default:
      return state;
  }
};
