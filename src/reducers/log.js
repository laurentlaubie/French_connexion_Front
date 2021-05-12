import {
  CLOSE_LOG_IN, OPEN_LOG_IN, CLOSE_SIGN_IN, OPEN_SIGN_IN, CHANGE_USER_FIELD_VALUE, SAVE_CONNECTED_USER_DATA
} from 'src/actions/log';

const initialState = {
  isConnected: false,
  isLogInOpen: false,
  isSignInOpen: false,
  email: '',
  password: '',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_CONNECTED_USER_DATA:
      return {
        ...state,
        token: action.userData.token,
        isConnected: true,
        isLogInOpen: false,
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
    case CHANGE_USER_FIELD_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
};
