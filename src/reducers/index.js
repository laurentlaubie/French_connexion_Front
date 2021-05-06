import { CLOSE_SIGN_IN, OPEN_SIGN_IN } from 'src/actions';

const initialState = {
  isConnected: false,
  isSignInOpen: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
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
