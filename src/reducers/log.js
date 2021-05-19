import {
  CLOSE_LOG_IN, OPEN_LOG_IN,
  CLOSE_SIGN_IN, OPEN_SIGN_IN,
  CHANGE_LOG_IN_FIELD_VALUE,
  SAVE_CONNECTED_USER_DATA,
  OPEN_LOG_OUT, CLOSE_LOG_OUT, LOG_OUT,
  SET_IS_CONNECTED,
  SAVE_TOKEN_IN_STATE,
  CHANGE_PASSWORD_PROFILE_FORM_FIELD_VALUE,
  CHANGE_PROFILE_FORM_FIELD_VALUE,
  RESET_PASSWORD,
} from 'src/actions/log';

import {
  ADD_SELECTED_HOBBY, SAVE_SELECTED_HOBBY,
} from 'src/actions/hobbies';

const initialState = {
  isConnected: false,
  isLogInOpen: false,
  isSignInOpen: false,
  isLogOutOpen: false,
  email: '',
  password: '',
  connectedUserData: '',
  isLoading: true,
  selectedHobby: '',
  newPassword: '',
  confirmedNewPassword: '',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_TOKEN_IN_STATE:
      return {
        ...state,
        token: action.userToken,
      };
    case SAVE_CONNECTED_USER_DATA:
      return {
        ...state,
        connectedUserData: action.decodedToken,
        isConnected: true,
        isLogInOpen: false,
        email: '',
        password: '',
      };
    case CLOSE_LOG_IN:
      return {
        ...state,
        isLogInOpen: false,
      };
    case OPEN_LOG_IN:
      return {
        ...state,
        isLogInOpen: true,
        isSignInOpen: false,
      };
    case CLOSE_SIGN_IN:
      return {
        ...state,
        isSignInOpen: false,
      };
    case OPEN_SIGN_IN:
      return {
        ...state,
        isSignInOpen: true,
        isLogInOpen: false,
      };
    case CHANGE_LOG_IN_FIELD_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case OPEN_LOG_OUT:
      return {
        ...state,
        isLogOutOpen: true,
      };
    case CLOSE_LOG_OUT:
      return {
        ...state,
        isLogOutOpen: false,
      };
    case LOG_OUT:
      return {
        ...state,
        isConnected: false,
        isLogOutOpen: false,
        connectedUserData: '',
      };
    case SET_IS_CONNECTED:
      return {
        ...state,
        isConnected: action.value,
        isLoading: false,
      };
    case SAVE_SELECTED_HOBBY:
      return {
        ...state,
        selectedHobby: {
          ...state.selectedHobby,
          id: action.hobbyId,
          name: action.hobbyName,
        },
      };
    case CHANGE_PASSWORD_PROFILE_FORM_FIELD_VALUE:
      return {
        ...state,
        connectedUserData: {
          ...state.connectedUserData,
          [action.name]: action.value,
        },
      };
    case CHANGE_PROFILE_FORM_FIELD_VALUE:
      return {
        ...state,
        connectedUserData: {
          ...state.connectedUserData,
          [action.name]: action.value,
        },
      };
    case ADD_SELECTED_HOBBY:
      return {
        ...state,
        connectedUserData: {
          ...state.connectedUserData,
          hobbies: [...state.connectedUserData.hobbies, action.selectedHobby],
        },
      };
    case RESET_PASSWORD:
      return {
        ...state,
        connectedUserData: {
          ...state.connectedUserData,
          newPassword: '',
          confirmedNewPassword: '',
        },
      };
    default:
      return state;
  }
};
