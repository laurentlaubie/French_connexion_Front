// action type TOGGLE_CHECK_BOX
export const TOGGLE_CHECK_BOX = 'TOGGLE_CHECK_BOX';

// action creator toggleCheckBox
export const toggleCheckBox = (id, value) => ({
  type: TOGGLE_CHECK_BOX,
  id,
  value,
});

// action type SAVE_MY_HOBBIES_IN_STATE
export const SAVE_MY_HOBBIES_IN_STATE = 'SAVE_MY_HOBBIES_IN_STATE';

// action creator saveMyHobbiesInState
export const saveMyHobbiesInState = (myHobbies) => ({
  type: SAVE_MY_HOBBIES_IN_STATE,
  myHobbies,
});
