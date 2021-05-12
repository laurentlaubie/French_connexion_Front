export const SET_SELECTED = 'SET_SELECTED';

export const setSelected = (marker) => ({
  type: SET_SELECTED,
  marker,
});

export const SET_NEW_MARKER = 'SET_NEW_MARKER';

export const setNewMarker = (marker) => ({
  type: SET_NEW_MARKER,
  marker,
});

export const SET_ADRESS = 'SET_ADRESS';

export const setNewAdress = (adress) => ({
  type: SET_ADRESS,
  adress,
});

export const SET_CENTER = 'SET_CENTER';

export const setNewCenter = (center) => ({
  type: SET_CENTER,
  center,
});
