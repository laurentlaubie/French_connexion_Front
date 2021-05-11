// action type CLOSE_SIGN_IN
export const CLOSE_SIGN_IN = 'CLOSE_SIGN_IN';
export const SET_SELECTED = 'SET_SELECTED';
export const SET_NEW_MARKER = 'SET_NEW_MARKER';
export const SET_ADRESS = 'SET_ADRESS';
export const SET_CENTER = 'SET_CENTER';

// action creator closeSignIn
export const closeSignIn = () => ({
  type: CLOSE_SIGN_IN,
});

export const setSelected = (marker) => ({
  type: SET_SELECTED,
  marker,
});

export const setNewMarker = (marker) => ({
  type: SET_NEW_MARKER,
  marker,
});

export const setNewAdress = (adress) => ({
  type: SET_ADRESS,
  adress,
});

export const setNewCenter = (center) => ({
  type: SET_CENTER,
  center,
});

