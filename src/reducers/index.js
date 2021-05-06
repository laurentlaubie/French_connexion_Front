import { CLOSE_LOG_IN, OPEN_LOG_IN, CLOSE_SIGN_IN, OPEN_SIGN_IN } from 'src/actions';

const initialState = {
  isConnected: false,
  isLogInOpen: false,
  isSignInOpen: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CLOSE_LOG_IN:
      return {
        ...state,
        isLogInOpen: false,
      };
    case OPEN_LOG_IN:
      return {
        ...state,
        isLogInOpen: true,
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
      };
    default:
      return state;
  }
};
