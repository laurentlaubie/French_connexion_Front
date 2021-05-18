import { SAVE_HOBBIES_LIST } from 'src/actions/hobbies';
import { SET_LOADING } from 'src/actions/loading';

const initialState = {
  hobbiesList: '',
  isLoading: true,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_HOBBIES_LIST:
      return {
        ...state,
        hobbiesList: action.hobbiesList,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.value,
      };
    default:
      return state;
  }
};
