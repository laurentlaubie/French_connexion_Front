import { CLOSE_SIGN_IN } from 'src/actions';

const initialState = {
  isConnected: true,
  isSignInOpen: true,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CLOSE_SIGN_IN:
      return {
        ...state,
        isSignInOpen: false,
      };
    default:
      return state;
  }
};
