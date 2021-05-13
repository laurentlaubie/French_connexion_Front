/* eslint-disable max-len */
import { SAVE_USER_PROFILE, SAVE_USERS_CARDS, CHANGE_SIGN_IN_FIELD_VALUE } from 'src/actions/user';

const initialState = {
  isHelper: false,
  userInfos: [],
  firstname:'',
  lastname:'',
  email:'',
  password:'',
  confirmedPassword:'',
  usersList: [],

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
    default:
      return state;
  }
};
