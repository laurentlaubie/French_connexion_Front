/* eslint-disable max-len */
import {
  SAVE_USER_PROFILE,
  SAVE_USERS_CARDS,
  CHANGE_SIGN_IN_FIELD_VALUE,
  CHANGE_PROFILE_FORM_FIELD_VALUE,
  CHANGE_PASSWORD_PROFILE_FORM_FIELD_VALUE,
  CLOSE_MODIFY_CITY_MODAL,
  OPEN_MODIFY_CITY_MODAL,
  RENDER_NEW_LIST,
  SAVE_USER_ADDRESS,
} from 'src/actions/user';

import { SET_ADRESS } from 'src/actions/map';

const initialState = {
  isHelper: false,
  userInfos: [],
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  confirmedPassword: '',
  usersList: [],
  newPassword: '',
  confirmedNewPassword: '',
  isModifyCityModalOpen: false,
  address: '',
  userAddress: '',
  userCityCenter: '',
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
        },
      };
    case CHANGE_PASSWORD_PROFILE_FORM_FIELD_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case CLOSE_MODIFY_CITY_MODAL:
      return {
        ...state,
        isModifyCityModalOpen: false,
        address: '',
      };
    case OPEN_MODIFY_CITY_MODAL:
      return {
        ...state,
        isModifyCityModalOpen: true,
      };
    case SET_ADRESS:
      return {
        ...state,
        address: action.adress,
      };
    case SAVE_USER_ADDRESS:
      return {
        ...state,
        userAddress: [action.cityName, action.countryName, action.lat, action.lng],
      };
    default:
      return state;
  }
};
