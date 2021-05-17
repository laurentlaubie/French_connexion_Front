/* eslint-disable max-len */
import { SAVE_USER_PROFILE, SAVE_USERS_CARDS, CHANGE_SIGN_IN_FIELD_VALUE, CHANGE_PROFILE_FORM_FIELD_VALUE, RENDER_NEW_LIST } from 'src/actions/user';
import { CHANGE_USER_FIELD_VALUE} from 'src/actions/log';


const initialState = {
  isHelper: false,
  userInfos: [],
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  confirmedPassword: '',
  usersList: [],
  isLoading: false,
  newUserList: null,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_USER_PROFILE:
      return {
        ...state,
        userInfos: action.userInfos,
      };
    case CHANGE_SIGN_IN_FIELD_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SAVE_USERS_CARDS:
      return {
        ...state,
        usersList: action.usersList,
      };

    case RENDER_NEW_LIST:
      return {
        ...state,
        newUserList: action.result,
      };
    case CHANGE_PROFILE_FORM_FIELD_VALUE:
      return {
        ...state,
        userInfos: {
          ...state.userInfos,
          [action.name]: action.value,
      };
    default:
      return state;
    
  }
};
