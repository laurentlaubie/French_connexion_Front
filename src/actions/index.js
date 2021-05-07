// action type CLOSE_SIGN_IN
export const CLOSE_SIGN_IN = 'CLOSE_SIGN_IN';
export const SET_SELECTED = 'SET_SELECTED';

// action creator closeSignIn
export const closeSignIn = () => ({
  type: CLOSE_SIGN_IN,
});

export const setSelected = (marker) => ({
  type: SET_SELECTED,
  marker,
});
