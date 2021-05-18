// action type LOAD_HOBBIES_LIST
export const LOAD_HOBBIES_LIST = 'LOAD_HOBBIES_LIST';

// action creator loadHobbiesList
export const loadHobbiesList = () => ({
  type: LOAD_HOBBIES_LIST,
});

// action type SAVE_HOBBIES_LIST
export const SAVE_HOBBIES_LIST = 'SAVE_HOBBIES_LIST';

// action creator saveHobbiesList
export const saveHobbiesList = (hobbiesList) => ({
  type: SAVE_HOBBIES_LIST,
  hobbiesList,
});

// action type SAVE_MY_HOBBIES_IN_STATE
export const SAVE_MY_HOBBIES_IN_STATE = 'SAVE_MY_HOBBIES_IN_STATE';

// action creator saveMyHobbiesInState
export const saveMyHobbiesInState = (value) => ({
  type: SAVE_MY_HOBBIES_IN_STATE,
  value,
});
